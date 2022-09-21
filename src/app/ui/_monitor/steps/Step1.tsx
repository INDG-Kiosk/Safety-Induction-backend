/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react'
import { KTSVG } from '../../../../_metronic/helpers'
import { Field, ErrorMessage } from 'formik'

const Step1: FC = () => {
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder d-flex align-items-center text-dark'>
          මුලික තොරතුරු
          <i
            className='fas fa-exclamation-circle ms-2 fs-7'
            data-bs-toggle='tooltip'
            title='Billing is issued based on your selected account type'
          ></i>
        </h2>


      </div>

      <div className='fv-row'>
        <div className='row'>
          <div className='mb-10 fv-row'>
            <label className='form-label mb-3'>ප්‍රවාහනය</label>

            <select className='form-select form-select-solid form-select-lg fw-bold'>
              <option value=''>Select</option>
              <option value='AF'>SK Musinghe</option>
              <option value='AX'>DK pvt Ltd</option>
            </select>
            <div className='text-danger mt-2'>
              <ErrorMessage name='accountName' />
            </div>
          </div>

          <div className='mb-10 fv-row'>
            <label className='form-label mb-3'>ප්‍රයිම්මුර අංකය</label>

            <Field
              type='text'
              className='form-control form-control-lg form-control-solid'
              name='accountName'
            />
            <div className='text-danger mt-2'>
              <ErrorMessage name='accountName' />
            </div>
          </div>

          <div className='mb-10 fv-row'>
            <label className='form-label mb-3'>ටෑන්කර් අංකය</label>

            <Field
              type='text'
              className='form-control form-control-lg form-control-solid'
              name='accountName'
            />
            <div className='text-danger mt-2'>
              <ErrorMessage name='accountName' />
            </div>
          </div>


          <div className='mb-10 fv-row'>
            <label className='form-label mb-3'>ට්‍රක්  අංකය</label>

            <Field
              type='text'
              className='form-control form-control-lg form-control-solid'
              name='accountName'
            />
            <div className='text-danger mt-2'>
              <ErrorMessage name='accountName' />
            </div>
          </div>

          <div className='mb-10 fv-row'>
            <label className='form-label mb-3'>රියදුරාගේ නම</label>

            <Field
              type='text'
              className='form-control form-control-lg form-control-solid'
              name='accountName'
            />
            <div className='text-danger mt-2'>
              <ErrorMessage name='accountName' />
            </div>
          </div>

          <div className='mb-10 fv-row'>
            <label className='form-label mb-3'>සහයකයාගේ නම </label>

            <Field
              type='text'
              className='form-control form-control-lg form-control-solid'
              name='accountName'
            />
            <div className='text-danger mt-2'>
              <ErrorMessage name='accountName' />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export { Step1 }
