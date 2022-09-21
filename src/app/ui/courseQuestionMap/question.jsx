import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {
  useTable,
  useFilters,
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useAsyncDebounce,
} from 'react-table'

import React, {useEffect, useState} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import axios from 'axios'
import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
import ErrorMessage from '../common/message'
import Loading from '../common/loading'
import {axioDefaultConfig} from '../common/commonResource'
import {useDataLayerValue} from '../../../DataLayer'

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

const IndeterminateCheckbox = React.forwardRef(({indeterminate, ...rest}, ref) => {
  const defaultRef = React.useRef()
  const resolvedRef = ref || defaultRef

  React.useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate
  }, [resolvedRef, indeterminate])

  return (
    <>
      <input type='checkbox' ref={resolvedRef} {...rest} />
    </>
  )
})

function CourseQuestionMap(props) {
  const [InitialLoading, setInitialLoading] = useState(true)
  const [error, setError] = useState({status: 'E', text: ''})
  const [isSubmitting, setSubmitting] = useState(false)
  const [data, setData] = useState([])
  const [courseID, setCourseID] = useState(0)
  const [selectedRows, setSelectedRows] = useState([])
  const [assignedQuestions, setAssignedQuestion] = useState({})
  const [course, setCourse] = useState({})
  const [{token}, dispatch] = useDataLayerValue()

  const columns = React.useMemo(
    () => [
      {
        Header: ' ',
        columns: [
          {
            Header: 'Question',
            accessor: 'textEN',
            show: true,
          },
          {
            Header: 'Code',
            accessor: 'code',
            show: false,
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
    setHiddenColumns,
    selectedFlatRows,
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageIndex: 0,
        pageSize: 30,
        globalFilter: '',
        hiddenColumns: ['code'],
        selectedRowIds: assignedQuestions,
      },
    },
    useGlobalFilter,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        // Let's make a column for selection
        {
          id: 'selection',

          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({getToggleAllPageRowsSelectedProps}) => (
            <div style={{width: '1px'}}>
              <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({row}) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ])
    }
  )

  const validationRules = Yup.object().shape({
    title: Yup.string().min(2, 'Too Short!').max(500, 'Too Long!').required('Required'),
    passRate: Yup.number().required('Required'),
  })

  useEffect(() => {
    const selected = selectedFlatRows.map((row) => row.original)
    setSelectedRows(selected)
  }, [selectedFlatRows, setSelectedRows])

  useEffect(() => {
    const id = props.match?.params?.id ?? 0

    if (id === 0) {
      setError({status: 'E', text: 'Invalid Course ID'})
      setInitialLoading(true)
      return
    }

    const requestOne = axios({
      ...axioDefaultConfig,
      method: 'get',
      url: process.env.REACT_APP_INSEE_KIOSK_BACKEND_API + '/api/courses/' + id + '/questions',
      headers: {...axioDefaultConfig.headers, Authorization: 'Bearer ' + token},
    })

    const getallQuestons = axios({
      ...axioDefaultConfig,
      method: 'get',
      url: process.env.REACT_APP_INSEE_KIOSK_BACKEND_API + '/api/questions',
      headers: {...axioDefaultConfig.headers, Authorization: 'Bearer ' + token},
    })

    const getCourseInfo = axios({
      ...axioDefaultConfig,
      method: 'get',
      url: process.env.REACT_APP_INSEE_KIOSK_BACKEND_API + '/api/courses/' + id,
      headers: {...axioDefaultConfig.headers, Authorization: 'Bearer ' + token},
    })

    axios
      .all([requestOne, getallQuestons, getCourseInfo])
      .then(
        axios.spread((...responses) => {
          setInitialLoading(false)
          setCourseID(id)
          const assignedQuestionResponse = responses[0]
          const getallQuestonsResponse = responses[1]
          const getCourseInfoResponse = responses[2]
          if (
            assignedQuestionResponse?.data?.status === 'S' &&
            getallQuestonsResponse?.data?.status === 'S' &&
            getCourseInfoResponse?.data?.status === 'S'
          ) {
            let res = []
            var selected = {}

            let allQuestions = getallQuestonsResponse?.data?.result
            let index = 0
            assignedQuestionResponse?.data?.result.map((d) => {
              res.push({code: d.code, textEN: d.textEN, isSelect: true})
              allQuestions = allQuestions.filter((ques) => {
                return ques.code !== d.code
              })
              selected[index] = true
              index++
            })

            allQuestions.map((d) => {
              res.push({code: d.code, textEN: d.textEN, isSelect: true})
            })

            setAssignedQuestion(selected)
            setData(res)
            setCourse(getCourseInfoResponse?.data?.result)
            // use/access the results
          }
        })
      )
      .catch(function (error) {
        console.log(JSON.stringify(error))
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

  const onSubmit = () => {
    setSubmitting(true)
    setTimeout(() => {
      let config = axioDefaultConfig

      var ques = selectedFlatRows.map(function (item) {
        return parseInt(item.original.code)
      })

      config = {
        ...axioDefaultConfig,
        method: 'post',
        url:
          process.env.REACT_APP_INSEE_KIOSK_BACKEND_API + '/api/courses/' + courseID + '/questions',
        data: ques,
        headers: {...axioDefaultConfig.headers, Authorization: 'Bearer ' + token},
      }

      axios(config)
        .then(function (response) {
          setSubmitting(false)
          setError(response?.data)
          if (response?.data?.status === 'S') {
          }
        })
        .catch(function (error) {
          handleErros(error)
        })
    }, 200)
  }

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
    {
      title: 'All Courses',
      path: '/course/all',
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
      title: course.title,
      path: '/course/edit/' + course.code,
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

  return (
    <>
      <PageTitle breadcrumbs={breadCrumb}>{course.title + "'s Questions"}</PageTitle>
      <div className={`card`}>
        {/* begin::Header */}
        <div className='card-header border-0 pt-5'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bolder fs-3 mb-1'>All Questions</span>
            <span className='text-muted mt-1 fw-bold fs-7'>
              {data.length} Assigned Questions for the {course.title} Course
            </span>
          </h3>

          <div
            className='card-toolbar'
            data-bs-toggle='tooltip'
            data-bs-placement='top'
            data-bs-trigger='hover'
            title='Click to add a user'
          >
            <div className='me-4'></div>
          </div>
        </div>

        {/* end::Header */}
        {/* begin::Body */}
        <div className='card-body py-3'>
          <ErrorMessage error={error} />
          <GlobalFilter
            preGlobalFilteredRows={preGlobalFilteredRows}
            globalFilter={''}
            setGlobalFilter={setGlobalFilter}
          />
          <table
            className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'
            {...getTableProps()}
          >
            <thead>
              {headerGroups.map(
                (headerGroup) =>
                  headerGroup.headers[1].Header !== ' ' && (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                      ))}
                    </tr>
                  )
              )}
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
                    {row.cells.map((cell) => {
                      if (cell.column.id === 'selection') {
                        return (
                          <td {...cell.getCellProps()} style={{width: '10px'}}>
                            {cell.render('Cell')}
                          </td>
                        )
                      } else {
                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      }
                    })}
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
        {/* begin::Body */}
      </div>
      <div className='card-footer d-flex justify-content-end py-6 px-9'>
        <button
          type='submit'
          onClick={(e) => {
            onSubmit()
          }}
          className='btn btn-primary'
          disabled={isSubmitting}
        >
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
    </>
  )
}

export default CourseQuestionMap
