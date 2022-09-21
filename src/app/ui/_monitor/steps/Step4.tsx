import React, { FC } from 'react'
import { KTSVG, toAbsoluteUrl } from '../../../../_metronic/helpers'
import { Field, ErrorMessage } from 'formik'

const Step4: FC = () => {
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder d-flex align-items-center text-dark'>
          ආලෝක සංඥා වල තත්වය
          <i
            className='fas fa-exclamation-circle ms-2 fs-7'
            data-bs-toggle='tooltip'
            title='Billing is issued based on your selected account type'
          ></i>
        </h2>


      </div>

      <div className='py-4'>
        <div className='d-flex flex-stack  py-3'>
          <div className='d-flex'>
            <div className='d-flex flex-column'>
              <a href='#' className='fs-5 text-dark text-hover-primary fw-bolder'>
                1. ප්‍රධාන ලාම්පු

              </a>
            </div>
          </div>
          <div className='d-flex justify-content-end'>
            <div className='form-check form-check-solid form-switch'>
              <input
                className='form-radio-input w-45px h-20px'
                type='radio'
              />
            </div>
            <span className='fw-bold ps-2 fs-6'>හොදයි</span>
            <div className='form-check form-check-solid form-switch'>
              <input
                className='form-radio-input w-45px h-20px'
                type='radio'
              />
            </div>
            <span className='fw-bold ps-2 fs-6'>හොද නැත </span>
          </div>

        </div>
        <textarea
          className='form-control form-control-lg form-control-solid'
          placeholder='වෙනත් කරුණු '
        />
        <br />
        <button className='btn btn-light btn-active-light-primary' type="button" data-bs-toggle="tooltip" title="Coming soon">
          <i className="bi bi-paperclip fs-3"></i> Upload</button>

        <div className='separator separator-dashed my-5'></div>
      </div>

      <div className='py-2'>
        <div className='d-flex flex-stack  py-3'>
          <div className='d-flex'>
            <div className='d-flex flex-column'>
              <a href='#' className='fs-5 text-dark text-hover-primary fw-bolder'>
                2. පසුපසට ධාවනය කිරීමේ සංඥා

              </a>
            </div>
          </div>
          <div className='d-flex justify-content-end'>
            <div className='form-check form-check-solid form-switch'>
              <input
                className='form-radio-input w-45px h-20px'
                type='radio'
              />
            </div>
            <span className='fw-bold ps-2 fs-6'>හොදයි</span>
            <div className='form-check form-check-solid form-switch'>
              <input
                className='form-radio-input w-45px h-20px'
                type='radio'
              />
            </div>
            <span className='fw-bold ps-2 fs-6'>හොද නැත </span>
          </div>

        </div>
        <textarea
          className='form-control form-control-lg form-control-solid'
          placeholder='වෙනත් කරුණු '
        />
        <br />
        <button className='btn btn-light btn-active-light-primary' type="button" data-bs-toggle="tooltip" title="Coming soon">
          <i className="bi bi-paperclip fs-3"></i> Upload</button>

        <div className='separator separator-dashed my-5'></div>
      </div>

      <div className='py-2'>
        <div className='d-flex flex-stack  py-3'>
          <div className='d-flex'>
            <div className='d-flex flex-column'>
              <a href='#' className='fs-5 text-dark text-hover-primary fw-bolder'>
                3. පසුපස සහ ඉදිරිපස නලාව

              </a>
            </div>
          </div>
          <div className='d-flex justify-content-end'>
            <div className='form-check form-check-solid form-switch'>
              <input
                className='form-radio-input w-45px h-20px'
                type='radio'
              />
            </div>
            <span className='fw-bold ps-2 fs-6'>හොදයි</span>
            <div className='form-check form-check-solid form-switch'>
              <input
                className='form-radio-input w-45px h-20px'
                type='radio'
              />
            </div>
            <span className='fw-bold ps-2 fs-6'>හොද නැත </span>
          </div>

        </div>
        <textarea
          className='form-control form-control-lg form-control-solid'
          placeholder='වෙනත් කරුණු '
        />
        <br />
        <button className='btn btn-light btn-active-light-primary' type="button" data-bs-toggle="tooltip" title="Coming soon">
          <i className="bi bi-paperclip fs-3"></i> Upload</button>

        <div className='separator separator-dashed my-5'></div>
      </div>

      <div className='py-2'>
        <div className='d-flex flex-stack  py-3'>
          <div className='d-flex'>
            <div className='d-flex flex-column'>
              <a href='#' className='fs-5 text-dark text-hover-primary fw-bolder'>
                4. අභ්‍යන්තර ආලෝක උපාංග

              </a>
            </div>
          </div>
          <div className='d-flex justify-content-end'>
            <div className='form-check form-check-solid form-switch'>
              <input
                className='form-radio-input w-45px h-20px'
                type='radio'
              />
            </div>
            <span className='fw-bold ps-2 fs-6'>හොදයි</span>
            <div className='form-check form-check-solid form-switch'>
              <input
                className='form-radio-input w-45px h-20px'
                type='radio'
              />
            </div>
            <span className='fw-bold ps-2 fs-6'>හොද නැත </span>
          </div>

        </div>
        <textarea
          className='form-control form-control-lg form-control-solid'
          placeholder='වෙනත් කරුණු '
        />
        <br />
        <button className='btn btn-light btn-active-light-primary' type="button" data-bs-toggle="tooltip" title="Coming soon">
          <i className="bi bi-paperclip fs-3"></i> Upload</button>

        <div className='separator separator-dashed my-5'></div>
      </div>

      <div className='py-2'>
        <div className='d-flex flex-stack  py-3'>
          <div className='d-flex'>
            <div className='d-flex flex-column'>
              <a href='#' className='fs-5 text-dark text-hover-primary fw-bolder'>
                5. හැරවීමේ සංඥා
              </a>
            </div>
          </div>
          <div className='d-flex justify-content-end'>
            <div className='form-check form-check-solid form-switch'>
              <input
                className='form-radio-input w-45px h-20px'
                type='radio'
              />
            </div>
            <span className='fw-bold ps-2 fs-6'>හොදයි</span>
            <div className='form-check form-check-solid form-switch'>
              <input
                className='form-radio-input w-45px h-20px'
                type='radio'
              />
            </div>
            <span className='fw-bold ps-2 fs-6'>හොද නැත </span>
          </div>

        </div>
        <textarea
          className='form-control form-control-lg form-control-solid'
          placeholder='වෙනත් කරුණු '
        />
        <br />
        <button className='btn btn-light btn-active-light-primary' type="button" data-bs-toggle="tooltip" title="Coming soon">
          <i className="bi bi-paperclip fs-3"></i> Upload</button>

        <div className='separator separator-dashed my-5'></div>
      </div>

    </div>
  )
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder text-dark'>Billing Details</h2>

        <div className='text-gray-400 fw-bold fs-6'>
          If you need more info, please check out
          <a href='/dashboard' className='text-primary fw-bolder'>
            {' '}
            Help Page
          </a>
          .
        </div>
      </div>

      <div className='d-flex flex-column mb-7 fv-row'>
        <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
          <span className='required'>Name On Card</span>
          <i
            className='fas fa-exclamation-circle ms-2 fs-7'
            data-bs-toggle='tooltip'
            title="Specify a card holder's name"
          ></i>
        </label>

        <Field
          type='text'
          className='form-control form-control-solid'
          placeholder=''
          name='nameOnCard'
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='nameOnCard' />
        </div>
      </div>

      <div className='d-flex flex-column mb-7 fv-row'>
        <label className='required fs-6 fw-bold form-label mb-2'>Card Number</label>

        <div className='position-relative'>
          <Field
            type='text'
            className='form-control form-control-solid'
            placeholder='Enter card number'
            name='cardNumber'
          />
          <div className='text-danger mt-2'>
            <ErrorMessage name='cardNumber' />
          </div>

          <div className='position-absolute translate-middle-y top-50 end-0 me-5'>
            <img src={toAbsoluteUrl('/media/svg/card-logos/visa.svg')} alt='' className='h-25px' />
            <img
              src={toAbsoluteUrl('/media/svg/card-logos/mastercard.svg')}
              alt=''
              className='h-25px'
            />
            <img
              src={toAbsoluteUrl('/media/svg/card-logos/american-express.svg')}
              alt=''
              className='h-25px'
            />
          </div>
        </div>
      </div>

      <div className='row mb-10'>
        <div className='col-md-8 fv-row'>
          <label className='required fs-6 fw-bold form-label mb-2'>Expiration Date</label>

          <div className='row fv-row'>
            <div className='col-6'>
              <Field as='select' name='cardExpiryMonth' className='form-select form-select-solid'>
                <option></option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
                <option value='11'>11</option>
                <option value='12'>12</option>
              </Field>
              <div className='text-danger mt-2'>
                <ErrorMessage name='cardExpiryMonth' />
              </div>
            </div>

            <div className='col-6'>
              <Field as='select' name='cardExpiryYear' className='form-select form-select-solid'>
                <option></option>
                <option value='2021'>2021</option>
                <option value='2022'>2022</option>
                <option value='2023'>2023</option>
                <option value='2024'>2024</option>
                <option value='2025'>2025</option>
                <option value='2026'>2026</option>
                <option value='2027'>2027</option>
                <option value='2028'>2028</option>
                <option value='2029'>2029</option>
                <option value='2030'>2030</option>
                <option value='2031'>2031</option>
              </Field>
              <div className='text-danger mt-2'>
                <ErrorMessage name='cardExpiryYear' />
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-4 fv-row'>
          <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
            <span className='required'>CVV</span>
            <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title='Enter a card CVV code'
            ></i>
          </label>

          <div className='position-relative'>
            <Field
              type='text'
              className='form-control form-control-solid'
              minLength={3}
              maxLength={4}
              placeholder='CVV'
              name='cardCvv'
            />
            <div className='text-danger mt-2'>
              <ErrorMessage name='cardCvv' />
            </div>

            <div className='position-absolute translate-middle-y top-50 end-0 me-3'>
              <KTSVG path='/media/icons/duotune/finance/fin002.svg' className='svg-icon-2hx' />
            </div>
          </div>
        </div>
      </div>

      <div className='d-flex flex-stack'>
        <div className='me-5'>
          <label className='fs-6 fw-bold form-label'>Save Card for further billing?</label>
          <div className='fs-7 fw-bold text-gray-400'>
            If you need more info, please check budget planning
          </div>
        </div>

        <label className='form-check form-switch form-check-custom form-check-solid'>
          <Field className='form-check-input' type='checkbox' value='1' checked={true} />
          <span className='form-check-label fw-bold text-gray-400'>Save Card</span>
        </label>
      </div>
    </div>
  )
}

export { Step4 }
