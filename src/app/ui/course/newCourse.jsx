import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import React, {useEffect, useState} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import axios from 'axios'
import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
import ErrorMessage from '../common/message'
import Loading from '../common/loading'
import {axioDefaultConfig} from '../common/commonResource'
import {useDataLayerValue} from '../../../DataLayer'

const breadCrumb = [
  {
    title: 'Home',
    path: '/dashboard',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '/',
    path: '#',
    isSeparator: false,
    isActive: false,
  },
  {
    title: 'Courses',
    path: '/course/all',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '/',
    path: '#',
    isSeparator: false,
    isActive: false,
  },
]

function NewCourseWrapper(props) {
  const [InitialLoading, setInitialLoading] = useState(true)
  const [{token}, dispatch] = useDataLayerValue()
  const [error, setError] = useState({status: 'E', text: ''})
  const [errorEnglish, setErrorEnglish] = useState({status: 'E', text: ''})
  const [errorSinhala, setErrorSinhala] = useState({status: 'E', text: ''})
  const [errorTamil, setErrorTamil] = useState({status: 'E', text: ''})

  const [isSubmitting, setSubmitting] = useState('')

  const [file, setFile] = useState()
  const [uploading, setUploading] = useState(0)
  const [fileName, setFileName] = useState()
  const [isUploadingFileType, setisUploadingFileType] = useState('')
  const [sites, setSites] = useState([])
  const [state, setState] = useState({
    code: 0,
    title: '',
    passRate: '',
    siteCode: 0,
    isActive: true,
  })

  const saveFile = (e) => {
    console.log(e.target.files[0])
    setFile(e.target.files[0])
    setFileName(e.target.files[0].name)
  }

  const UploadFile = async (lang) => {
    setisUploadingFileType(lang)
    setError('')
    setErrorEnglish('')
    setErrorSinhala('')
    setErrorTamil('')
    setSubmitting(lang)
    setUploading(0)

    if (file == undefined) {
      setSubmitting('')
      switch (lang) {
        case 'en':
          setErrorEnglish({status: 'E', text: 'file is missing'})
          return
        case 'si':
          setErrorSinhala({status: 'E', text: 'file is missing'})
          return
        case 'ta':
          setErrorTamil({status: 'E', text: 'file is missing'})
          return
      }
    }

    const data = new FormData()
    data.append('Files', file)
    setTimeout(() => {
      let config = {
        ...axioDefaultConfig,
        method: 'post',
        url:
          process.env.REACT_APP_INSEE_KIOSK_BACKEND_API +
          '/api/courses/' +
          state.code +
          '/videos?lang=' +
          lang,
        data: data,
        headers: {...axioDefaultConfig.headers, Authorization: 'Bearer ' + token},
        onUploadProgress: (data) => {
          //Set the progress value to show the progress bar
          setUploading(Math.round((100 * data.loaded) / data.total))
        },
      }
      axios(config)
        .then(function (response) {
          setSubmitting('')
          setisUploadingFileType('')
          setFile(undefined)
          setFileName('')
          setUploading(0)
          switch (lang) {
            case 'en':
              if (response?.data.status === 'S') {
                state.video = response.data.result
              }
              setErrorEnglish(response?.data)
              break
            case 'si':
              if (response?.data.status === 'S') {
                state.video_SN = response.data.result
              }
              setErrorSinhala(response?.data)
              break
            case 'ta':
              if (response?.data.status === 'S') {
                state.video_TA = response.data.result
              }
              setErrorTamil(response?.data)
              break
          }
        })
        .catch(function (error) {
          if (error?.response?.status === 401) {
            dispatch({
              type: 'SET_TOKEN',
              token: null,
            })
            return
          }

          setSubmitting('')
          if (error?.response?.data?.status === 'S') {
            switch (lang) {
              case 'en':
                setErrorEnglish(error?.response?.data)
                break
              case 'si':
                setErrorSinhala(error?.response?.data)
                break
              case 'ta':
                setErrorTamil(error?.response?.data)
                break
            }
            return
          }
          const message = Object.entries(error?.response?.data?.errors)
            .map(([key, value]) => value)
            .join(',')
          switch (lang) {
            case 'en':
              setErrorEnglish({status: 'E', text: message})
              break
            case 'si':
              setErrorSinhala({status: 'E', text: message})
              break
            case 'ta':
              setErrorTamil({status: 'E', text: message})
              break
          }
        })
    }, 200)
  }

  const validationRules = Yup.object().shape({
    title: Yup.string().min(2, 'Too Short!').max(500, 'Too Long!').required('Required'),
    passRate: Yup.number()
      .min(30, 'Value should be greater than 30 and less than 100')
      .max(100, 'Value should be greater than or equal 30 and less than or equal 100')
      .required('Required'),
  })

  useEffect(() => {
    const id = props.match?.params?.id ?? 0
    const getSites = axios({
      ...axioDefaultConfig,
      method: 'get',
      url: process.env.REACT_APP_INSEE_KIOSK_BACKEND_API + '/api/sites',
      headers: {...axioDefaultConfig.headers, Authorization: 'Bearer ' + token},
    })

    const getCourseInfo = axios({
      ...axioDefaultConfig,
      method: 'get',
      url: process.env.REACT_APP_INSEE_KIOSK_BACKEND_API + '/api/courses/' + id,
      headers: {...axioDefaultConfig.headers, Authorization: 'Bearer ' + token},
    })

    if (id === 0) {
      axios
        .all([getSites])
        .then(
          axios.spread((...responses) => {
            const getSitesResponse = responses[0]
            if (getSitesResponse?.data?.status === 'S') {
              setSites(getSitesResponse?.data?.result)
              setInitialLoading(false)
            }
          })
        )
        .catch(function (error) {
          handleErros(error)
        })
      return
    }

    axios
      .all([getSites, getCourseInfo])
      .then(
        axios.spread((...responses) => {
          const getSitesResponse = responses[0]
          const getCourseInfoResponse = responses[1]
          if (
            getSitesResponse?.data?.status === 'S' &&
            getCourseInfoResponse?.data?.status === 'S'
          ) {
            console.log(getCourseInfoResponse?.data?.result)
            setState(getCourseInfoResponse?.data?.result)
            setSites(getSitesResponse?.data?.result)
            setInitialLoading(false)
          }
        })
      )
      .catch(function (error) {
        handleErros(error)
      })
  }, [])

  if (InitialLoading) return <Loading />

  function handleErros(error) {
    if (error?.response?.status === 401) {
      dispatch({
        type: 'SET_TOKEN',
        token: null,
      })
      return
    }
    setSubmitting('')
    if (error?.response?.data?.status === 'E') {
      setError(error?.response?.data)
      return
    }
    const message = Object.entries(error?.response?.data?.errors)
      .map(([key, value]) => value)
      .join(',')
    setError({status: 'E', text: message})
  }

  return (
    <>
      <Formik
        initialValues={state}
        validationSchema={validationRules}
        onSubmit={(values, {}) => {
          setSubmitting('BASIC')
          setTimeout(() => {
            let config = axioDefaultConfig
            if (values.code > 0) {
              config = {
                ...axioDefaultConfig,
                method: 'put',
                url: process.env.REACT_APP_INSEE_KIOSK_BACKEND_API + '/api/courses',
                data: values,
                headers: {...axioDefaultConfig.headers, Authorization: 'Bearer ' + token},
              }
            } else {
              config = {
                ...axioDefaultConfig,
                method: 'post',
                url: process.env.REACT_APP_INSEE_KIOSK_BACKEND_API + '/api/courses',
                data: values,
                headers: {...axioDefaultConfig.headers, Authorization: 'Bearer ' + token},
              }
            }
            axios(config)
              .then(function (response) {
                setSubmitting('')
                setError(response?.data)
                if (response?.data?.status === 'S') {
                  if (values.code === 0) {
                    values.code = response?.data?.result
                    state.code = values.code
                    setState({...state, code: response?.data?.result})
                  }
                }
              })
              .catch(function (error) {
                handleErros(error)
              })
          }, 200)
        }}
      >
        {({values, errors, touched, handleChange, handleBlur, handleSubmit}) => (
          <Form onSubmit={handleSubmit}>
            {state.code == 0 && <PageTitle breadcrumbs={breadCrumb}>New Course</PageTitle>}
            {state.code > 0 && <PageTitle breadcrumbs={breadCrumb}>Update Course</PageTitle>}

            <div className='row gy-5 g-xl-12'>
              <div className='card mb-5 mb-xl-10'>
                <div
                  className='card-header border-0 cursor-pointer'
                  role='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#kt_account_profile_details'
                  aria-expanded='true'
                  aria-controls='kt_account_profile_details'
                >
                  <div className='card-title m-0'>
                    {state.code === 0 && <h3 className='fw-bolder m-0'>New Course </h3>}
                    {state.code > 0 && <h3 className='fw-bolder m-0'>Update Course </h3>}
                  </div>
                </div>

                <div id='kt_account_profile_details' className='collapse show'>
                  <div className='form'>
                    <div className='card-body border-top p-9'>
                      <ErrorMessage error={error} />

                      <div className='row mb-6'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                          Title
                        </label>

                        <div className='col-lg-8'>
                          <div className='row'>
                            <div className='col-lg-12 fv-row'>
                              <input
                                type='text'
                                className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                placeholder='Course Title'
                                name='title'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.title}
                              />
                            </div>
                          </div>
                          {errors.title && touched.title ? (
                            <div className='text-danger fs-7 fw-bolder'>{errors.title}</div>
                          ) : null}
                        </div>
                      </div>

                      <div className='row mb-6'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                          Pass Rate
                        </label>

                        <div className='col-lg-8'>
                          <div className='row'>
                            <div className='col-lg-12 fv-row'>
                              <input
                                type='number'
                                className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                placeholder='Course Pass Rate %'
                                name='passRate'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.passRate}
                              />
                            </div>
                          </div>
                          {errors.passRate && touched.passRate ? (
                            <div className='text-danger fs-7 fw-bolder'>{errors.passRate}</div>
                          ) : null}
                        </div>
                      </div>
                      <div className='row mb-6'>
                        <label className='col-lg-4 col-form-label  fw-bold fs-6'>Site</label>

                        <div className='col-lg-8 fv-row'>
                          <select
                            name='siteCode'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.siteCode}
                            className='form-select form-select-lg '
                          >
                            <option value='0'>--</option>
                            {sites.map((d, key) => (
                              <option value={d.code}>{d.name}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className='row mb-6'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                          IsActive
                        </label>
                        <div className='col-lg-8 d-flex align-items-center'>
                          <div className='form-check form-check-solid form-switch fv-row'>
                            <input
                              className='form-check-input w-45px h-30px'
                              type='checkbox'
                              name='isActive'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              checked={values.isActive}
                            />
                            <label className='form-check-label'></label>
                          </div>
                        </div>
                      </div>
                      {state.code > 0 && (
                        <div className='row mb-6'>
                          <label className='col-lg-4 col-form-label  fw-bold fs-6'>Questions</label>
                          <div className='col-lg-8 d-flex align-items-left'>
                            <a
                              style={{marginTop: '10px'}}
                              href={'/course-question/map/' + state.code}
                            >
                              map questions
                            </a>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className='card-footer d-flex justify-content-end py-6 px-9'>
                      <button
                        type='submit'
                        className='btn btn-primary'
                        disabled={isSubmitting !== ''}
                      >
                        <span className='indicator-progress' style={{display: 'block'}}>
                          {!(isSubmitting == 'BASIC') && (
                            <span className='indicator-label'>
                              Save &nbsp; <i class='fas fa-chevron-right fs-1x'></i>
                            </span>
                          )}
                          {isSubmitting == 'BASIC' && (
                            <span className='indicator-progress' style={{display: 'block'}}>
                              <span className='spinner-border spinner-border-lg align-middle ms-2'></span>
                            </span>
                          )}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>

      {state.code > 0 && (
        <>
          <div className='row gy-5 g-xl-12'>
            <div className='card mb-5 mb-xl-10'>
              <div
                className='card-header border-0 cursor-pointer'
                role='button'
                data-bs-toggle='collapse'
                data-bs-target='#kt_account_profile_details'
                aria-expanded='true'
                aria-controls='kt_account_profile_details'
              >
                <div className='card-title m-0'>
                  <h3 className='fw-bolder m-0'> English Video </h3>
                </div>
              </div>

              <div id='kt_account_profile_details' className='collapse show'>
                <div className='form'>
                  <div className='card-body border-top p-9'>
                    <ErrorMessage error={errorEnglish} />
                    <div className='row mb-6'>
                      <div className='col-lg-12'>
                        <div className='row'>
                          <div className='col-lg-12 fv-row'>
                            {!(isSubmitting == 'en') && (
                              <>
                                <video width='100%' height='300px' controls>
                                  <source
                                    src={
                                      process.env.REACT_APP_INSEE_KIOSK_BACKEND_API +
                                      '/Uploads/' +
                                      state.video
                                    }
                                    type='video/mp4'
                                  />
                                </video>

                                <input
                                  type='file'
                                  accept='.mp4'
                                  className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                  name='file'
                                  onChange={saveFile}
                                />
                              </>
                            )}
                            {isSubmitting == 'en' && (
                              <span className='indicator-progress' style={{display: 'block'}}>
                                <span className='spinner-border spinner-border-lg align-middle ms-2'></span>{' '}
                                Uploading..(<b>{uploading}%</b>)
                                <br />
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='card-footer d-flex justify-content-end py-6 px-9'>
                    <button
                      type='submit'
                      className='btn btn-primary'
                      disabled={isSubmitting !== ''}
                      onClick={(e) => UploadFile('en')}
                    >
                      <span className='indicator-progress' style={{display: 'block'}}>
                        {!(isSubmitting == 'en') && (
                          <span className='indicator-label'>
                            Upload &nbsp; <i class='fas fa-chevron-right fs-1x'></i>
                          </span>
                        )}
                        {isSubmitting == 'en' && (
                          <span className='indicator-progress' style={{display: 'block'}}>
                            <span className='spinner-border spinner-border-lg align-middle ms-2'></span>
                          </span>
                        )}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='row gy-5 g-xl-12'>
            <div className='card mb-5 mb-xl-10'>
              <div
                className='card-header border-0 cursor-pointer'
                role='button'
                data-bs-toggle='collapse'
                data-bs-target='#kt_account_profile_details'
                aria-expanded='true'
                aria-controls='kt_account_profile_details'
              >
                <div className='card-title m-0'>
                  <h3 className='fw-bolder m-0'> Sinhala Video </h3>
                </div>
              </div>

              <div id='kt_account_profile_details' className='collapse show'>
                <div className='form'>
                  <div className='card-body border-top p-9'>
                    <ErrorMessage error={errorSinhala} />
                    <div className='row mb-6'>
                      <div className='col-lg-12'>
                        <div className='row'>
                          <div className='col-lg-12 fv-row'>
                            {!(isSubmitting == 'si') && (
                              <>
                                <video width='100%' height='300px' controls>
                                  <source
                                    src={
                                      process.env.REACT_APP_INSEE_KIOSK_BACKEND_API +
                                      '/Uploads/' +
                                      state.video_SN
                                    }
                                    type='video/mp4'
                                  />
                                </video>
                                <input
                                  type='file'
                                  accept='.mp4'
                                  className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                  name='file'
                                  onChange={saveFile}
                                />
                              </>
                            )}
                            {isSubmitting == 'si' && (
                              <span className='indicator-progress' style={{display: 'block'}}>
                                <span className='spinner-border spinner-border-lg align-middle ms-2'></span>{' '}
                                Uploading..(<b>{uploading}%</b>)
                                <br />
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='card-footer d-flex justify-content-end py-6 px-9'>
                    <button
                      type='submit'
                      className='btn btn-primary'
                      disabled={isSubmitting !== ''}
                      onClick={(e) => UploadFile('si')}
                    >
                      <span className='indicator-progress' style={{display: 'block'}}>
                        {!(isSubmitting == 'si') && (
                          <span className='indicator-label'>
                            Upload &nbsp; <i class='fas fa-chevron-right fs-1x'></i>
                          </span>
                        )}
                        {isSubmitting == 'si' && (
                          <span className='indicator-progress' style={{display: 'block'}}>
                            <span className='spinner-border spinner-border-lg align-middle ms-2'></span>
                          </span>
                        )}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='row gy-5 g-xl-12'>
            <div className='card mb-5 mb-xl-10'>
              <div
                className='card-header border-0 cursor-pointer'
                role='button'
                data-bs-toggle='collapse'
                data-bs-target='#kt_account_profile_details'
                aria-expanded='true'
                aria-controls='kt_account_profile_details'
              >
                <div className='card-title m-0'>
                  <h3 className='fw-bolder m-0'> Tamil Video </h3>
                </div>
              </div>

              <div id='kt_account_profile_details' className='collapse show'>
                <div className='form'>
                  <div className='card-body border-top p-9'>
                    <ErrorMessage error={errorTamil} />
                    <div className='row mb-6'>
                      <div className='col-lg-12'>
                        <div className='row'>
                          <div className='col-lg-12 fv-row'>
                            {!(isSubmitting == 'ta') && (
                              <>
                                <video width='100%' height='300px' controls>
                                  <source
                                    src={
                                      process.env.REACT_APP_INSEE_KIOSK_BACKEND_API +
                                      '/Uploads/' +
                                      state.video_TA
                                    }
                                    type='video/mp4'
                                  />
                                </video>
                                <input
                                  type='file'
                                  className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                  name='file'
                                  accept='.mp4'
                                  onChange={saveFile}
                                />
                              </>
                            )}
                            {isSubmitting == 'ta' && (
                              <span className='indicator-progress' style={{display: 'block'}}>
                                <span className='spinner-border spinner-border-lg align-middle ms-2'></span>{' '}
                                Uploading..(<b>{uploading}%</b>)
                                <br />
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='card-footer d-flex justify-content-end py-6 px-9'>
                    <button
                      type='submit'
                      className='btn btn-primary'
                      disabled={isSubmitting !== ''}
                      onClick={(e) => UploadFile('ta')}
                    >
                      <span className='indicator-progress' style={{display: 'block'}}>
                        {!(isSubmitting == 'ta') && (
                          <span className='indicator-label'>
                            Upload &nbsp; <i class='fas fa-chevron-right fs-1x'></i>
                          </span>
                        )}
                        {isSubmitting == 'ta' && (
                          <span className='indicator-progress' style={{display: 'block'}}>
                            <span className='spinner-border spinner-border-lg align-middle ms-2'></span>
                          </span>
                        )}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default NewCourseWrapper
