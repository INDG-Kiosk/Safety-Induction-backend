import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'

const VehicleIndexBreadCrumbs = [
  {
    title: 'Vehicle Index',
    path: '/Reports/vehicleindex',
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

function TablesWidget10() {
  return (
    <div className={`card`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Vehicle Index </span>
          <span className='text-muted mt-1 fw-bold fs-7'>Report</span>
        </h3>
      </div>
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          <img style={{width: '90%'}} src={toAbsoluteUrl('/media/Img/vehicleindex.png')}></img>
        </div>
      </div>
    </div>
  )
}

function VehicleIndex() {
  return (
    <>
      {/* begin::Row */}
      <div className='row gy-5 g-xl-12'>
        <TablesWidget10 />
      </div>
      {/* end::Row */}
    </>
  )
}

function VehicleIndexWrapper() {
  return (
    <>
      <PageTitle breadcrumbs={VehicleIndexBreadCrumbs}>Vehicle Index Report</PageTitle>
      <VehicleIndex />
    </>
  )
}

export default VehicleIndexWrapper
