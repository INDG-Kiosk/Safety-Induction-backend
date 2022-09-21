import React, {useState, useEffect, useRef} from 'react'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import {useTable, useFilters, useGlobalFilter, usePagination, useAsyncDebounce} from 'react-table'
import axios from 'axios'
import ErrorMessage from '../common/message'
import Loading from '../common/loading'
import {axioDefaultConfig} from '../common/commonResource'
import {useDataLayerValue} from '../../../DataLayer'
import ImageComponent from './ImageComponent'
import {compareAsc, format} from 'date-fns'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css' // This only needs to be imported once in your app

let data = []

function GlobalFilter({preGlobalFilteredRows, globalFilter, setGlobalFilter}) {
  //const count = preGlobalFilteredRows.length
  const [value, setValue] = React.useState(globalFilter)

  const onChange = (value) => {
    setGlobalFilter(value)
  }

  return (
    <div className='w-100 position-relative' autoComplete='off'>
      <KTSVG
        path='/media/icons/duotune/general/gen021.svg'
        className='svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 ms-5 translate-middle-y'
      />

      <input
        type='text'
        className='form-control form-control-solid px-15'
        name='search'
        placeholder='Search'
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value)
          onChange(e.target.value)
        }}
      />
    </div>
  )
}

function GuestProfile(props) {
  const columns = React.useMemo(
    () => [
      {
        Header: ' ',
        columns: [
          {
            Header: 'Person Name',
            accessor: 'personName',
          },
          {
            Header: 'NIC',
            accessor: 'personNIC',
          },
          {
            Header: 'Reason',
            accessor: 'reason',
          },
          {
            Header: 'inserted',
            accessor: 'inserted',
          },
          {
            Header: 'Exam Status',
            accessor: 'examStatus',
          },
          {
            Header: 'ContractorName',
            accessor: 'contractorName',
          },
          {
            Header: 'Exam Total Marks',
            accessor: 'examTotalMarks',
          },
          {
            Header: 'Exam Completed',
            accessor: 'examCompleted',
          },
          {
            Header: 'GuestImage',
            accessor: 'personProfileImage',
          },
        ],
      },
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: {pageIndex, pageSize, globalFilter},
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: {pageIndex: 0, pageSize: 50, globalFilter: ''},
    },
    useGlobalFilter,
    usePagination
  )

  const [{token}, dispatch] = useDataLayerValue()
  const [error, setError] = useState({status: 'E', text: ''})
  const [InitialLoading, setInitialLoading] = useState(true)
  const [id, setID] = useState(0)
  const [state, setState] = useState({
    siteName: '',
    siteCode: '',
    location: '',
    guestName: '',
    guestNIC: '',
    guestImage: '',
    examCompleted: '',
    examMark: '',
    examStatus: '',
    examStarted: '',
    reason: '',
    contractorCode: '',
    contractorMailingAddress: '',
    contractorName: '',
    isOpen: false,
    photoIndex: 0,
  })

  const handleShowDialog = () => {
    setState({...state, isOpen: !state.isOpen})
  }

  const breadCrumbs = [
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
      title: 'Sites',
      path: '/site/all',
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
      title: state.siteName + ' Guest List',
      path: '/dashboard/detail/' + state.siteCode,
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

  function handleErros(error) {
    if (error?.response?.data?.status === 'E') {
      setError(error?.response?.data)
      return
    }
    const message = Object.entries(error?.response?.data?.errors)
      .map(([key, value]) => value)
      .join(',')
    setError({status: 'E', text: message})
  }

  /// Loading
  useEffect(() => {
    console.log('site ' + props.match?.params?.site + ' id ' + props.match?.params?.id)
    GetData(props.match?.params?.site ?? 0, props.match?.params?.id ?? 0)
  }, [])

  const GetData = (id, nic) => {
    setInitialLoading(true)
    setTimeout(() => {
      axios({
        ...axioDefaultConfig,
        method: 'get',
        url:
          process.env.REACT_APP_INSEE_KIOSK_BACKEND_API +
          '/api/reports/site/' +
          id +
          '/guest/' +
          nic,
        headers: {...axioDefaultConfig.headers, Authorization: 'Bearer ' + token},
      })
        .then(function (response) {
          setInitialLoading(false)
          if (response?.data?.status === 'S') {
            data = response?.data?.result.data
            setState({
              ...state,
              siteCode: response?.data?.result.siteCode,
              siteName: response?.data?.result.siteName,
              location: response?.data?.result.location,
              guestName: response?.data?.result.guestName,
              guestNIC: response?.data?.result.guestNIC,
              guestImage: response?.data?.result.guestImage,
              examCompleted: response?.data?.result.examCompleted,
              examMark: response?.data?.result.examMark,
              examStatus: response?.data?.result.examStatus,
              examStarted: response?.data?.result.examStarted,
              reason: response?.data?.result.reason,
              contractorCode: response?.data?.result.contractorCode,
              contractorMailingAddress: response?.data?.result.contractorMailingAddress,
              contractorName: response?.data?.result.contractorName,
            })
            setGlobalFilter('')
          }
        })
        .catch(function (error) {
          setInitialLoading(false)
          handleErros(error)
        })
    }, 200)
  }

  if (InitialLoading) return <Loading />

  return (
    <>
      <PageTitle breadcrumbs={breadCrumbs}>{state.guestName + "'s Profile"}</PageTitle>

      <div className='card mb-5 mb-xl-10'>
        <div className='card-body pt-9 pb-0'>
          <div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
            <div className='me-7 mb-4'>
              <div className='symbol symbol-100px symbol-lg-160px symbol-fixed position-relative'>
                <img
                  onClick={(r) => handleShowDialog()}
                  src={
                    process.env.REACT_APP_INSEE_KIOSK_BACKEND_API +
                    '/ProfileImage/' +
                    state.guestImage
                  }
                />
                {state.isOpen && (
                  <Lightbox
                    mainSrc={
                      process.env.REACT_APP_INSEE_KIOSK_BACKEND_API +
                      '/ProfileImage/' +
                      state.guestImage
                    }
                    onCloseRequest={() => setState({...state, isOpen: false})}
                  />
                )}
              </div>
            </div>

            <div className='flex-grow-1'>
              <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
                <div className='d-flex flex-column'>
                  <div className='d-flex align-items-center mb-2'>
                    <a href='#' className='text-gray-800 text-hover-primary fs-2 fw-bolder me-1'>
                      {state.guestName}
                    </a>
                    <a href='#' className='badge badge-primary'>
                      {state.reason === 'WORKER' ? 'Worker' : 'Visitor'}
                    </a>
                  </div>

                  <div className='d-flex flex-wrap fw-bold fs-6 mb-4 pe-2'>
                    <a
                      href='#'
                      className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'
                    >
                      <KTSVG
                        path='/media/icons/duotune/communication/com006.svg'
                        className='svg-icon-4 me-1'
                      />
                      {state.guestNIC}
                    </a>

                    <a
                      href='#'
                      className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'
                    >
                      <KTSVG
                        path='/media/icons/duotune/general/gen018.svg'
                        className='svg-icon-4 me-1'
                      />
                      {state.siteName} ({state.location})
                    </a>
                    <a
                      href='#'
                      className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'
                    >
                      <KTSVG
                        path='/media/icons/duotune/general/gen044.svg'
                        className='svg-icon-4 me-1'
                      />
                      {data.length} attempts
                    </a>
                  </div>
                  {/*
                  {state.reason === 'WORKER' && (
                    <div
                      style={{marginTop: '-15px', display: 'none'}}
                      className='d-flex flex-wrap  text-gray-400 fw-bold  pe-2'
                    >
                      Contractor :
                      <a
                        href='#'
                        className='d-flex align-items-center text-gray-400 text-hover-primary me-5 '
                      >
                        {state.contractorName} ({state.contractorMailingAddress})
                      </a>
                    </div>
                  )}
                 */}
                </div>
              </div>

              <div className='d-flex flex-wrap flex-stack'>
                {/*  <div className='d-flex flex-column flex-grow-1 pe-8'>
                  <div className='d-flex flex-wrap'>
                    <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                      <div className='d-flex align-items-center'>
                        <div className='fs-2 fw-bolder'>{state.examStatus}</div>
                      </div>
                      <div className='fw-bold fs-6 text-gray-400'>Exam</div>
                    </div>

                    <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                      <div className='d-flex align-items-center'>
                        <div className='fs-2 fw-bolder'>{state.examMark ?? 0}</div>
                      </div>
                      <div className='fw-bold fs-6 text-gray-400'>Mark</div>
                    </div>

                    <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                      <div className='d-flex align-items-center'>
                        <div className='fs-2 fw-bolder'>
                          {state.examStarted &&
                            format(new Date(state.examStarted), 'yyyy-MM-dd HH:mm')}
                        </div>
                      </div>

                      <div className='fw-bold fs-6 text-gray-400'>Exam Started</div>
                    </div>
                    <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                      <div className='d-flex align-items-center'>
                        <div className='fs-2 fw-bolder'>
                          {state.examCompleted
                            ? format(new Date(state.examCompleted), 'yyyy-MM-dd HH:mm')
                            : '-'}
                        </div>
                      </div>

                      <div className='fw-bold fs-6 text-gray-400'>Exam Completed</div>
                    </div>
                  </div>
                </div>   */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='card mb-5 mb-xl-10'>
        <div className={`card`}>
          <div className='card-body py-3'>
            <div>
              <ErrorMessage error={error} />
              <table
                className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'
                {...getTableProps()}
              >
                <thead>
                  <td className='text-gray-600 text-gray-800 fw-bolder'></td>
                  <td className='text-gray-600 text-gray-800 fw-bolder'>Name</td>
                  <td className='text-gray-600 text-gray-800 fw-bolder'>NIC</td>
                  <td className='text-gray-600 text-gray-800 fw-bolder'>Visitor Type</td>
                  <td className='text-gray-600 text-gray-800 fw-bolder'>Contractor</td>
                  <td className='text-gray-600 text-gray-800 fw-bolder'>Pass</td>
                  <td className='text-gray-600 text-gray-800 fw-bolder'>Total Marks</td>
                  <td className='text-gray-600 text-gray-800 fw-bolder'>Pass Issued Date</td>
                  {/* {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}*/}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {page.map((row, i) => {
                    prepareRow(row)
                    return (
                      <tr {...row.getRowProps()}>
                        {/* {row.cells.map((cell) => {
                      return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    })}*/}
                        <td>
                          <ImageComponent image1={row.values.personProfileImage} />
                        </td>
                        <td>{row.values.personName}</td>
                        <td>{row.values.personNIC}</td>
                        <td>{row.values.reason === 'WORKER' ? 'Worker' : 'Visitor'}</td>
                        <td>
                          {row.values.reason == 'WORKER' && (
                            <div> {row.values.contractorName ?? ''}</div>
                          )}
                        </td>
                        <td>
                          {row.values.reason == 'WORKER' &&
                            (row.values.examStatus === 'PASSED' ? (
                              <div className='badge badge-light-success'>
                                {row.values.examStatus}
                              </div>
                            ) : (
                              <div className='badge badge-light-danger'>
                                {row.values.examStatus}
                              </div>
                            ))}
                        </td>
                        <td>
                          {row.values.reason == 'WORKER' &&
                            (row.values.examStatus === 'PASSED' ? (
                              <div className='badge badge-light-success'>
                                {row.values.examTotalMarks}
                              </div>
                            ) : (
                              <div className='badge badge-light-danger'>
                                {row.values.examTotalMarks}
                              </div>
                            ))}
                        </td>
                        <td>
                          {row.values.reason == 'WORKER' && row.values.examStatus === 'PASSED' && (
                            <>
                              {row.values.examCompleted &&
                                format(new Date(row.values.examCompleted), 'yyyy-MM-dd HH:mm')}
                            </>
                          )}
                          {row.values.reason == 'VISITOR' && (
                            <>
                              {row.values.inserted &&
                                format(new Date(row.values.inserted), 'yyyy-MM-dd HH:mm')}
                            </>
                          )}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
              {/* 
      Pagination can be built however you'd like. 
      This is just a very basic UI implementation:
    */}
            </div>
          </div>
          {/* begin::Body */}
        </div>
      </div>
    </>
  )
}

export default GuestProfile
