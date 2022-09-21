import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import {axioDefaultConfig} from '../common/commonResource'
import {useDataLayerValue} from '../../../DataLayer'

function DashboardPage() {
  const [locations, setLocations] = useState([])
  const [InitialLoading, setInitialLoading] = useState(true)
  const [error, setError] = useState({status: 'E', text: ''})
  const [{token, user}, dispatch] = useDataLayerValue()

  function handleErros(error) {
    if (error?.response?.status === 401) {
      dispatch({
        type: 'SET_TOKEN',
        token: null,
      })
      return
    }

    if (error?.response?.data?.status === 'E') {
      setError(error?.response?.data)
      return
    }
    const message = Object.entries(error?.response?.data?.errors)
      .map(([key, value]) => value)
      .join(',')
    setError({status: 'E', text: message})
  }

  useEffect(() => {
    setInitialLoading(true)
    axios({
      ...axioDefaultConfig,
      method: 'get',
      url: process.env.REACT_APP_INSEE_KIOSK_BACKEND_API + '/api/reports/dashboard',
      headers: {...axioDefaultConfig.headers, Authorization: 'Bearer ' + token},
    })
      .then(function (response) {
        setInitialLoading(false)
        if (response?.data?.status === 'S') {
          setLocations(response?.data?.result)
        }
      })
      .catch(function (error) {
        setInitialLoading(false)
      })
  }, [])

  const handleChange = (event) => {
    console.log(event.target.value)
    setInitialLoading(true)
    axios({
      ...axioDefaultConfig,
      method: 'get',
      url:
        process.env.REACT_APP_INSEE_KIOSK_BACKEND_API +
        '/api/reports/dashboard?code=' +
        event.target.value,
      headers: {...axioDefaultConfig.headers, Authorization: 'Bearer ' + token},
    })
      .then(function (response) {
        setInitialLoading(false)
        if (response?.data?.status === 'S') {
          setLocations(response?.data?.result)
        }
      })
      .catch(function (error) {
        setInitialLoading(false)
      })
  }

  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-6'>
        <h3 className='fw-bolder my-2'>Hello! {user.firstName + ' ' + user.lastName}</h3>
        {user.role !== 'Administrator' && (
          <>
            <div className='d-flex align-items-center my-2'>
              <div className='w-100px me-5'>
                <select
                  onChange={handleChange}
                  name='status'
                  data-control='select2'
                  data-hide-search='true'
                  className='form-select form-select-white form-select-sm'
                  defaultValue='0'
                >
                  <option value='0'>Today</option>
                  <option value='1'>30 Days</option>
                  <option value='2'>90 Days</option>
                  <option value='3'>6 Months</option>
                  <option value='4'>1 Year</option>
                </select>
              </div>
            </div>
          </>
        )}
      </div>
      {user.role !== 'Administrator' && (
        <>
          {!InitialLoading && (
            <div className='row g-6 g-xl-9'>
              {locations.map((item, index) => {
                return (
                  <div className='col-sm-6 col-xl-4'>
                    <div className='card h-100'>
                      <div className='card-header flex-nowrap border-0 pt-9'>
                        <div className='card-title m-0'>
                          <h2>
                            {item.siteName}
                            <span
                              style={{fontSize: '10px'}}
                              className='fs-6 text-gray-400 fw-bold ms-1'
                            >
                              {item.location}
                            </span>
                          </h2>
                        </div>
                      </div>
                      <div
                        style={{marginTop: '-30px', marginLeft: '-10px'}}
                        className='card-body d-flex flex-column px-9 pt-6 pb-8'
                      >
                        <div className='fs-3tx fw-bolder mb-3 text-success'>
                          {item.totalRegistered}
                        </div>
                        <table style={{width: '100%'}}>
                          <tr>
                            <td>
                              <div className='border border-gray-700 border-dashed rounded col-sm-6 mt-1  min-w-125px py-3 px-4 mb-3'>
                                <div className='fs-6  fw-bolder'>{item.totalVisitors}</div>
                                <b>Visitors</b>
                              </div>
                            </td>
                            <td>
                              <div className='border border-gray-700 border-dashed col-sm-6 rounded mt-1 min-w-125px py-3 px-4 mb-3'>
                                <div className='fs-6  fw-bolder'>{item.totalWorkers}</div>
                                <b>Workers</b>
                              </div>
                            </td>
                          </tr>
                        </table>

                        <div className='d-flex badge badge-light-danger fw-bolder me-auto px-4 py-3 align-items-center flex-wrap mb-5 mt-auto fs-6'>
                          <KTSVG
                            path='/media/icons/duotune/arrows/arr006.svg'
                            className='svg-icon-3 me-1 svg-icon-danger'
                          />

                          <div className={`fw-bolder me-2 `}>{item.totalFails}</div>
                          <div className='fw-bold '>Failed Attempts</div>
                        </div>

                        {user.role !== 'Content_Admin' && (
                          <a
                            href={'/dashboard/detail/' + item.siteCode}
                            className='fs-4 fw-bold text-hover-primary '
                            style={{fontSize: '8px'}}
                          >
                            view more
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </>
      )}
      <br />
      <br />
    </>
  )
}

function DashboardWrapper() {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
