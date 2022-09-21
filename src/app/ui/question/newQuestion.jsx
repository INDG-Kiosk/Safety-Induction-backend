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
    title: 'All Question',
    path: '/question/all',
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

function NewQuestionWrapper(props) {
  const [InitialLoading, setInitialLoading] = useState(true)
  const [error, setError] = useState({status: 'E', text: ''})
  const [isSubmitting, setSubmitting] = useState(false)
  const [{token}, dispatch] = useDataLayerValue()

  const [state, setState] = useState({
    code: 0,
    textEN: '',
    textSN: '',
    textTA: '',

    ans1Code: 0,
    ans1TextEN: '',
    ans1TextSN: '',
    ans1TextTA: '',

    ans2Code: 0,
    ans2TextEN: '',
    ans2TextSN: '',
    ans2TextTA: '',

    ans3Code: 0,
    ans3TextEN: '',
    ans3TextSN: '',
    ans3TextTA: '',

    ans4Code: 0,
    ans4TextEN: '',
    ans4TextSN: '',
    ans4TextTA: '',

    isActive: false,
  })
  const validationRules = Yup.object().shape({
    textEN: Yup.string().min(2, 'Too Short!').max(2500, 'Too Long!').required('Required'),
    textSN: Yup.string().min(2, 'Too Short!').max(2500, 'Too Long!').required('Required'),
    textTA: Yup.string().min(2, 'Too Short!').max(2500, 'Too Long!').required('Required'),

    ans1TextEN: Yup.string().min(2, 'Too Short!').max(500, 'Too Long!').required('Required'),
    ans1TextSN: Yup.string().min(2, 'Too Short!').max(500, 'Too Long!').required('Required'),
    ans1TextTA: Yup.string().min(2, 'Too Short!').max(500, 'Too Long!').required('Required'),

    ans2TextEN: Yup.string().min(2, 'Too Short!').max(500, 'Too Long!').required('Required'),
    ans2TextSN: Yup.string().min(2, 'Too Short!').max(500, 'Too Long!').required('Required'),
    ans2TextTA: Yup.string().min(2, 'Too Short!').max(500, 'Too Long!').required('Required'),

    ans3TextEN: Yup.string().min(2, 'Too Short!').max(500, 'Too Long!').required('Required'),
    ans3TextSN: Yup.string().min(2, 'Too Short!').max(500, 'Too Long!').required('Required'),
    ans3TextTA: Yup.string().min(2, 'Too Short!').max(500, 'Too Long!').required('Required'),

    ans4TextEN: Yup.string().min(2, 'Too Short!').max(500, 'Too Long!').required('Required'),
    ans4TextSN: Yup.string().min(2, 'Too Short!').max(500, 'Too Long!').required('Required'),
    ans4TextTA: Yup.string().min(2, 'Too Short!').max(500, 'Too Long!').required('Required'),
  })

  useEffect(() => {
    const id = props.match?.params?.id ?? 0

    if (id === 0) {
      setInitialLoading(false)
      return
    }

    axios({
      ...axioDefaultConfig,
      method: 'get',
      url: process.env.REACT_APP_INSEE_KIOSK_BACKEND_API + '/api/questions/' + id,
      headers: {...axioDefaultConfig.headers, Authorization: 'Bearer ' + token},
    })
      .then(function (response) {
        if (response?.data?.status === 'S') {
          const correctAns = response?.data?.result.answers.find((element) => {
            return element.isCorrectAnswer === true
          })

          const invalidAnswers = response?.data?.result.answers.filter((ans) => {
            return ans.code !== correctAns.code
          })

          setState({
            code: response?.data?.result.code,
            textEN: response?.data?.result.textEN,
            textSN: response?.data?.result.textSN,
            textTA: response?.data?.result.textTA,

            ans1Code: correctAns.code,
            ans1TextEN: correctAns.textEN,
            ans1TextSN: correctAns.textSN,
            ans1TextTA: correctAns.textTA,

            ans2Code: invalidAnswers[0].code,
            ans2TextEN: invalidAnswers[0].textEN,
            ans2TextSN: invalidAnswers[0].textSN,
            ans2TextTA: invalidAnswers[0].textTA,

            ans3Code: invalidAnswers[1].code,
            ans3TextEN: invalidAnswers[1].textEN,
            ans3TextSN: invalidAnswers[1].textSN,
            ans3TextTA: invalidAnswers[1].textTA,

            ans4Code: invalidAnswers[2].code,
            ans4TextEN: invalidAnswers[2].textEN,
            ans4TextSN: invalidAnswers[2].textSN,
            ans4TextTA: invalidAnswers[2].textTA,

            isActive: response?.data?.result.isActive,
          })
          setInitialLoading(false)
        }
      })
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

    setSubmitting(false)
    if (error?.response?.data?.status === 'E') {
      setError(error?.response?.data)
      return
    }
    if (error.response) {
      const message = Object.entries(error?.response?.data?.errors)
        .map(([key, value]) => value)
        .join(',')
      setError({status: 'E', text: message})
      return
    }
    setError({status: 'E', text: error?.message})
  }

  return (
    <>
      <Formik
        initialValues={state}
        validationSchema={validationRules}
        onSubmit={(values, {}) => {
          const data = {
            code: values.code,
            textEN: values.textEN,
            textSN: values.textSN,
            textTA: values.textTA,
            answers: [
              {
                code: values.ans1Code,
                textEN: values.ans1TextEN,
                textSN: values.ans1TextSN,
                textTA: values.ans1TextTA,
                isCorrectAnswer: true,
                isActive: true,
              },
              {
                code: values.ans2Code,
                textEN: values.ans2TextEN,
                textSN: values.ans2TextSN,
                textTA: values.ans2TextTA,
                isCorrectAnswer: false,
                isActive: true,
              },
              {
                code: values.ans3Code,
                textEN: values.ans3TextEN,
                textSN: values.ans3TextSN,
                textTA: values.ans3TextTA,
                isCorrectAnswer: false,
                isActive: true,
              },
              {
                code: values.ans4Code,
                textEN: values.ans4TextEN,
                textSN: values.ans4TextSN,
                textTA: values.ans4TextTA,
                isCorrectAnswer: false,
                isActive: true,
              },
            ],
            isActive: values.isActive,
          }

          setSubmitting(true)
          setTimeout(() => {
            let config = axioDefaultConfig
            if (values.code > 0) {
              config = {
                ...axioDefaultConfig,
                method: 'put',
                url: process.env.REACT_APP_INSEE_KIOSK_BACKEND_API + '/api/questions',
                data: data,
                headers: {...axioDefaultConfig.headers, Authorization: 'Bearer ' + token},
              }
            } else {
              config = {
                ...axioDefaultConfig,
                method: 'post',
                url: process.env.REACT_APP_INSEE_KIOSK_BACKEND_API + '/api/questions',
                headers: {...axioDefaultConfig.headers, Authorization: 'Bearer ' + token},
                data: data,
              }
            }
            axios(config)
              .then(function (response) {
                setSubmitting(false)
                setError(response?.data)
                if (response?.data?.status === 'S') {
                  if (data.code == 0) {
                    props.history.push('/question/all')
                    return
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
            {state.code === 0 && <PageTitle breadcrumbs={breadCrumb}>New Question</PageTitle>}
            {state.code > 0 && <PageTitle breadcrumbs={breadCrumb}>Update Question</PageTitle>}

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
                    {state.code === 0 && <h3 className='fw-bolder m-0'>New Question </h3>}
                    {state.code > 0 && <h3 className='fw-bolder m-0'>Update Question </h3>}
                  </div>
                </div>

                <div id='kt_account_profile_details' className='collapse show'>
                  <div className='form'>
                    <div className='card-body border-top p-9'>
                      <ErrorMessage error={error} />

                      <div className='row mb-6'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                          Question (English)
                        </label>

                        <div className='col-lg-8'>
                          <div className='row'>
                            <div className='col-lg-12 fv-row'>
                              <textarea
                                className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                placeholder='Question in English'
                                name='textEN'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.textEN}
                              />
                            </div>
                          </div>
                          {errors.textEN && touched.textEN ? (
                            <div className='text-danger fs-7 fw-bolder'>{errors.textEN}</div>
                          ) : null}
                        </div>
                      </div>

                      <div className='row mb-6'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                          Question (Sinhala)
                        </label>

                        <div className='col-lg-8'>
                          <div className='row'>
                            <div className='col-lg-12 fv-row'>
                              <textarea
                                className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                placeholder='Question in Sinhala'
                                name='textSN'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.textSN}
                              />
                            </div>
                          </div>
                          {errors.textSN && touched.textSN ? (
                            <div className='text-danger fs-7 fw-bolder'>{errors.textSN}</div>
                          ) : null}
                        </div>
                      </div>

                      <div className='row mb-6'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                          Question (Tamil)
                        </label>

                        <div className='col-lg-8'>
                          <div className='row'>
                            <div className='col-lg-12 fv-row'>
                              <textarea
                                className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                placeholder='Question in Tamil'
                                name='textTA'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.textTA}
                              />
                            </div>
                          </div>
                          {errors.textTA && touched.textTA ? (
                            <div className='text-danger fs-7 fw-bolder'>{errors.textTA}</div>
                          ) : null}
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

                      <div className='row mb-6'>
                        <label className='col-lg-12 col-form-label required fw-bold fs-6'>
                          <i className='fas fa-check fs-1x text-success'></i> Correct Answer
                        </label>
                        <div style={{textAlign: 'center'}} className='col-lg-4 fv-row'>
                          <span style={{textAlign: 'center'}}>English</span>
                        </div>
                        <div style={{textAlign: 'center'}} className='col-lg-4 fv-row'>
                          <span>Sinhala</span>
                        </div>
                        <div style={{textAlign: 'center'}} className='col-lg-4 fv-row'>
                          <span>Tamil</span>
                        </div>
                        <div className='col-lg-4 fv-row'>
                          <input
                            type='text'
                            className='form-control form-control-lg form-control-solid'
                            placeholder='Answer 1 in English'
                            name='ans1TextEN'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.ans1TextEN}
                          />
                          {errors.ans1TextEN && touched.ans1TextEN ? (
                            <div className='text-danger fs-7 fw-bolder'>{errors.ans1TextEN}</div>
                          ) : null}
                        </div>
                        <div className='col-lg-4 fv-row'>
                          <input
                            type='text'
                            className='form-control form-control-lg form-control-solid'
                            placeholder='Answer 1 in Sinhala'
                            name='ans1TextSN'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.ans1TextSN}
                          />
                          {errors.ans1TextSN && touched.ans1TextSN ? (
                            <div className='text-danger fs-7 fw-bolder'>{errors.ans1TextSN}</div>
                          ) : null}
                        </div>
                        <div className='col-lg-4 fv-row'>
                          <input
                            type='text'
                            className='form-control form-control-lg form-control-solid'
                            placeholder='Answer 1 in Tamil'
                            name='ans1TextTA'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.ans1TextTA}
                          />
                          {errors.ans1TextTA && touched.ans1TextTA ? (
                            <div className='text-danger fs-7 fw-bolder'>{errors.ans1TextTA}</div>
                          ) : null}
                        </div>
                      </div>
                      <div className='row mb-6'>
                        <label className='col-lg-12 col-form-label required fw-bold fs-6'>
                          <i className='fas fa-times fs-1x text-danger'></i> Incorrect Answers
                        </label>
                        <div style={{textAlign: 'center'}} className='col-lg-4 fv-row'>
                          <span style={{textAlign: 'center'}}>English</span>
                        </div>
                        <div style={{textAlign: 'center'}} className='col-lg-4 fv-row'>
                          <span>Sinhala</span>
                        </div>
                        <div style={{textAlign: 'center'}} className='col-lg-4 fv-row'>
                          <span>Tamil</span>
                        </div>
                        <div className='col-lg-4 fv-row'>
                          <input
                            type='text'
                            className='form-control form-control-lg form-control-solid'
                            placeholder=' Incorrect Answer 1 in English'
                            name='ans2TextEN'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.ans2TextEN}
                          />
                          {errors.ans1TextEN && touched.ans2TextEN ? (
                            <div className='text-danger fs-7 fw-bolder'>{errors.ans2TextEN}</div>
                          ) : null}
                        </div>
                        <div className='col-lg-4 fv-row'>
                          <input
                            type='text'
                            className='form-control form-control-lg form-control-solid'
                            placeholder=' Incorrect Answer 1 in Sinhala'
                            name='ans2TextSN'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.ans2TextSN}
                          />
                          {errors.ans2TextSN && touched.ans2TextSN ? (
                            <div className='text-danger fs-7 fw-bolder'>{errors.ans2TextSN}</div>
                          ) : null}
                        </div>
                        <div className='col-lg-4 fv-row'>
                          <input
                            type='text'
                            className='form-control form-control-lg form-control-solid'
                            placeholder=' Incorrect Answer 1 in Tamil'
                            name='ans2TextTA'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.ans2TextTA}
                          />
                          {errors.ans2TextTA && touched.ans2TextTA ? (
                            <div className='text-danger fs-7 fw-bolder'>{errors.ans2TextTA}</div>
                          ) : null}
                        </div>
                      </div>
                      <div className='row mb-6'>
                        <div className='col-lg-4 fv-row'>
                          <input
                            type='text'
                            className='form-control form-control-lg form-control-solid'
                            placeholder='Incorrect Answer 2 in English'
                            name='ans3TextEN'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.ans3TextEN}
                          />
                          {errors.ans1TextEN && touched.ans3TextEN ? (
                            <div className='text-danger fs-7 fw-bolder'>{errors.ans3TextEN}</div>
                          ) : null}
                        </div>
                        <div className='col-lg-4 fv-row'>
                          <input
                            type='text'
                            className='form-control form-control-lg form-control-solid'
                            placeholder='Incorrect Answer 2 in Sinhala'
                            name='ans3TextSN'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.ans3TextSN}
                          />
                          {errors.ans3TextSN && touched.ans3TextSN ? (
                            <div className='text-danger fs-7 fw-bolder'>{errors.ans3TextSN}</div>
                          ) : null}
                        </div>
                        <div className='col-lg-4 fv-row'>
                          <input
                            type='text'
                            className='form-control form-control-lg form-control-solid'
                            placeholder='Incorrect Answer 2 in Tamil'
                            name='ans3TextTA'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.ans3TextTA}
                          />
                          {errors.ans3TextTA && touched.ans3TextTA ? (
                            <div className='text-danger fs-7 fw-bolder'>{errors.ans3TextTA}</div>
                          ) : null}
                        </div>
                      </div>
                      <div className='row mb-6'>
                        <div className='col-lg-4 fv-row'>
                          <input
                            type='text'
                            className='form-control form-control-lg form-control-solid'
                            placeholder='Incorrect Answer 3 in English'
                            name='ans4TextEN'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.ans4TextEN}
                          />
                          {errors.ans1TextEN && touched.ans4TextEN ? (
                            <div className='text-danger fs-7 fw-bolder'>{errors.ans4TextEN}</div>
                          ) : null}
                        </div>
                        <div className='col-lg-4 fv-row'>
                          <input
                            type='text'
                            className='form-control form-control-lg form-control-solid'
                            placeholder='Incorrect Answer 3 in Sinhala'
                            name='ans4TextSN'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.ans4TextSN}
                          />
                          {errors.ans4TextSN && touched.ans4TextSN ? (
                            <div className='text-danger fs-7 fw-bolder'>{errors.ans4TextSN}</div>
                          ) : null}
                        </div>

                        <div className='col-lg-4 fv-row'>
                          <input
                            type='text'
                            className='form-control form-control-lg form-control-solid'
                            placeholder='Incorrect Answer 3 in Tamil'
                            name='ans4TextTA'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.ans4TextTA}
                          />
                          {errors.ans4TextTA && touched.ans4TextTA ? (
                            <div className='text-danger fs-7 fw-bolder'>{errors.ans4TextTA}</div>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    <div className='card-footer d-flex justify-content-end py-6 px-9'>
                      <button type='submit' className='btn btn-primary' disabled={isSubmitting}>
                        <span className='indicator-progress' style={{display: 'block'}}>
                          {!isSubmitting && (
                            <span className='indicator-label'>
                              Save &nbsp; <i class='fas fa-chevron-right fs-1x'></i>
                            </span>
                          )}
                          {isSubmitting && (
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
    </>
  )
}

export default NewQuestionWrapper
