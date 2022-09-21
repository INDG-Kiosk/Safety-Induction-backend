import React, {useState, useEffect, useRef} from 'react'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import {useTable, useFilters, useGlobalFilter, usePagination, useAsyncDebounce} from 'react-table'
import axios from 'axios'
import ErrorMessage from '../common/message'
import Loading from '../common/loading'
import {axioDefaultConfig} from '../common/commonResource'
import {useDataLayerValue} from '../../../DataLayer'
import {compareAsc, format} from 'date-fns'

let data = []
const breadCrumbs = [
  {
    title: 'Constractor',
    path: '/contractor/all',
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

function ContractorDetail(props) {
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
            Header: 'siteCode',
            accessor: 'siteCode',
          },
          {
            Header: 'siteName',
            accessor: 'siteName',
          },
          {
            Header: 'location',
            accessor: 'siteLocation',
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
            Header: 'Exam Completed',
            accessor: 'examCompleted',
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
  const [to, setToDate] = useState(new Date())
  const [from, setFromDate] = useState(new Date(new Date().setMonth(new Date().getMonth() - 2)))
  const [id, setID] = useState(0)
  const [state, setState] = useState({
    siteName: '',
    siteCode: '',
    location: '',
    totalFails: 0,
    totalRegistered: 0,
    totalVisitors: 0,
    totalWorkers: 0,
  })

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
    setState({...state, siteCode: props.match?.params?.id ?? 0})
    setID(props.match?.params?.id ?? 0)
    GetData(props.match?.params?.id ?? 0, from, to)
  }, [])

  const GetData = (id, fromdt, todt) => {
    setInitialLoading(true)
    setTimeout(() => {
      axios({
        ...axioDefaultConfig,
        method: 'get',
        url:
          process.env.REACT_APP_INSEE_KIOSK_BACKEND_API +
          '/api/reports/dashboard/contractor/' +
          id +
          '?from=' +
          format(fromdt, 'yyyy-MM-dd') +
          '&to=' +
          format(todt, 'yyyy-MM-dd'),
        headers: {...axioDefaultConfig.headers, Authorization: 'Bearer ' + token},
      })
        .then(function (response) {
          setInitialLoading(false)
          if (response?.data?.status === 'S') {
            data = response?.data?.result.data
            setState({
              ...state,
              siteName: response?.data?.result.siteName,
              location: response?.data?.result.location,
              totalFails: response?.data?.result.totalFails,
              totalRegistered: response?.data?.result.totalRegistered,
              totalVisitors: response?.data?.result.totalVisitors,
              totalWorkers: response?.data?.result.totalWorkers,
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

  const handleChange = (event, type) => {
    console.log(event.target.value)
    if (type === 'to') {
      setToDate(new Date(event.target.value))
      GetData(id, from, new Date(event.target.value))
    } else {
      setFromDate(new Date(event.target.value))
      GetData(id, new Date(event.target.value), to)
    }
  }

  if (InitialLoading) return <Loading />

  return (
    <>
      <PageTitle breadcrumbs={breadCrumbs}>{state.siteName + "'s Worker List"}</PageTitle>
      <div className='row gy-5 g-xl-12'>
        <div className={`card`}>
          {/* begin::Header */}
          <div className='card-header border-0 pt-5'>
            <h3 className='card-title align-items-start flex-column'>
              <span className='card-label fw-bolder fs-3 mb-1'>{state.siteName}</span>
              <span className=' mt-1 fw-bold fs-7'>
                {state.location} <br />
                {data.length} Records | {state.totalRegistered} Registed |{state.totalFails} Fail
              </span>
            </h3>

            <div
              className='card-toolbar'
              data-bs-toggle='tooltip'
              data-bs-placement='top'
              data-bs-trigger='hover'
            >
              <div className='me-4'>
                From
                <input
                  type='date'
                  className='form-control form-control-lg form-control-solid'
                  placeholder=''
                  value={format(from, 'yyyy-MM-dd')}
                  onChange={(e) => handleChange(e, 'from')}
                />
              </div>
              <div className='me-4'>
                To
                <input
                  type='date'
                  className='form-control form-control-lg form-control-solid'
                  placeholder=''
                  value={format(to, 'yyyy-MM-dd')}
                  onChange={(e) => handleChange(e, 'to')}
                />
              </div>
              <div className='me-4'>
                Search
                <GlobalFilter
                  preGlobalFilteredRows={preGlobalFilteredRows}
                  globalFilter={''}
                  setGlobalFilter={setGlobalFilter}
                />
              </div>
            </div>
          </div>

          {/* end::Header */}
          {/* begin::Body */}
          <div className='card-body py-3'>
            <div>
              <ErrorMessage error={error} />
              <table
                className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'
                {...getTableProps()}
              >
                <thead>
                  <td className='text-gray-600 text-gray-800 fw-bolder'>Person Name</td>
                  <td className='text-gray-600 text-gray-800 fw-bolder'>NIC</td>
                  <td className='text-gray-600 text-gray-800 fw-bolder'>SiteName</td>
                  <td className='text-gray-600 text-gray-800 fw-bolder'>Location</td>
                  <td className='text-gray-600 text-gray-800 fw-bolder'>Start at</td>
                  <td className='text-gray-600 text-gray-800 fw-bolder'>Pass</td>
                  <td className='text-gray-600 text-gray-800 fw-bolder'>Exam Total Marks</td>
                  <td className='text-gray-600 text-gray-800 fw-bolder'>Exam Completed</td>
                  {/* {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}*/}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {page.length === 0 && (
                    <tr>
                      <td colSpan={7}>
                        <b>No Data Found!</b>
                      </td>
                    </tr>
                  )}
                  {page.map((row, i) => {
                    prepareRow(row)
                    return (
                      <tr {...row.getRowProps()}>
                        {/* {row.cells.map((cell) => {
                      return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    })}*/}
                        <td>
                          <a
                            href={
                              '/dashboard/site/' +
                              row.values.siteCode +
                              '/guest/' +
                              row.values.personNIC
                            }
                          >
                            {row.values.personName}
                          </a>
                        </td>
                        <td>{row.values.personNIC}</td>
                        <td>{row.values.siteName}</td>
                        <td>{row.values.siteLocation}</td>
                        <td>
                          {row.values.inserted &&
                            format(new Date(row.values.inserted), 'yyyy-MM-dd HH:mm')}
                        </td>
                        <td>
                          {row.values.examStatus === 'PASSED' ? (
                            <div className='badge badge-light-success'>{row.values.examStatus}</div>
                          ) : (
                            <div className='badge badge-light-danger'>{row.values.examStatus}</div>
                          )}
                        </td>
                        <td>{row.values.examTotalMarks}</td>
                        <td>
                          {row.values.examCompleted &&
                            format(new Date(row.values.examCompleted), 'yyyy-MM-dd HH:mm')}
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
              {page.length > 0 && (
                <ul className='pagination'>
                  <li className='page-item' onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    <a className='page-link'>First</a>
                  </li>
                  <li
                    className='page-item'
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                  >
                    <a className='page-link'>{'<'}</a>
                  </li>
                  <li className='page-item' onClick={() => nextPage()} disabled={!canNextPage}>
                    <a className='page-link'>{'>'}</a>
                  </li>
                  <li
                    className='page-item'
                    onClick={() => gotoPage(pageCount - 1)}
                    disabled={!canNextPage}
                  >
                    <a className='page-link'>Last</a>
                  </li>
                  <li>
                    <a className='page-link'>
                      Page{' '}
                      <strong>
                        {pageIndex + 1} of {pageOptions.length}
                      </strong>{' '}
                    </a>
                  </li>
                  <li>
                    <a className='page-link'>
                      <input
                        className='form-control'
                        type='number'
                        defaultValue={pageIndex + 1}
                        onChange={(e) => {
                          const page = e.target.value ? Number(e.target.value) - 1 : 0
                          gotoPage(page)
                        }}
                        style={{width: '100px', height: '20px'}}
                      />
                    </a>
                  </li>{' '}
                  <select
                    className='form-control'
                    value={pageSize}
                    onChange={(e) => {
                      setPageSize(Number(e.target.value))
                    }}
                    style={{width: '120px', height: '38px'}}
                  >
                    {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                      <option key={pageSize} value={pageSize}>
                        Show {pageSize}
                      </option>
                    ))}
                  </select>
                </ul>
              )}
            </div>
          </div>
          {/* begin::Body */}
        </div>
      </div>
    </>
  )
}

export default ContractorDetail
