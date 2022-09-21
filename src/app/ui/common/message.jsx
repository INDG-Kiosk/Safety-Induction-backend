import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'

function ErrorMessage(props) {
  if (!props.error.text) {
    return <></>
  }
  return (
    <div className='row mb-12 '>
      <div className='col-lg-12'>
        <div className='overflow-auto pb-5'>
          {props.error.status === 'E' ? (
            <div className='notice d-flex bg-light-danger rounded border-danger border border-dashed min-w-lg-600px flex-shrink-0 p-6'>
              <KTSVG
                path='/media/icons/duotune/coding/cod004.svg'
                className='svg-icon-2tx svg-icon-danger me-4'
              />
              <div className='d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap'>
                <div className='mb-3 mb-md-0 fw-bold'>
                  <h4 className='text-gray-800 fw-bolder'>Error!</h4>
                  <div className='fs-6 text-gray-600 pe-7'>{props.error.text}</div>
                </div>
              </div>
            </div>
          ) : (
            <div className='notice d-flex bg-light-primary rounded border-primary border border-dashed min-w-lg-600px flex-shrink-0 p-6'>
              <KTSVG
                path='/media/icons/duotune/coding/cod004.svg'
                className='svg-icon-2tx svg-icon-primary me-4'
              />
              <div className='d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap'>
                <div className='mb-3 mb-md-0 fw-bold'>
                  <h4 className='text-gray-800 fw-bolder'>Record Updated Successfully!</h4>
                  <div className='fs-6 text-gray-600 pe-7'>{props.error.text}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ErrorMessage
