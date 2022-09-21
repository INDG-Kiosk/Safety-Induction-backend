import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'

const profileBreadCrumbs = [
  {
    title: 'Vehicle',
    path: '/vehicle/all',
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

function Content() {
  return (
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
          <h3 className='fw-bolder m-0'>New Vehicle</h3>
        </div>
      </div>

      <div id='kt_account_profile_details' className='collapse show'>
        <form noValidate className='form'>
          <div className='card-body border-top p-9'>
            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>Vehicle No#</label>

              <div className='col-lg-8'>
                <div className='row'>
                  <div className='col-lg-12 fv-row'>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                      placeholder='Vehicle No#'
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>Transporter</label>

              <div className='col-lg-8 fv-row'>
                <select className='form-select form-select-solid form-select-lg fw-bold'>
                  <option value=''>Select</option>
                  <option value='AF'>SK Musinghe</option>
                  <option value='AX'>DK pvt Ltd</option>
                </select>
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>Vehicle Type</label>

              <div className='col-lg-8 fv-row'>
                <select className='form-select form-select-solid form-select-lg fw-bold'>
                  <option value=''>Select</option>
                  <option value='AF'>Machine</option>
                  <option value='AX'>Tailer</option>
                </select>
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                Vehicle insurance validity date
              </label>

              <div className='col-lg-8 fv-row'>
                <input
                  type='date'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Medical Expiration date'
                />
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                Revenue license validity date
              </label>

              <div className='col-lg-8 fv-row'>
                <input
                  type='date'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Medical Expiration date'
                />
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                Insurance type
              </label>

              <div className='col-lg-8 fv-row'>
                <select className='form-select form-select-solid form-select-lg fw-bold'>
                  <option value=''>Select</option>
                  <option value='AF'>A</option>
                  <option value='AX'>B</option>
                </select>
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                Vehicle fitness certificate info
              </label>

              <div className='col-lg-8'>
                <div className='row'>
                  <div className='col-lg-12 fv-row'>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                      placeholder='Vehicle fitness certificate
                      info'
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>Blocking</label>
              <div className='col-lg-8 d-flex align-items-center'>
                <div className='form-check form-check-solid form-switch fv-row'>
                  <input
                    className='form-check-input w-45px h-30px'
                    type='checkbox'
                    id='allowmarketing'
                  />
                  <label className='form-check-label'></label>
                </div>
              </div>
            </div>
          </div>

          <div className='card-footer d-flex justify-content-end py-6 px-9'>
            <button type='submit' className='btn btn-primary'>
              <span className='indicator-progress' style={{display: 'block'}}>
                Save
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

function NewVehicle() {
  return (
    <>
      {/* begin::Row */}
      <div className='row gy-5 g-xl-12'>
        <Content />
      </div>
      {/* end::Row */}
    </>
  )
}

function NewVehicleWrapper() {
  return (
    <>
      <PageTitle breadcrumbs={profileBreadCrumbs}>New Vehicle</PageTitle>
      <NewVehicle />
    </>
  )
}

export default NewVehicleWrapper
