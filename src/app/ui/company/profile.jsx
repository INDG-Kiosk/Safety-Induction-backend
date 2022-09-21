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
    title: 'Company',
    path: '/company/edit',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

function CompanyProfile(props) {
  const [InitialLoading, setInitialLoading] = useState(true)
  const [error, setError] = useState({status: 'E', text: ''})
  const [isSubmitting, setSubmitting] = useState(false)
  const [{token}, dispatch] = useDataLayerValue()

  const [state, setState] = useState({
    code: 0,
    name: '',
    country_Code: 'LK',
    isActive: false,
  })
  const validationRules = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(500, 'Too Long!').required('Required'),
    country_Code: Yup.string().required('Required'),
  })

  useEffect(() => {
    //  const id = props.match?.params?.id ?? 0

    /* if (id === 0) {
      setInitialLoading(false)
      return
    }*/

    axios({
      ...axioDefaultConfig,
      method: 'get',
      url: process.env.REACT_APP_INSEE_KIOSK_BACKEND_API + '/api/company/' + 0,
      headers: {...axioDefaultConfig.headers, Authorization: 'Bearer ' + token},
    })
      .then(function (response) {
        setState(response?.data)
        setInitialLoading(false)
      })
      .catch(function (error) {
        handleErros(error)
      })
  }, [])

  if (InitialLoading) return <Loading />

  function handleErros(error) {
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

            config = {
              ...axioDefaultConfig,
              method: 'post',
              url: process.env.REACT_APP_INSEE_KIOSK_BACKEND_API + '/api/company/update',
              data: values,
              headers: {...axioDefaultConfig.headers, Authorization: 'Bearer ' + token},
            }

            axios(config)
              .then(function (response) {
                setSubmitting(false)
                setError(response?.data)
                if (response?.data?.status === 'S') {
                  // response?.data?.result
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
            <PageTitle breadcrumbs={breadCrumb}>Profile</PageTitle>
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
                    <h3 className='fw-bolder m-0'>Company Profile </h3>
                  </div>
                </div>

                <div id='kt_account_profile_details' className='collapse show'>
                  <div className='form'>
                    <div className='card-body border-top p-9'>
                      <ErrorMessage error={error} />

                      <div className='row mb-6'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                          Name
                        </label>

                        <div className='col-lg-8'>
                          <div className='row'>
                            <div className='col-lg-12 fv-row'>
                              <input
                                type='text'
                                className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                placeholder='Contractor Name in English'
                                name='name'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                              />
                            </div>
                          </div>
                          {errors.name && touched.name ? (
                            <div className='text-danger fs-7 fw-bolder'>{errors.name}</div>
                          ) : null}
                        </div>
                      </div>

                      {/*
                      <div className='row mb-6'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                          Country Code
                        </label>

                        <div className='col-lg-8'>
                          <div className='row'>
                            <div className='col-lg-12 fv-row'>
                              <select
                                name='country_Code'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.country_Code}
                                className='form-select form-select-lg '
                              >
                                <option value='LK'>LK</option>
                              </select>
                            </div>
                          </div>
                          {errors.country_Code && touched.country_Code ? (
                            <div className='text-danger fs-7 fw-bolder'>{errors.country_Code}</div>
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
                       */}
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

export default CompanyProfile
