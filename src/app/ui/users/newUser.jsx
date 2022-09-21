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
    title: 'All Users',
    path: '/user/all',
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

function NewUserWrapper(props) {
  const [InitialLoading, setInitialLoading] = useState(true)
  const [error, setError] = useState({status: 'E', text: ''})
  const [isSubmitting, setSubmitting] = useState(false)
  const [{token}, dispatch] = useDataLayerValue()

  const [state, setState] = useState({
    code: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    role: '',
    password: 'default',
    lockoutEnabled: false,
  })

  const validationRules = Yup.object().shape({
    firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    email: Yup.string().min(2, 'Too Short!').max(500, 'Too Long!').required('Required'),
    role: Yup.string().min(2, 'Too Short!').max(500, 'Too Long!').required('Required'),
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
      url: process.env.REACT_APP_INSEE_KIOSK_BACKEND_API + '/api/accounts/' + id,
      headers: {...axioDefaultConfig.headers, Authorization: 'Bearer ' + token},
    })
      .then(function (response) {
        if (response?.data?.status === 'S') {
          console.log('diaon')
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
          console.log('cal')
          setSubmitting(true)
          setTimeout(() => {
            let config = axioDefaultConfig
            if (values.code !== '') {
              config = {
                ...axioDefaultConfig,
                method: 'put',
                url: process.env.REACT_APP_INSEE_KIOSK_BACKEND_API + '/api/accounts',
                data: values,
                headers: {...axioDefaultConfig.headers, Authorization: 'Bearer ' + token},
              }
            } else {
              config = {
                ...axioDefaultConfig,
                method: 'post',
                url: process.env.REACT_APP_INSEE_KIOSK_BACKEND_API + '/api/accounts',
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
            {state.code === '' && <PageTitle breadcrumbs={breadCrumb}>New User</PageTitle>}
            {state.code !== '' && <PageTitle breadcrumbs={breadCrumb}>Update User</PageTitle>}
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
                    {state.code == '' && <h3 className='fw-bolder m-0'>New User </h3>}
                    {state.code !== '' && <h3 className='fw-bolder m-0'>Update User </h3>}
                  </div>
                </div>

                <div id='kt_account_profile_details' className='collapse show'>
                  <div className='form'>
                    <div className='card-body border-top p-9'>
                      <ErrorMessage error={error} />

                      <div className='row mb-6'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                          First Name
                        </label>

                        <div className='col-lg-8'>
                          <div className='row'>
                            <div className='col-lg-12 fv-row'>
                              <input
                                type='text'
                                className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                placeholder='First Name'
                                name='firstName'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.firstName}
                              />
                            </div>
                          </div>
                          {errors.firstName && touched.firstName ? (
                            <div className='text-danger fs-7 fw-bolder'>{errors.firstName}</div>
                          ) : null}
                        </div>
                      </div>

                      <div className='row mb-6'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                          Last Name
                        </label>

                        <div className='col-lg-8'>
                          <div className='row'>
                            <div className='col-lg-12 fv-row'>
                              <input
                                type='text'
                                className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                placeholder='Last Name'
                                name='lastName'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.lastName}
                              />
                            </div>
                          </div>
                          {errors.lastName && touched.lastName ? (
                            <div className='text-danger fs-7 fw-bolder'>{errors.lastName}</div>
                          ) : null}
                        </div>
                      </div>

                      <div className='row mb-6'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                          Email
                        </label>

                        <div className='col-lg-8'>
                          <div className='row'>
                            <div className='col-lg-12 fv-row'>
                              <input
                                type='text'
                                className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                placeholder='Email'
                                name='email'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                              />
                            </div>
                          </div>
                          {errors.email && touched.email ? (
                            <div className='text-danger fs-7 fw-bolder'>{errors.email}</div>
                          ) : null}
                        </div>
                      </div>

                      <div className='row mb-6'>
                        <label className='col-lg-4 col-form-label  fw-bold fs-6'>
                          Phone Number
                        </label>

                        <div className='col-lg-8 fv-row'>
                          <input
                            type='text'
                            className='form-control form-control-lg form-control-solid'
                            placeholder='Phone Number'
                            name='phoneNumber'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.phoneNumber}
                          />
                          {errors.phoneNumber && touched.phoneNumber ? (
                            <div className='text-danger fs-7 fw-bolder'>{errors.phoneNumber}</div>
                          ) : null}
                        </div>
                      </div>

                      <div className='row mb-6'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                          Role
                        </label>

                        <div className='col-lg-8 fv-row'>
                          <select
                            name='role'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.role}
                            className='form-select form-select-lg '
                          >
                            <option value=''>--</option>
                            <option value='Administrator'>IT Administrator</option>
                            <option value='Content_Admin'>Content Administrator</option>
                            <option value='Report_Viewer'>Report Viewer</option>
                          </select>
                          {errors.role && touched.role ? (
                            <div className='text-danger fs-7 fw-bolder'>{errors.role}</div>
                          ) : null}
                        </div>
                      </div>

                      <div className='row mb-6'>
                        <label className='col-lg-4 col-form-label  fw-bold fs-6'>Blocked</label>
                        <div className='col-lg-8 d-flex align-items-center'>
                          <div className='form-check form-check-solid form-switch fv-row'>
                            <input
                              className='form-check-input w-45px h-30px'
                              type='checkbox'
                              name='lockoutEnabled'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              checked={values.lockoutEnabled}
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

export default NewUserWrapper
