/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
//import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as auth from '../redux/AuthRedux'
import { login } from '../redux/AuthCRUD'
import { toAbsoluteUrl } from '../../../../_metronic/helpers'
import { axioDefaultConfig } from '../../../../app/ui/common/commonResource'
import { useDataLayerValue } from "../../../../DataLayer";
import axios from 'axios'


const loginSchema = Yup.object().shape({
  email: Yup.string()
    //.email('Wrong u format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email/Username is required'),
  password: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required'),
})

const initialValues = {
  email: '',
  password: '',
  _token: ''
}

/*
  Formik+YUP+Typescript:
  https://jaredpalmer.com/formik/docs/tutorial#getfieldprops
  https://medium.com/@maurice.de.beijer/yup-validation-and-typescript-and-formik-6c342578a20e
*/

export function Login() {
  const [loading, setLoading] = useState(false)
  //const dispatch = useDispatch()
  const [{ token }, dispatch] = useDataLayerValue();
  const [tempToken, setTempToken] = useState('');
  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      setLoading(true)
      setTimeout(() => {
        // console.log('log')
        axios({
          ...axioDefaultConfig,
          method: 'post',
          url: process.env.REACT_APP_INSEE_KIOSK_BACKEND_API + '/api/accounts/token',
          data: values,
        })
          .then(function (response) {
            if (response?.data?.token !== '' && response?.data?.token !== null) {
              values._token = response?.data?.token;
              setTempToken(response?.data?.token)
              console.log(values._token);
              setTimeout(() => {
                axios({
                  ...axioDefaultConfig,
                  method: 'get',
                  url: process.env.REACT_APP_INSEE_KIOSK_BACKEND_API + '/api/accounts/loggeduser',
                  data: values,
                  headers: { ...axioDefaultConfig.headers, Authorization: 'Bearer ' + response?.data?.token },
                }).then(function (response) {
                  setLoading(false)
                  console.log(values._token);
                  console.log(tempToken);
                  dispatch({
                    type: "SET_USER",
                    user: response?.data?.result,
                  });
                  console.log(tempToken)
                  dispatch({
                    type: "SET_TOKEN",
                    token: values._token,
                  });
                }).catch(function (error) {
                  setLoading(false)
                  setSubmitting(false)
                  setStatus('The login detail is incorrect x')
                })
              }, 1000)

              // dispatch(auth.actions.login(response?.data?.token))
              // dispatch(auth.actions.setUser(response?.data))
            } else {
              setSubmitting(false)
              setStatus(response.data.message)
            }
          })
          .catch(function (error) {
            setLoading(false)
            setSubmitting(false)
            setStatus('The login detail is incorrect')
          })
      }, 1000)
    },
  })

  return (
    <form
      className='form w-100'
      onSubmit={formik.handleSubmit}
      noValidate
      id='kt_login_signin_form'
    >
      {/* begin::Heading */}
      <div className='text-center mb-10'>
        <h1 className='text-dark mb-3'>Sign In to INSEE KIOSK BACKEND</h1>
      </div>
      {/* begin::Heading */}

      {formik.status ? (
        <div className='mb-lg-15 alert alert-danger'>
          <div className='alert-text font-weight-bold'>{formik.status}</div>
        </div>
      ) : (
        <div>
        </div>
      )}

      {/* begin::Form group */}
      <div className='fv-row mb-10'>
        <label className='form-label fs-6 fw-bolder text-dark'>Email/Username</label>
        <input
          placeholder='Email'
          {...formik.getFieldProps('email')}
          className={clsx(
            'form-control form-control-lg form-control-solid',
            { 'is-invalid': formik.touched.email && formik.errors.email },
            {
              'is-valid': formik.touched.email && !formik.errors.email,
            }
          )}
          type='text'
          name='email'
          autoComplete='off'
        />
        {formik.touched.email && formik.errors.email && (
          <div className='fv-plugins-message-container'>
            <span role='alert'>{formik.errors.email}</span>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className='fv-row mb-10'>
        <div className='d-flex justify-content-between mt-n5'>
          <div className='d-flex flex-stack mb-2'>
            {/* begin::Label */}
            <label className='form-label fw-bolder text-dark fs-6 mb-0'>Password</label>
            {/* end::Label */}
            {/* begin::Link */}

            {/* end::Link */}
          </div>
        </div>
        <input
          type='password'
          placeholder='Password'
          autoComplete='off'
          {...formik.getFieldProps('password')}
          className={clsx(
            'form-control form-control-lg form-control-solid',
            {
              'is-invalid': formik.touched.password && formik.errors.password,
            },
            {
              'is-valid': formik.touched.password && !formik.errors.password,
            }
          )}
        />
        {formik.touched.password && formik.errors.password && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.password}</span>
            </div>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Action */}
      <div className='text-center'>
        <button
          type='submit'
          id='kt_sign_in_submit'
          className='btn btn-lg btn-primary w-100 mb-5'
          disabled={formik.isSubmitting || !formik.isValid}
        >
          {!loading && <span className='indicator-label'>Continue</span>}
          {loading && (
            <span className='indicator-progress' style={{ display: 'block' }}>
              Please wait...
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </button>
      </div>
      {/* end::Action */}
    </form>
  )
}

/*
    onSubmit: (values, { setStatus, setSubmitting }) => {
      setLoading(true)
      setTimeout(() => {
        login(values.email, values.password)
          .then(({ data: { accessToken } }) => {
            setLoading(false)
            dispatch(auth.actions.login(accessToken))
          })
          .catch(() => {
            setLoading(false)
            setSubmitting(false)
            setStatus('The login detail is incorrect')
          })
     */