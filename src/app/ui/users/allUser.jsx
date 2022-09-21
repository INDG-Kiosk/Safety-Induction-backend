import React, {useState, useEffect, useRef} from 'react'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import {useTable, useFilters, useGlobalFilter, usePagination, useAsyncDebounce} from 'react-table'
import axios from 'axios'
import ErrorMessage from '../common/message'
import Loading from '../common/loading'
import {axioDefaultConfig} from '../common/commonResource'
import {useDataLayerValue} from '../../../DataLayer'

let data = []
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

function Content() {
  const columns = React.useMemo(
    () => [
      {
        Header: ' ',
        columns: [
          {
            Header: 'Code',
            accessor: 'code',
          },
          {
            Header: 'First Name',
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
          {
            Header: 'Email',
            accessor: 'email',
          },
          {
            Header: 'Is Lock',
            accessor: 'lockoutEnabled',
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
      initialState: {pageIndex: 0, pageSize: 25, globalFilter: ''},
    },
    useGlobalFilter,
    usePagination
  )
  const [{token}, dispatch] = useDataLayerValue()
  const [error, setError] = useState({status: 'E', text: ''})
  const [InitialLoading, setInitialLoading] = useState(true)

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

  /// Loading
  useEffect(() => {
    axios({
      ...axioDefaultConfig,
      method: 'get',
      url: process.env.REACT_APP_INSEE_KIOSK_BACKEND_API + '/api/accounts',
      headers: {...axioDefaultConfig.headers, Authorization: 'Bearer ' + token},
    })
      .then(function (response) {
        setInitialLoading(false)
        if (response?.data?.status === 'S') {
          console.log(response?.data?.result)
          data = response?.data?.result
          setGlobalFilter('')
        }
      })
      .catch(function (error) {
        handleErros(error)
      })
  }, [])

  if (InitialLoading) return <Loading />

  return (
    <div className={`card`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>All User(s)</span>
          <span className='text-muted mt-1 fw-bold fs-7'>{data.length} Registered User</span>
        </h3>
        <ErrorMessage error={error} />
        <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
          title='Click to add a user'
        >
          <div className='me-4'>
            <GlobalFilter
              preGlobalFilteredRows={preGlobalFilteredRows}
              globalFilter={''}
              setGlobalFilter={setGlobalFilter}
            />
          </div>
          <a href='new' className='btn btn-sm btn-light-primary'>
            <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
            New User
          </a>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        <div>
          <table
            className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'
            {...getTableProps()}
          >
            <thead>
              <td className='text-gray-600 text-gray-800 fw-bolder'>First Name</td>
              <td className='text-gray-600 text-gray-800 fw-bolder'>Last Name</td>
              <td className='text-gray-600 text-gray-800 fw-bolder'>Email</td>
              <td className='text-gray-600 text-gray-800 fw-bolder'>Block</td>
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
                    <td>{row.values.firstName}</td>
                    <td>{row.values.lastName}</td>
                    <td>{row.values.email}</td>

                    <td>
                      <input type='checkbox' readOnly checked={row.values.lockoutEnabled} />
                    </td>
                    <td>
                      <a href={'edit/' + row.values.code}>edit</a>
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
              <li className='page-item' onClick={() => previousPage()} disabled={!canPreviousPage}>
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
                    className='page-link'
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
                className='page-link'
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
  )
}

function UsersAllWrapper() {
  return (
    <>
      <PageTitle breadcrumbs={breadCrumbs}>All Users</PageTitle>
      <div className='row gy-5 g-xl-12'>
        <Content />
      </div>
    </>
  )
}

export default UsersAllWrapper
//https://codesandbox.io/s/react-table-with-pagination-and-searching-cxo0n?file=/src/table.js
//https://www.freakyjolly.com/react-table-tutorial/
