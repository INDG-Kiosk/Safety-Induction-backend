import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'

const FinalIndexBreadCrumbs = [
  {
    title: 'Final Index',
    path: '/Reports/finalIndex',
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
          <span className='card-label fw-bolder fs-3 mb-1'>Final Index </span>
          <span className='text-muted mt-1 fw-bold fs-7'>Report</span>
        </h3>
      </div>
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n<!--\n /* Font Definitions */\n @font-face\n\t{font-family:"Cambria Math";\n\tpanose-1:2 4 5 3 5 4 6 3 2 4;}\n@font-face\n\t{font-family:Calibri;\n\tpanose-1:2 15 5 2 2 2 4 3 2 4;}\n /* Style Definitions */\n p.MsoNormal, li.MsoNormal, div.MsoNormal\n\t{margin-top:0in;\n\tmargin-right:0in;\n\tmargin-bottom:8.0pt;\n\tmargin-left:0in;\n\tline-height:107%;\n\tfont-size:11.0pt;\n\tfont-family:"Calibri",sans-serif;}\n.MsoChpDefault\n\t{font-family:"Calibri",sans-serif;}\n.MsoPapDefault\n\t{margin-bottom:8.0pt;\n\tline-height:107%;}\n@page WordSection1\n\t{size:8.5in 11.0in;\n\tmargin:1.0in 1.0in 1.0in 1.0in;}\ndiv.WordSection1\n\t{page:WordSection1;}\n-->\n',
            }}
          />
          <div className='WordSection1'>
            <table
              className='MsoNormalTable'
              border={0}
              cellSpacing={0}
              cellPadding={0}
              width={828}
              style={{width: '621.0pt', borderCollapse: 'collapse'}}
            >
              <tbody>
                <tr style={{height: '13.8pt'}}>
                  <td
                    width={201}
                    nowrap
                    valign='bottom'
                    style={{width: '151.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                  <td
                    width={340}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '255.0pt',
                      border: 'solid windowtext 1.0pt',
                      background: 'lime',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <b>
                        <span style={{fontSize: '10.0pt', color: 'black'}}>
                          No. Of vehicle audited
                        </span>
                      </b>
                    </p>
                  </td>
                  <td
                    width={63}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '47.0pt',
                      border: 'solid windowtext 1.0pt',
                      borderLeft: 'none',
                      background: 'yellow',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <b>
                        <span style={{fontSize: '10.0pt', color: 'black'}}>&nbsp;</span>
                      </b>
                    </p>
                  </td>
                  <td
                    width={73}
                    nowrap
                    valign='bottom'
                    style={{width: '55.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                  <td
                    width={73}
                    nowrap
                    valign='bottom'
                    style={{width: '55.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                  <td
                    width={77}
                    nowrap
                    valign='bottom'
                    style={{width: '58.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                </tr>
                <tr style={{height: '27.6pt'}}>
                  <td
                    width={201}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '151.0pt',
                      border: 'solid windowtext 1.0pt',
                      background: '#FF9900',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '27.6pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <b>
                        <span style={{fontSize: '10.0pt', color: 'black'}}>Task</span>
                      </b>
                    </p>
                  </td>
                  <td
                    width={340}
                    nowrap
                    style={{
                      width: '255.0pt',
                      borderTop: 'none',
                      borderLeft: 'none',
                      borderBottom: 'solid windowtext 1.0pt',
                      borderRight: 'solid windowtext 1.0pt',
                      background: '#FF9900',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '27.6pt',
                    }}
                  >
                    <p
                      className='MsoNormal'
                      align='center'
                      style={{marginBottom: '0in', textAlign: 'center', lineHeight: 'normal'}}
                    >
                      <b>
                        <span style={{fontSize: '10.0pt', color: 'black'}}>Sub checks</span>
                      </b>
                    </p>
                  </td>
                  <td
                    width={63}
                    style={{
                      width: '47.0pt',
                      borderTop: 'none',
                      borderLeft: 'none',
                      borderBottom: 'solid windowtext 1.0pt',
                      borderRight: 'solid windowtext 1.0pt',
                      background: '#FF9900',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '27.6pt',
                    }}
                  >
                    <p
                      className='MsoNormal'
                      align='center'
                      style={{marginBottom: '0in', textAlign: 'center', lineHeight: 'normal'}}
                    >
                      <b>
                        <span style={{fontSize: '10.0pt', color: 'black'}}>Marks</span>
                      </b>
                    </p>
                  </td>
                  <td
                    width={73}
                    style={{
                      width: '55.0pt',
                      border: 'solid windowtext 1.0pt',
                      borderLeft: 'none',
                      background: '#FF9900',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '27.6pt',
                    }}
                  >
                    <p
                      className='MsoNormal'
                      align='center'
                      style={{marginBottom: '0in', textAlign: 'center', lineHeight: 'normal'}}
                    >
                      <b>
                        <span style={{fontSize: '10.0pt', color: 'black'}}>Average defects</span>
                      </b>
                    </p>
                  </td>
                  <td
                    width={73}
                    style={{
                      width: '55.0pt',
                      border: 'solid windowtext 1.0pt',
                      borderLeft: 'none',
                      background: '#FF9900',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '27.6pt',
                    }}
                  >
                    <p
                      className='MsoNormal'
                      align='center'
                      style={{marginBottom: '0in', textAlign: 'center', lineHeight: 'normal'}}
                    >
                      <b>
                        <span style={{fontSize: '10.0pt', color: 'black'}}>Audit segment</span>
                      </b>
                    </p>
                  </td>
                  <td
                    width={77}
                    style={{
                      width: '58.0pt',
                      border: 'solid windowtext 1.0pt',
                      borderLeft: 'none',
                      background: '#FF9900',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '27.6pt',
                    }}
                  >
                    <p
                      className='MsoNormal'
                      align='center'
                      style={{marginBottom: '0in', textAlign: 'center', lineHeight: 'normal'}}
                    >
                      <b>
                        <span style={{fontSize: '10.0pt', color: 'black'}}>index</span>
                      </b>
                    </p>
                  </td>
                </tr>
                <tr style={{height: '13.8pt'}}>
                  <td
                    width={201}
                    nowrap
                    rowSpan={7}
                    style={{
                      width: '151.0pt',
                      border: 'solid windowtext 1.0pt',
                      borderTop: 'none',
                      background: '#E7E6E6',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <b>
                        <span style={{fontSize: '10.0pt', color: 'black'}}>
                          Mechanical condition
                        </span>
                      </b>
                    </p>
                  </td>
                  <td
                    width={340}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '255.0pt',
                      background: '#339966',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>&nbsp;</span>
                    </p>
                  </td>
                  <td
                    width={63}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '47.0pt',
                      background: '#339966',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p
                      className='MsoNormal'
                      align='right'
                      style={{marginBottom: '0in', textAlign: 'right', lineHeight: 'normal'}}
                    >
                      <b>
                        <span style={{fontSize: '10.0pt', color: 'black'}}>40</span>
                      </b>
                    </p>
                  </td>
                  <td
                    width={73}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '55.0pt',
                      background: '#339966',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p
                      className='MsoNormal'
                      align='right'
                      style={{marginBottom: '0in', textAlign: 'right', lineHeight: 'normal'}}
                    >
                      <b>
                        <span style={{fontSize: '10.0pt', color: 'black'}}>0</span>
                      </b>
                    </p>
                  </td>
                  <td
                    width={73}
                    rowSpan={7}
                    style={{
                      width: '55.0pt',
                      border: 'solid windowtext 1.0pt',
                      borderTop: 'none',
                      background: '#339966',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p
                      className='MsoNormal'
                      align='center'
                      style={{marginBottom: '0in', textAlign: 'center', lineHeight: 'normal'}}
                    >
                      <b>
                        <span style={{fontSize: '10.0pt', color: 'black'}}>6</span>
                      </b>
                    </p>
                  </td>
                  <td
                    width={77}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '58.0pt',
                      background: '#339966',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p
                      className='MsoNormal'
                      align='center'
                      style={{marginBottom: '0in', textAlign: 'center', lineHeight: 'normal'}}
                    >
                      <b>
                        <span style={{fontSize: '10.0pt', color: 'black'}}>#DIV/0!</span>
                      </b>
                    </p>
                  </td>
                </tr>
                <tr style={{height: '13.8pt'}}>
                  <td
                    width={340}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '255.0pt',
                      border: 'solid windowtext 1.0pt',
                      borderLeft: 'none',
                      background: '#D9E1F2',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>Brakes condition</span>
                    </p>
                  </td>
                  <td
                    width={63}
                    nowrap
                    valign='bottom'
                    style={{width: '47.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                  <td
                    width={73}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '55.0pt',
                      border: 'solid windowtext 1.0pt',
                      borderRight: 'none',
                      background: 'yellow',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>&nbsp;</span>
                    </p>
                  </td>
                  <td
                    width={77}
                    nowrap
                    valign='bottom'
                    style={{width: '58.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                </tr>
                <tr style={{height: '13.8pt'}}>
                  <td
                    width={340}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '255.0pt',
                      borderTop: 'none',
                      borderLeft: 'none',
                      borderBottom: 'solid windowtext 1.0pt',
                      borderRight: 'solid windowtext 1.0pt',
                      background: '#D9E1F2',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>Brake sytem defects</span>
                    </p>
                  </td>
                  <td
                    width={63}
                    nowrap
                    valign='bottom'
                    style={{width: '47.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                  <td
                    width={73}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '55.0pt',
                      borderTop: 'none',
                      borderLeft: 'solid windowtext 1.0pt',
                      borderBottom: 'solid windowtext 1.0pt',
                      borderRight: 'none',
                      background: 'yellow',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>&nbsp;</span>
                    </p>
                  </td>
                  <td
                    width={77}
                    nowrap
                    valign='bottom'
                    style={{width: '58.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                </tr>
                <tr style={{height: '13.8pt'}}>
                  <td
                    width={340}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '255.0pt',
                      borderTop: 'none',
                      borderLeft: 'none',
                      borderBottom: 'solid windowtext 1.0pt',
                      borderRight: 'solid windowtext 1.0pt',
                      background: '#D9E1F2',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>Engine condition</span>
                    </p>
                  </td>
                  <td
                    width={63}
                    nowrap
                    valign='bottom'
                    style={{width: '47.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                  <td
                    width={73}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '55.0pt',
                      borderTop: 'none',
                      borderLeft: 'solid windowtext 1.0pt',
                      borderBottom: 'solid windowtext 1.0pt',
                      borderRight: 'none',
                      background: 'yellow',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>&nbsp;</span>
                    </p>
                  </td>
                  <td
                    width={77}
                    nowrap
                    valign='bottom'
                    style={{width: '58.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                </tr>
                <tr style={{height: '13.8pt'}}>
                  <td
                    width={340}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '255.0pt',
                      borderTop: 'none',
                      borderLeft: 'none',
                      borderBottom: 'solid windowtext 1.0pt',
                      borderRight: 'solid windowtext 1.0pt',
                      background: '#D9E1F2',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>
                        Engine condition other(Belt condition,radiator)
                      </span>
                    </p>
                  </td>
                  <td
                    width={63}
                    nowrap
                    valign='bottom'
                    style={{width: '47.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                  <td
                    width={73}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '55.0pt',
                      borderTop: 'none',
                      borderLeft: 'solid windowtext 1.0pt',
                      borderBottom: 'solid windowtext 1.0pt',
                      borderRight: 'none',
                      background: 'yellow',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>&nbsp;</span>
                    </p>
                  </td>
                  <td
                    width={77}
                    nowrap
                    valign='bottom'
                    style={{width: '58.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                </tr>
                <tr style={{height: '13.8pt'}}>
                  <td
                    width={340}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '255.0pt',
                      borderTop: 'none',
                      borderLeft: 'none',
                      borderBottom: 'solid windowtext 1.0pt',
                      borderRight: 'solid windowtext 1.0pt',
                      background: '#D9E1F2',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>Suspension system</span>
                    </p>
                  </td>
                  <td
                    width={63}
                    nowrap
                    valign='bottom'
                    style={{width: '47.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                  <td
                    width={73}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '55.0pt',
                      borderTop: 'none',
                      borderLeft: 'solid windowtext 1.0pt',
                      borderBottom: 'solid windowtext 1.0pt',
                      borderRight: 'none',
                      background: 'yellow',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>&nbsp;</span>
                    </p>
                  </td>
                  <td
                    width={77}
                    nowrap
                    valign='bottom'
                    style={{width: '58.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                </tr>
                <tr style={{height: '13.8pt'}}>
                  <td
                    width={340}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '255.0pt',
                      borderTop: 'none',
                      borderLeft: 'none',
                      borderBottom: 'solid windowtext 1.0pt',
                      borderRight: 'solid windowtext 1.0pt',
                      background: '#D9E1F2',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>streering system</span>
                    </p>
                  </td>
                  <td
                    width={63}
                    nowrap
                    valign='bottom'
                    style={{width: '47.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                  <td
                    width={73}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '55.0pt',
                      borderTop: 'none',
                      borderLeft: 'solid windowtext 1.0pt',
                      borderBottom: 'solid windowtext 1.0pt',
                      borderRight: 'none',
                      background: 'yellow',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>&nbsp;</span>
                    </p>
                  </td>
                  <td
                    width={77}
                    nowrap
                    valign='bottom'
                    style={{width: '58.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                </tr>
                <tr style={{height: '13.8pt'}}>
                  <td
                    width={201}
                    nowrap
                    rowSpan={4}
                    style={{
                      width: '151.0pt',
                      border: 'solid windowtext 1.0pt',
                      borderTop: 'none',
                      background: '#E7E6E6',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <b>
                        <span style={{fontSize: '10.0pt', color: 'black'}}>Tyre condition</span>
                      </b>
                    </p>
                  </td>
                  <td
                    width={340}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '255.0pt',
                      background: '#339966',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>&nbsp;</span>
                    </p>
                  </td>
                  <td
                    width={63}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '47.0pt',
                      background: '#339966',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p
                      className='MsoNormal'
                      align='right'
                      style={{marginBottom: '0in', textAlign: 'right', lineHeight: 'normal'}}
                    >
                      <b>
                        <span style={{fontSize: '10.0pt', color: 'black'}}>25</span>
                      </b>
                    </p>
                  </td>
                  <td
                    width={73}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '55.0pt',
                      background: '#339966',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p
                      className='MsoNormal'
                      align='right'
                      style={{marginBottom: '0in', textAlign: 'right', lineHeight: 'normal'}}
                    >
                      <b>
                        <span style={{fontSize: '10.0pt', color: 'black'}}>0</span>
                      </b>
                    </p>
                  </td>
                  <td
                    width={73}
                    rowSpan={4}
                    style={{
                      width: '55.0pt',
                      border: 'solid windowtext 1.0pt',
                      borderTop: 'none',
                      background: '#339966',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p
                      className='MsoNormal'
                      align='center'
                      style={{marginBottom: '0in', textAlign: 'center', lineHeight: 'normal'}}
                    >
                      <b>
                        <span style={{fontSize: '10.0pt', color: 'black'}}>3</span>
                      </b>
                    </p>
                  </td>
                  <td
                    width={77}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '58.0pt',
                      background: '#339966',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p
                      className='MsoNormal'
                      align='center'
                      style={{marginBottom: '0in', textAlign: 'center', lineHeight: 'normal'}}
                    >
                      <b>
                        <span style={{fontSize: '10.0pt', color: 'black'}}>#DIV/0!</span>
                      </b>
                    </p>
                  </td>
                </tr>
                <tr style={{height: '13.8pt'}}>
                  <td
                    width={340}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '255.0pt',
                      border: 'solid windowtext 1.0pt',
                      borderLeft: 'none',
                      background: '#D9E1F2',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>Front</span>
                    </p>
                  </td>
                  <td
                    width={63}
                    nowrap
                    valign='bottom'
                    style={{width: '47.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                  <td
                    width={73}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '55.0pt',
                      border: 'solid windowtext 1.0pt',
                      borderRight: 'none',
                      background: 'yellow',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>&nbsp;</span>
                    </p>
                  </td>
                  <td
                    width={77}
                    nowrap
                    valign='bottom'
                    style={{width: '58.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                </tr>
                <tr style={{height: '13.8pt'}}>
                  <td
                    width={340}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '255.0pt',
                      borderTop: 'none',
                      borderLeft: 'none',
                      borderBottom: 'solid windowtext 1.0pt',
                      borderRight: 'solid windowtext 1.0pt',
                      background: '#D9E1F2',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>Rear</span>
                    </p>
                  </td>
                  <td
                    width={63}
                    nowrap
                    valign='bottom'
                    style={{width: '47.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                  <td
                    width={73}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '55.0pt',
                      borderTop: 'none',
                      borderLeft: 'solid windowtext 1.0pt',
                      borderBottom: 'solid windowtext 1.0pt',
                      borderRight: 'none',
                      background: 'yellow',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>&nbsp;</span>
                    </p>
                  </td>
                  <td
                    width={77}
                    nowrap
                    valign='bottom'
                    style={{width: '58.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                </tr>
                <tr style={{height: '13.8pt'}}>
                  <td
                    width={340}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '255.0pt',
                      borderTop: 'none',
                      borderLeft: 'none',
                      borderBottom: 'solid windowtext 1.0pt',
                      borderRight: 'solid windowtext 1.0pt',
                      background: '#D9E1F2',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>spare wheel</span>
                    </p>
                  </td>
                  <td
                    width={63}
                    nowrap
                    valign='bottom'
                    style={{width: '47.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                  <td
                    width={73}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '55.0pt',
                      borderTop: 'none',
                      borderLeft: 'solid windowtext 1.0pt',
                      borderBottom: 'solid windowtext 1.0pt',
                      borderRight: 'none',
                      background: 'yellow',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>&nbsp;</span>
                    </p>
                  </td>
                  <td
                    width={77}
                    nowrap
                    valign='bottom'
                    style={{width: '58.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                </tr>
                <tr style={{height: '13.8pt'}}>
                  <td
                    width={201}
                    nowrap
                    rowSpan={6}
                    style={{
                      width: '151.0pt',
                      border: 'solid windowtext 1.0pt',
                      borderTop: 'none',
                      background: '#E7E6E6',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <b>
                        <span style={{fontSize: '10.0pt', color: 'black'}}>
                          Lights &amp; related fixtures
                        </span>
                      </b>
                    </p>
                  </td>
                  <td
                    width={340}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '255.0pt',
                      background: '#339966',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>&nbsp;</span>
                    </p>
                  </td>
                  <td
                    width={63}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '47.0pt',
                      background: '#339966',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p
                      className='MsoNormal'
                      align='right'
                      style={{marginBottom: '0in', textAlign: 'right', lineHeight: 'normal'}}
                    >
                      <b>
                        <span style={{fontSize: '10.0pt', color: 'black'}}>15</span>
                      </b>
                    </p>
                  </td>
                  <td
                    width={73}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '55.0pt',
                      background: '#339966',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p
                      className='MsoNormal'
                      align='right'
                      style={{marginBottom: '0in', textAlign: 'right', lineHeight: 'normal'}}
                    >
                      <b>
                        <span style={{fontSize: '10.0pt', color: 'black'}}>0</span>
                      </b>
                    </p>
                  </td>
                  <td
                    width={73}
                    rowSpan={6}
                    style={{
                      width: '55.0pt',
                      border: 'solid windowtext 1.0pt',
                      borderTop: 'none',
                      background: '#339966',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p
                      className='MsoNormal'
                      align='center'
                      style={{marginBottom: '0in', textAlign: 'center', lineHeight: 'normal'}}
                    >
                      <b>
                        <span style={{fontSize: '10.0pt', color: 'black'}}>5</span>
                      </b>
                    </p>
                  </td>
                  <td
                    width={77}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '58.0pt',
                      background: '#339966',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p
                      className='MsoNormal'
                      align='center'
                      style={{marginBottom: '0in', textAlign: 'center', lineHeight: 'normal'}}
                    >
                      <b>
                        <span style={{fontSize: '10.0pt', color: 'black'}}>#DIV/0!</span>
                      </b>
                    </p>
                  </td>
                </tr>
                <tr style={{height: '13.8pt'}}>
                  <td
                    width={340}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '255.0pt',
                      border: 'solid windowtext 1.0pt',
                      borderLeft: 'none',
                      background: '#D9E1F2',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>Brake &amp; parking </span>
                    </p>
                  </td>
                  <td
                    width={63}
                    nowrap
                    valign='bottom'
                    style={{width: '47.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                  <td
                    width={73}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '55.0pt',
                      border: 'solid windowtext 1.0pt',
                      borderRight: 'none',
                      background: 'yellow',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>&nbsp;</span>
                    </p>
                  </td>
                  <td
                    width={77}
                    nowrap
                    valign='bottom'
                    style={{width: '58.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                </tr>
                <tr style={{height: '13.8pt'}}>
                  <td
                    width={340}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '255.0pt',
                      borderTop: 'none',
                      borderLeft: 'none',
                      borderBottom: 'solid windowtext 1.0pt',
                      borderRight: 'solid windowtext 1.0pt',
                      background: '#D9E1F2',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>Head</span>
                    </p>
                  </td>
                  <td
                    width={63}
                    nowrap
                    valign='bottom'
                    style={{width: '47.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                  <td
                    width={73}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '55.0pt',
                      borderTop: 'none',
                      borderLeft: 'solid windowtext 1.0pt',
                      borderBottom: 'solid windowtext 1.0pt',
                      borderRight: 'none',
                      background: 'yellow',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>&nbsp;</span>
                    </p>
                  </td>
                  <td
                    width={77}
                    nowrap
                    valign='bottom'
                    style={{width: '58.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                </tr>
                <tr style={{height: '13.8pt'}}>
                  <td
                    width={340}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '255.0pt',
                      borderTop: 'none',
                      borderLeft: 'none',
                      borderBottom: 'solid windowtext 1.0pt',
                      borderRight: 'solid windowtext 1.0pt',
                      background: '#D9E1F2',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>Reverse</span>
                    </p>
                  </td>
                  <td
                    width={63}
                    nowrap
                    valign='bottom'
                    style={{width: '47.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                  <td
                    width={73}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '55.0pt',
                      borderTop: 'none',
                      borderLeft: 'solid windowtext 1.0pt',
                      borderBottom: 'solid windowtext 1.0pt',
                      borderRight: 'none',
                      background: 'yellow',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>&nbsp;</span>
                    </p>
                  </td>
                  <td
                    width={77}
                    nowrap
                    valign='bottom'
                    style={{width: '58.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                </tr>
                <tr style={{height: '13.8pt'}}>
                  <td
                    width={340}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '255.0pt',
                      borderTop: 'none',
                      borderLeft: 'none',
                      borderBottom: 'solid windowtext 1.0pt',
                      borderRight: 'solid windowtext 1.0pt',
                      background: '#D9E1F2',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>Revirse horn</span>
                    </p>
                  </td>
                  <td
                    width={63}
                    nowrap
                    valign='bottom'
                    style={{width: '47.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                  <td
                    width={73}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '55.0pt',
                      borderTop: 'none',
                      borderLeft: 'solid windowtext 1.0pt',
                      borderBottom: 'solid windowtext 1.0pt',
                      borderRight: 'none',
                      background: 'yellow',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>&nbsp;</span>
                    </p>
                  </td>
                  <td
                    width={77}
                    nowrap
                    valign='bottom'
                    style={{width: '58.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                </tr>
                <tr style={{height: '13.8pt'}}>
                  <td
                    width={340}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '255.0pt',
                      borderTop: 'none',
                      borderLeft: 'none',
                      borderBottom: 'solid windowtext 1.0pt',
                      borderRight: 'solid windowtext 1.0pt',
                      background: '#D9E1F2',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>Signal</span>
                    </p>
                  </td>
                  <td
                    width={63}
                    nowrap
                    valign='bottom'
                    style={{width: '47.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                  <td
                    width={73}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '55.0pt',
                      borderTop: 'none',
                      borderLeft: 'solid windowtext 1.0pt',
                      borderBottom: 'solid windowtext 1.0pt',
                      borderRight: 'none',
                      background: 'yellow',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>&nbsp;</span>
                    </p>
                  </td>
                  <td
                    width={77}
                    nowrap
                    valign='bottom'
                    style={{width: '58.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                </tr>
                <tr style={{height: '13.8pt'}}>
                  <td
                    width={201}
                    nowrap
                    rowSpan={7}
                    style={{
                      width: '151.0pt',
                      borderTop: 'none',
                      borderLeft: 'solid windowtext 1.0pt',
                      borderBottom: 'none',
                      borderRight: 'solid windowtext 1.0pt',
                      background: '#E7E6E6',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <b>
                        <span style={{fontSize: '10.0pt', color: 'black'}}>Safety </span>
                      </b>
                    </p>
                  </td>
                  <td
                    width={340}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '255.0pt',
                      background: '#339966',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>&nbsp;</span>
                    </p>
                  </td>
                  <td
                    width={63}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '47.0pt',
                      background: '#339966',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p
                      className='MsoNormal'
                      align='right'
                      style={{marginBottom: '0in', textAlign: 'right', lineHeight: 'normal'}}
                    >
                      <b>
                        <span style={{fontSize: '10.0pt', color: 'black'}}>10</span>
                      </b>
                    </p>
                  </td>
                  <td
                    width={73}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '55.0pt',
                      background: '#339966',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p
                      className='MsoNormal'
                      align='right'
                      style={{marginBottom: '0in', textAlign: 'right', lineHeight: 'normal'}}
                    >
                      <b>
                        <span style={{fontSize: '10.0pt', color: 'black'}}>0</span>
                      </b>
                    </p>
                  </td>
                  <td
                    width={73}
                    rowSpan={7}
                    style={{
                      width: '55.0pt',
                      borderTop: 'none',
                      borderLeft: 'solid windowtext 1.0pt',
                      borderBottom: 'none',
                      borderRight: 'solid windowtext 1.0pt',
                      background: '#339966',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p
                      className='MsoNormal'
                      align='center'
                      style={{marginBottom: '0in', textAlign: 'center', lineHeight: 'normal'}}
                    >
                      <b>
                        <span style={{fontSize: '10.0pt', color: 'black'}}>6</span>
                      </b>
                    </p>
                  </td>
                  <td
                    width={77}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '58.0pt',
                      background: '#339966',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p
                      className='MsoNormal'
                      align='center'
                      style={{marginBottom: '0in', textAlign: 'center', lineHeight: 'normal'}}
                    >
                      <b>
                        <span style={{fontSize: '10.0pt', color: 'black'}}>#DIV/0!</span>
                      </b>
                    </p>
                  </td>
                </tr>
                <tr style={{height: '13.8pt'}}>
                  <td
                    width={340}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '255.0pt',
                      border: 'solid windowtext 1.0pt',
                      borderLeft: 'none',
                      background: '#D9E1F2',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>
                        First aid &amp; other
                      </span>
                    </p>
                  </td>
                  <td
                    width={63}
                    nowrap
                    valign='bottom'
                    style={{width: '47.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                  <td
                    width={73}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '55.0pt',
                      border: 'solid windowtext 1.0pt',
                      background: 'yellow',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>&nbsp;</span>
                    </p>
                  </td>
                  <td
                    width={77}
                    nowrap
                    valign='bottom'
                    style={{width: '58.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                </tr>
                <tr style={{height: '13.8pt'}}>
                  <td
                    width={340}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '255.0pt',
                      borderTop: 'none',
                      borderLeft: 'none',
                      borderBottom: 'solid windowtext 1.0pt',
                      borderRight: 'solid windowtext 1.0pt',
                      background: '#D9E1F2',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>Tool kit</span>
                    </p>
                  </td>
                  <td
                    width={63}
                    nowrap
                    valign='bottom'
                    style={{width: '47.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                  <td
                    width={73}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '55.0pt',
                      border: 'solid windowtext 1.0pt',
                      borderTop: 'none',
                      background: 'yellow',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>&nbsp;</span>
                    </p>
                  </td>
                  <td
                    width={77}
                    nowrap
                    valign='bottom'
                    style={{width: '58.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                </tr>
                <tr style={{height: '13.8pt'}}>
                  <td
                    width={340}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '255.0pt',
                      borderTop: 'none',
                      borderLeft: 'none',
                      borderBottom: 'solid windowtext 1.0pt',
                      borderRight: 'solid windowtext 1.0pt',
                      background: '#D9E1F2',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>
                        Vehicle fitness certificate
                      </span>
                    </p>
                  </td>
                  <td
                    width={63}
                    nowrap
                    valign='bottom'
                    style={{width: '47.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                  <td
                    width={73}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '55.0pt',
                      border: 'solid windowtext 1.0pt',
                      borderTop: 'none',
                      background: 'yellow',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>&nbsp;</span>
                    </p>
                  </td>
                  <td
                    width={77}
                    nowrap
                    valign='bottom'
                    style={{width: '58.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                </tr>
                <tr style={{height: '13.8pt'}}>
                  <td
                    width={340}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '255.0pt',
                      borderTop: 'none',
                      borderLeft: 'none',
                      borderBottom: 'solid windowtext 1.0pt',
                      borderRight: 'solid windowtext 1.0pt',
                      background: '#D9E1F2',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>
                        License &amp; insurance
                      </span>
                    </p>
                  </td>
                  <td
                    width={63}
                    nowrap
                    valign='bottom'
                    style={{width: '47.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                  <td
                    width={73}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '55.0pt',
                      border: 'solid windowtext 1.0pt',
                      borderTop: 'none',
                      background: 'yellow',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>&nbsp;</span>
                    </p>
                  </td>
                  <td
                    width={77}
                    nowrap
                    valign='bottom'
                    style={{width: '58.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                </tr>
                <tr style={{height: '13.8pt'}}>
                  <td
                    width={340}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '255.0pt',
                      borderTop: 'none',
                      borderLeft: 'none',
                      borderBottom: 'solid windowtext 1.0pt',
                      borderRight: 'solid windowtext 1.0pt',
                      background: '#D9E1F2',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>
                        DD training to drivers
                      </span>
                    </p>
                  </td>
                  <td
                    width={63}
                    nowrap
                    valign='bottom'
                    style={{width: '47.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                  <td
                    width={73}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '55.0pt',
                      border: 'solid windowtext 1.0pt',
                      borderTop: 'none',
                      background: 'yellow',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>&nbsp;</span>
                    </p>
                  </td>
                  <td
                    width={77}
                    nowrap
                    valign='bottom'
                    style={{width: '58.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                </tr>
                <tr style={{height: '13.8pt'}}>
                  <td
                    width={340}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '255.0pt',
                      borderTop: 'none',
                      borderLeft: 'none',
                      borderBottom: 'solid windowtext 1.0pt',
                      borderRight: 'solid windowtext 1.0pt',
                      background: '#D9E1F2',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>Safety belt</span>
                    </p>
                  </td>
                  <td
                    width={63}
                    nowrap
                    valign='bottom'
                    style={{width: '47.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                  <td
                    width={73}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '55.0pt',
                      border: 'solid windowtext 1.0pt',
                      borderTop: 'none',
                      background: 'yellow',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>&nbsp;</span>
                    </p>
                  </td>
                  <td
                    width={77}
                    nowrap
                    valign='bottom'
                    style={{width: '58.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                </tr>
                <tr style={{height: '13.8pt'}}>
                  <td
                    width={201}
                    nowrap
                    rowSpan={8}
                    style={{
                      width: '151.0pt',
                      border: 'solid windowtext 1.0pt',
                      borderBottom: 'solid black 1.0pt',
                      background: '#E7E6E6',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <b>
                        <span style={{fontSize: '10.0pt', color: 'black'}}>Other</span>
                      </b>
                    </p>
                  </td>
                  <td
                    width={340}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '255.0pt',
                      background: '#339966',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>&nbsp;</span>
                    </p>
                  </td>
                  <td
                    width={63}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '47.0pt',
                      background: '#339966',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p
                      className='MsoNormal'
                      align='right'
                      style={{marginBottom: '0in', textAlign: 'right', lineHeight: 'normal'}}
                    >
                      <b>
                        <span style={{fontSize: '10.0pt', color: 'black'}}>10</span>
                      </b>
                    </p>
                  </td>
                  <td
                    width={73}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '55.0pt',
                      background: '#339966',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p
                      className='MsoNormal'
                      align='right'
                      style={{marginBottom: '0in', textAlign: 'right', lineHeight: 'normal'}}
                    >
                      <b>
                        <span style={{fontSize: '10.0pt', color: 'black'}}>0</span>
                      </b>
                    </p>
                  </td>
                  <td
                    width={73}
                    rowSpan={7}
                    style={{
                      width: '55.0pt',
                      borderTop: 'solid windowtext 1.0pt',
                      borderLeft: 'none',
                      borderBottom: 'solid black 1.0pt',
                      borderRight: 'none',
                      background: '#339966',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p
                      className='MsoNormal'
                      align='center'
                      style={{marginBottom: '0in', textAlign: 'center', lineHeight: 'normal'}}
                    >
                      <b>
                        <span style={{fontSize: '10.0pt', color: 'black'}}>6</span>
                      </b>
                    </p>
                  </td>
                  <td
                    width={77}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '58.0pt',
                      background: '#339966',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.8pt',
                    }}
                  >
                    <p
                      className='MsoNormal'
                      align='center'
                      style={{marginBottom: '0in', textAlign: 'center', lineHeight: 'normal'}}
                    >
                      <b>
                        <span style={{fontSize: '10.0pt', color: 'black'}}>#DIV/0!</span>
                      </b>
                    </p>
                  </td>
                </tr>
                <tr style={{height: '12.45pt'}}>
                  <td
                    width={340}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '255.0pt',
                      border: 'solid windowtext 1.0pt',
                      borderLeft: 'none',
                      background: '#D9E1F2',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '12.45pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>
                        Side Mirors not Available/Damaged
                      </span>
                    </p>
                  </td>
                  <td
                    width={63}
                    nowrap
                    valign='bottom'
                    style={{width: '47.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '12.45pt'}}
                  />
                  <td
                    width={73}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '55.0pt',
                      border: 'solid windowtext 1.0pt',
                      background: 'yellow',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '12.45pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>&nbsp;</span>
                    </p>
                  </td>
                  <td
                    width={77}
                    nowrap
                    valign='bottom'
                    style={{width: '58.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '12.45pt'}}
                  />
                </tr>
                <tr style={{height: '12.45pt'}}>
                  <td
                    width={340}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '255.0pt',
                      borderTop: 'none',
                      borderLeft: 'none',
                      borderBottom: 'solid windowtext 1.0pt',
                      borderRight: 'solid windowtext 1.0pt',
                      background: '#D9E1F2',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '12.45pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>Wipers Condition</span>
                    </p>
                  </td>
                  <td
                    width={63}
                    nowrap
                    valign='bottom'
                    style={{width: '47.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '12.45pt'}}
                  />
                  <td
                    width={73}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '55.0pt',
                      border: 'solid windowtext 1.0pt',
                      borderTop: 'none',
                      background: 'yellow',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '12.45pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>&nbsp;</span>
                    </p>
                  </td>
                  <td
                    width={77}
                    nowrap
                    valign='bottom'
                    style={{width: '58.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '12.45pt'}}
                  />
                </tr>
                <tr style={{height: '12.45pt'}}>
                  <td
                    width={340}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '255.0pt',
                      borderTop: 'none',
                      borderLeft: 'none',
                      borderBottom: 'solid windowtext 1.0pt',
                      borderRight: 'solid windowtext 1.0pt',
                      background: '#D9E1F2',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '12.45pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>
                        Availability of Tool kit
                      </span>
                    </p>
                  </td>
                  <td
                    width={63}
                    nowrap
                    valign='bottom'
                    style={{width: '47.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '12.45pt'}}
                  />
                  <td
                    width={73}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '55.0pt',
                      border: 'solid windowtext 1.0pt',
                      borderTop: 'none',
                      background: 'yellow',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '12.45pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>&nbsp;</span>
                    </p>
                  </td>
                  <td
                    width={77}
                    nowrap
                    valign='bottom'
                    style={{width: '58.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '12.45pt'}}
                  />
                </tr>
                <tr style={{height: '13.05pt'}}>
                  <td
                    width={340}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '255.0pt',
                      borderTop: 'none',
                      borderLeft: 'none',
                      borderBottom: 'solid windowtext 1.0pt',
                      borderRight: 'solid windowtext 1.0pt',
                      background: '#D9E1F2',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.05pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>Helper available</span>
                    </p>
                  </td>
                  <td
                    width={63}
                    nowrap
                    valign='bottom'
                    style={{width: '47.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.05pt'}}
                  />
                  <td
                    width={73}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '55.0pt',
                      border: 'solid windowtext 1.0pt',
                      borderTop: 'none',
                      background: 'yellow',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.05pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>&nbsp;</span>
                    </p>
                  </td>
                  <td
                    width={77}
                    nowrap
                    valign='bottom'
                    style={{width: '58.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.05pt'}}
                  />
                </tr>
                <tr style={{height: '13.05pt'}}>
                  <td
                    width={340}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '255.0pt',
                      borderTop: 'none',
                      borderLeft: 'none',
                      borderBottom: 'solid windowtext 1.0pt',
                      borderRight: 'solid windowtext 1.0pt',
                      background: '#D9E1F2',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.05pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>
                        Dash cam with separate power connection
                      </span>
                    </p>
                  </td>
                  <td
                    width={63}
                    nowrap
                    valign='bottom'
                    style={{width: '47.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.05pt'}}
                  />
                  <td
                    width={73}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '55.0pt',
                      border: 'solid windowtext 1.0pt',
                      borderTop: 'none',
                      background: 'yellow',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.05pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>&nbsp;</span>
                    </p>
                  </td>
                  <td
                    width={77}
                    nowrap
                    valign='bottom'
                    style={{width: '58.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.05pt'}}
                  />
                </tr>
                <tr style={{height: '12.45pt'}}>
                  <td
                    width={340}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '255.0pt',
                      borderTop: 'none',
                      borderLeft: 'none',
                      borderBottom: 'solid windowtext 1.0pt',
                      borderRight: 'solid windowtext 1.0pt',
                      background: '#D9E1F2',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '12.45pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>VTS -GPS Monitoring</span>
                    </p>
                  </td>
                  <td
                    width={63}
                    nowrap
                    valign='bottom'
                    style={{width: '47.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '12.45pt'}}
                  >
                    <p
                      className='MsoNormal'
                      align='right'
                      style={{marginBottom: '0in', textAlign: 'right', lineHeight: 'normal'}}
                    >
                      <span style={{fontSize: '10.0pt'}}>0</span>
                    </p>
                  </td>
                  <td
                    width={73}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '55.0pt',
                      border: 'solid windowtext 1.0pt',
                      borderTop: 'none',
                      background: 'yellow',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '12.45pt',
                    }}
                  >
                    <p className='MsoNormal' style={{marginBottom: '0in', lineHeight: 'normal'}}>
                      <span style={{fontSize: '10.0pt', color: 'black'}}>&nbsp;</span>
                    </p>
                  </td>
                  <td
                    width={77}
                    nowrap
                    valign='bottom'
                    style={{width: '58.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '12.45pt'}}
                  />
                </tr>
                <tr style={{height: '13.05pt'}}>
                  <td
                    width={549}
                    nowrap
                    colSpan={4}
                    valign='bottom'
                    style={{
                      width: '412.0pt',
                      borderTop: 'none',
                      borderLeft: 'none',
                      borderBottom: 'solid windowtext 1.0pt',
                      borderRight: 'solid black 1.0pt',
                      background: 'aqua',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.05pt',
                    }}
                  >
                    <p
                      className='MsoNormal'
                      align='center'
                      style={{marginBottom: '0in', textAlign: 'center', lineHeight: 'normal'}}
                    >
                      <b>
                        <span style={{fontSize: '10.0pt', color: 'black'}}>
                          VCI level of the fleet
                        </span>
                      </b>
                    </p>
                  </td>
                  <td
                    width={77}
                    nowrap
                    valign='bottom'
                    style={{
                      width: '58.0pt',
                      background: '#339966',
                      padding: '0in 5.4pt 0in 5.4pt',
                      height: '13.05pt',
                    }}
                  >
                    <p
                      className='MsoNormal'
                      align='center'
                      style={{marginBottom: '0in', textAlign: 'center', lineHeight: 'normal'}}
                    >
                      <b>
                        <span style={{fontSize: '10.0pt', color: 'black'}}>#DIV/0!</span>
                      </b>
                    </p>
                  </td>
                </tr>
                <tr style={{height: '13.8pt'}}>
                  <td
                    width={201}
                    nowrap
                    valign='bottom'
                    style={{width: '151.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                  <td
                    width={340}
                    nowrap
                    valign='bottom'
                    style={{width: '255.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                  <td
                    width={63}
                    nowrap
                    valign='bottom'
                    style={{width: '47.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                  <td
                    width={73}
                    nowrap
                    valign='bottom'
                    style={{width: '55.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                  <td
                    width={73}
                    nowrap
                    valign='bottom'
                    style={{width: '55.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                  <td
                    width={77}
                    nowrap
                    valign='bottom'
                    style={{width: '58.0pt', padding: '0in 5.4pt 0in 5.4pt', height: '13.8pt'}}
                  />
                </tr>
              </tbody>
            </table>
            <p className='MsoNormal'>&nbsp;</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function FinalIndex() {
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

function FinalIndexWrapper() {
  return (
    <>
      <PageTitle breadcrumbs={FinalIndexBreadCrumbs}>Final Index Report</PageTitle>
      <FinalIndex />
    </>
  )
}

export default FinalIndexWrapper
