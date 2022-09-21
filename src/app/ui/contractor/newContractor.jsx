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
    title: 'Contractors',
    path: '/contractor/all',
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

function NewContractorWrapper(props) {
  const [InitialLoading, setInitialLoading] = useState(true)
  const [error, setError] = useState({status: 'E', text: ''})
  const [isSubmitting, setSubmitting] = useState(false)
  const [{token}, dispatch] = useDataLayerValue()

  const [state, setState] = useState({
    code: 0,
    nameEN: '',
    nameSN: '',
    nameTA: '',
    mailingAddress: '',
    isActive: true,
  })

  const validationRules = Yup.object().shape({
    nameEN: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    nameSN: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    nameTA: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    mailingAddress: Yup.string().min(2, 'Too Short!').max(500, 'Too Long!').required('Required'),
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
      url: process.env.REACT_APP_INSEE_KIOSK_BACKEND_API + '/api/contractors/' + id,
      headers: {...axioDefaultConfig.headers, Authorization: 'Bearer ' + token},
    })
      .then(function (response) {
        if (response?.data?.status === 'S') {
          setState(response?.data?.result)
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
          setSubmitting(true)
          setTimeout(() => {
            let config = axioDefaultConfig
            if (values.code > 0) {
              config = {
                ...axioDefaultConfig,
                method: 'put',
                url: process.env.REACT_APP_INSEE_KIOSK_BACKEND_API + '/api/contractors',
                headers: {...axioDefaultConfig.headers, Authorization: 'Bearer ' + token},
                data: values,
              }
            } else {
              config = {
                ...axioDefaultConfig,
                method: 'post',
                url: process.env.REACT_APP_INSEE_KIOSK_BACKEND_API + '/api/contractors',
                data: values,
                headers: {...axioDefaultConfig.headers, Authorization: 'Bearer ' + token},
              }
            }
            axios(config)
              .then(function (response) {
                setSubmitting(false)
                setError(response?.data)
                if (response?.data?.status === 'S') {
                  values.code = response?.data?.result
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
            {state.code === 0 && <PageTitle breadcrumbs={breadCrumb}>New Contractor</PageTitle>}
            {state.code > 0 && <PageTitle breadcrumbs={breadCrumb}>Update Contractor</PageTitle>}

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
                    {state.code === 0 && <h3 className='fw-bolder m-0'>New Contractor </h3>}
                    {state.code > 0 && <h3 className='fw-bolder m-0'>Update Contractor </h3>}
                  </div>
                </div>

                <div id='kt_account_profile_details' className='collapse show'>
                  <div className='form'>
                    <div className='card-body border-top p-9'>
                      <ErrorMessage error={error} />

                      <div className='row mb-6'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                          Contractor Name (English)
                        </label>

                        <div className='col-lg-8'>
                          <div className='row'>
                            <div className='col-lg-12 fv-row'>
                              <input
                                type='text'
                                className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                placeholder='Contractor Name in English'
                                name='nameEN'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.nameEN}
                              />
                            </div>
                          </div>
                          {errors.nameEN && touched.nameEN ? (
                            <div className='text-danger fs-7 fw-bolder'>{errors.nameEN}</div>
                          ) : null}
                        </div>
                      </div>

                      <div className='row mb-6'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                          Contractor Name (Sinhala)
                        </label>

                        <div className='col-lg-8'>
                          <div className='row'>
                            <div className='col-lg-12 fv-row'>
                              <input
                                type='text'
                                className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                placeholder='Contractor Name in Sinhala'
                                name='nameSN'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.nameSN}
                              />
                            </div>
                          </div>
                          {errors.nameSN && touched.nameSN ? (
                            <div className='text-danger fs-7 fw-bolder'>{errors.nameSN}</div>
                          ) : null}
                        </div>
                      </div>

                      <div className='row mb-6'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                          Contractor Name (Tamil)
                        </label>

                        <div className='col-lg-8'>
                          <div className='row'>
                            <div className='col-lg-12 fv-row'>
                              <input
                                type='text'
                                className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                placeholder='Contractor Name in Tamil'
                                name='nameTA'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.nameTA}
                              />
                            </div>
                          </div>
                          {errors.nameTA && touched.nameTA ? (
                            <div className='text-danger fs-7 fw-bolder'>{errors.nameTA}</div>
                          ) : null}
                        </div>
                      </div>

                      <div className='row mb-6'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                          Mail Address
                        </label>

                        <div className='col-lg-8 fv-row'>
                          <textarea
                            className='form-control form-control-lg form-control-solid'
                            placeholder='Mail Address'
                            name='mailingAddress'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.mailingAddress}
                          />
                          {errors.mailingAddress && touched.mailingAddress ? (
                            <div className='text-danger fs-7 fw-bolder'>
                              {errors.mailingAddress}
                            </div>
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

export default NewContractorWrapper
