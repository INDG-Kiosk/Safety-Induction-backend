/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { useIntl } from 'react-intl'
import { KTSVG } from '../../../helpers'
import { AsideMenuItemWithSub } from './AsideMenuItemWithSub'
import { AsideMenuItem } from './AsideMenuItem'
import { useDataLayerValue } from '../../../../DataLayer'

export function AsideMenuMain() {
  const intl = useIntl()
  const [{ user }, dispatch] = useDataLayerValue()


  if (user.role == "Report_Viewer") {

    return (
      <>
        <AsideMenuItem
          to='/dashboard'
          icon='/media/icons/duotune/art/art002.svg'
          title="Dashboard"
          fontIcon='bi-app-indicator'
        />

        <div className='menu-item'>
          <div className='menu-content pt-8 pb-2'>
            <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Reports</span>
          </div>
        </div>
        <AsideMenuItemWithSub
          to='#'
          title='Reports'
          fontIcon='bi-archive'
          icon='/media/icons/duotune/maps/map001.svg'
        >
          <AsideMenuItem to='/report/summary' title='Summary Details' hasBullet={true}></AsideMenuItem>
        </AsideMenuItemWithSub >



      </>
    )
  }

  if (user.role == "Content_Admin") {

    return (
      <>
        <AsideMenuItem
          to='/dashboard'
          icon='/media/icons/duotune/art/art002.svg'
          title="Dashboard"
          fontIcon='bi-app-indicator'
        />

        <AsideMenuItem
          to='/dashboard'
          icon='/media/icons/duotune/art/art002.svg'
          title="Dashboard"
          fontIcon='bi-app-indicator'
        />

        <div className='menu-item'>
          <div className='menu-content pt-8 pb-2'>
            <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Administration</span>
          </div>
        </div>

        <AsideMenuItem
          to='/setting'
          title='Settings'
          fontIcon='bi-archive'
          icon='/media/icons/duotune/coding/cod001.svg'
        >
        </AsideMenuItem >

        <AsideMenuItem
          to='/company/edit'
          title='Company Profile'
          fontIcon='bi-archive'
          icon='/media/icons/duotune/finance/fin001.svg'
        >
        </AsideMenuItem >


        <AsideMenuItem
          to='/site/all'
          title='Site Management'
          fontIcon='bi-archive'
          icon='/media/icons/duotune/maps/map001.svg'
        >
        </AsideMenuItem >



        <div className='menu-item'>
          <div className='menu-content pt-8 pb-2'>
            <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Operations</span>
          </div>
        </div>

        <AsideMenuItem
          to='/contractor/all'
          title='Contractors'
          fontIcon='bi-archive'
          icon='/media/icons/duotune/communication/com005.svg'
        >
        </AsideMenuItem >

        <AsideMenuItem
          to='/course/all'
          title='Course(s)'
          fontIcon='bi-archive'
          icon='/media/icons/duotune/files/fil003.svg'
        >
        </AsideMenuItem >

        <AsideMenuItem
          to='/question/all'
          title='Question Bank'
          fontIcon='bi-archive'
          icon='/media/icons/duotune/files/fil025.svg'
        >
        </AsideMenuItem >


        <div className='menu-item'>
          <div className='menu-content pt-8 pb-2'>
            <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Operations</span>
          </div>
        </div>

        <AsideMenuItem
          to='/contractor/all'
          title='Contractors'
          fontIcon='bi-archive'
          icon='/media/icons/duotune/communication/com005.svg'
        >
        </AsideMenuItem >

        <AsideMenuItem
          to='/course/all'
          title='Course(s)'
          fontIcon='bi-archive'
          icon='/media/icons/duotune/files/fil003.svg'
        >
        </AsideMenuItem >

        <AsideMenuItem
          to='/question/all'
          title='Question Bank'
          fontIcon='bi-archive'
          icon='/media/icons/duotune/files/fil025.svg'
        >
        </AsideMenuItem >
      </>
    )
  }



  return (
    <>
      <AsideMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/art/art002.svg'
        title="Dashboard"
        fontIcon='bi-app-indicator'
      />

      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Administration</span>
        </div>
      </div>

      <AsideMenuItem
        to='/user/all'
        title='Users Management'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/communication/com006.svg'
      >
      </AsideMenuItem >



    </>
  )
}
