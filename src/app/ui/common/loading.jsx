export default function Loading() {
  return (
    <div className='row gy-5 g-xl-12'>
      <div className='card mb-5 mb-xl-10'>
        <div className='notice d-flex col-lg-12 rounded border border-dashed min-w-lg-600px flex-shrink-0 p-6'>
          <div className='d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap'>
            <div className='mb-3 mb-md-0 fw-bold'>
              <div className='fs-6 text-gray-600 text-gray-800 fw-bolder pe-7'>
                <span
                  className='spinner-border spinner-border-lg align-middle ms-2'
                  style={{marginRight: '15px'}}
                ></span>
                Loading...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
