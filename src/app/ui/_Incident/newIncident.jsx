import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'

const profileBreadCrumbs = [
  {
    title: 'Incidents',
    path: '/Incident/all',
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
          <h3 className='fw-bolder m-0'>New Incident</h3>
        </div>
      </div>

      <div id='kt_account_profile_details' className='collapse show'>
        <form noValidate className='form'>
          <div className='card-body border-top p-9'>
            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>Incident Name</label>

              <div className='col-lg-8'>
                <div className='row'>
                  <div className='col-lg-12 fv-row'>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                      placeholder='Incident Name'
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>Incident Date</label>

              <div className='col-lg-8 fv-row'>
                <input
                  type='date'
                  className='form-control form-control-lg form-control-solid'
                  placeholder=''
                />
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                Incident Place
              </label>

              <div className='col-lg-8 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Incident Place'
                />
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                Incident Driver Name
              </label>

              <div className='col-lg-8 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Incident Driver Name'
                />
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>Remark</label>

              <div className='col-lg-8 fv-row'>
                <textarea
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Remark'
                />
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>Affiliation</label>

              <div className='col-lg-8 fv-row'>
                <textarea
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Affiliation'
                />
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                Route information
              </label>

              <div className='col-lg-8 fv-row'>
                <textarea
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Route information'
                />
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                Violation or not
              </label>
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

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'> Image(s)</label>
              <div className='col-lg-2'>
                <div
                  className='image-input image-input-outline'
                  data-kt-image-input='true'
                  style={{backgroundImage: `url(${toAbsoluteUrl('/media/img/blank.png')})`}}
                >
                  <div
                    className='image-input-wrapper w-125px h-125px'
                    style={{backgroundImage: `url(${toAbsoluteUrl('/media/img/blank.png')})`}}
                  ></div>
                </div>
              </div>
              <div className='col-lg-2'>
                <div
                  className='image-input image-input-outline'
                  data-kt-image-input='true'
                  style={{backgroundImage: `url(${toAbsoluteUrl('/media/img/blank.png')})`}}
                >
                  <div
                    className='image-input-wrapper w-125px h-125px'
                    style={{backgroundImage: `url(${toAbsoluteUrl('/media/img/blank.png')})`}}
                  ></div>
                </div>
              </div>
              <div className='col-lg-2'>
                <div
                  className='image-input image-input-outline'
                  data-kt-image-input='true'
                  style={{backgroundImage: `url(${toAbsoluteUrl('/media/img/blank.png')})`}}
                >
                  <div
                    className='image-input-wrapper w-125px h-125px'
                    style={{backgroundImage: `url(${toAbsoluteUrl('/media/img/blank.png')})`}}
                  ></div>
                </div>
              </div>
              <div className='col-lg-2'>
                <div
                  className='image-input image-input-outline'
                  data-kt-image-input='true'
                  style={{backgroundImage: `url(${toAbsoluteUrl('/media/img/blank.png')})`}}
                >
                  <div
                    className='image-input-wrapper w-125px h-125px'
                    style={{backgroundImage: `url(${toAbsoluteUrl('/media/img/blank.png')})`}}
                  ></div>
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

function NewIncident() {
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

function NewIncidentWrapper() {
  return (
    <>
      <PageTitle breadcrumbs={profileBreadCrumbs}>New Incident</PageTitle>
      <NewIncident />
    </>
  )
}

export default NewIncidentWrapper
