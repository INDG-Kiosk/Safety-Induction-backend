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
]

function Config() {
  const [InitialLoading, setInitialLoading] = useState(true)
  const [error, setError] = useState({status: 'E', text: ''})
  const [isSubmitting, setSubmitting] = useState(false)
  const [{token}, dispatch] = useDataLayerValue()

  const [state, setState] = useState({
    code: 0,
    reprintValidDaysForWorker: 0,
    passValidPeridINMonthsForWorker: 0,
    passValidPeridINMonthsForVisitor: 0,
  })
  const validationRules = Yup.object().shape({
    reprintValidDaysForWorker: Yup.number().required('Required'),
    passValidPeridINMonthsForWorker: Yup.number().required('Required'),
    passValidPeridINMonthsForVisitor: Yup.number().required('Required'),
  })

  useEffect(() => {
    axios({
      ...axioDefaultConfig,
      method: 'get',
      url: process.env.REACT_APP_INSEE_KIOSK_BACKEND_API + '/api/setting',
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
                url: process.env.REACT_APP_INSEE_KIOSK_BACKEND_API + '/api/setting',
                data: values,
                headers: {...axioDefaultConfig.headers, Authorization: 'Bearer ' + token},
              }
            } else {
              config = {
                ...axioDefaultConfig,
                method: 'post',
                url: process.env.REACT_APP_INSEE_KIOSK_BACKEND_API + '/api/setting',
                data: values,
                headers: {...axioDefaultConfig.headers, Authorization: 'Bearer ' + token},
              }
            }
            axios(config)
              .then(function (response) {
                setSubmitting(false)
                setError(response?.data)
                if (response?.data?.status === 'S') {
                  // values.code = response?.data?.result
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
            <PageTitle breadcrumbs={breadCrumb}>Settings</PageTitle>
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
                    <h3 className='fw-bolder m-0'>Settings </h3>
                  </div>
                </div>

                <div id='kt_account_profile_details' className='collapse show'>
                  <div className='form'>
                    <div className='card-body border-top p-9'>
                      <ErrorMessage error={error} />

                      <div className='row mb-6'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                          Pass Valid Perid For Visitor
                        </label>

                        <div className='col-lg-8'>
                          <div className='row'>
                            <div className='col-lg-10 fv-row'>
                              <input
                                type='number'
                                className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                placeholder='Pass Valid Perid IN Months For Visitor'
                                name='passValidPeridINMonthsForVisitor'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.passValidPeridINMonthsForVisitor}
                              />
                            </div>
                            <div className='col-lg-2 col-form-label fw-bold fs-6'>Months</div>
                          </div>

                          {errors.passValidPeridINMonthsForVisitor &&
                          touched.passValidPeridINMonthsForVisitor ? (
                            <div className='text-danger fs-7 fw-bolder'>
                              {errors.passValidPeridINMonthsForVisitor}
                            </div>
                          ) : null}
                        </div>
                      </div>

                      <div className='row mb-6'>
                        <label className='col-lg-4 col-form-label  required fw-bold fs-6'>
                          Pass Valid Perid For Worker
                        </label>

                        <div className='col-lg-8'>
                          <div className='row'>
                            <div className='col-lg-10 fv-row'>
                              <input
                                type='number'
                                className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                placeholder='Pass Valid Perid IN Months For Worker'
                                name='passValidPeridINMonthsForWorker'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.passValidPeridINMonthsForWorker}
                              />
                            </div>
                            <div className='col-lg-2 col-form-label fw-bold fs-6'>Months</div>
                          </div>
                          {errors.passValidPeridINMonthsForWorker &&
                          touched.passValidPeridINMonthsForWorker ? (
                            <div className='text-danger fs-7 fw-bolder'>
                              {errors.passValidPeridINMonthsForWorker}
                            </div>
                          ) : null}
                        </div>
                      </div>

                      <div className='row mb-6'>
                        <label className='col-lg-4 col-form-label required  fw-bold fs-6'>
                          Reprint Valid Days For Worker
                        </label>

                        <div className='col-lg-8'>
                          <div className='row'>
                            <div className='col-lg-10 fv-row'>
                              <input
                                type='number'
                                className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                placeholder='Local Resource Path C:/'
                                name='reprintValidDaysForWorker'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.reprintValidDaysForWorker}
                              />
                            </div>
                            <div className='col-lg-2 col-form-label fw-bold fs-6'>Days</div>
                          </div>
                          {errors.reprintValidDaysForWorker && touched.reprintValidDaysForWorker ? (
                            <div className='text-danger fs-7 fw-bolder'>
                              {errors.reprintValidDaysForWorker}
                            </div>
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

export default Config
