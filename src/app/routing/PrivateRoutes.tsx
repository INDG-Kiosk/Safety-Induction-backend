import React, { Suspense, lazy } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { FallbackView } from '../../_metronic/partials'
import { DashboardWrapper } from '../ui/dashboard/dashboardWrapper'
import { MenuTestPage } from '../pages/MenuTestPage'

import ContractorAllWrapper from '../ui/contractor/allContractor'
import NewContractorWrapper from '../ui/contractor/newContractor'
import CompanyProfile from '../ui/company/profile'

import CourseAllWrapper from '../ui/course/allCourse'
import NewCourseWrapper from '../ui/course/newCourse'

import QuestionAllWrapper from '../ui/question/allQuestion'
import NewQuestionWrapper from '../ui/question/newQuestion'
import CourseQuestionnWrapper from '../ui/courseQuestionMap/question'

import SiteAllWrapper from '../ui/site/allSites'
import NewSiteWrapper from '../ui/site/newSite'

import UserAllWrapper from '../ui/users/allUser'
import NewUserWrapper from '../ui/users/newUser'

import DashboardDetail from '../ui/dashboard/dashboardDetail'
import GuestProfile from '../ui/dashboard/guestProfile'
import ContractorDetail from '../ui/dashboard/contractorDetail'

import SummaryReport from '../ui/report/summaryReport'
import Setting from '../ui/setting/config'

{/*
import NewHelperWrapper from '../ui/helper/newHelper'
import HelperAllWrapper from '../ui/helper/allHelpers'

import NewTransporterWrapper from '../ui/transporters/allTransporter'
import TransporterAllWrapper from '../ui/transporters/newTransporter'


import NewMedicalWrapper from '../ui/medical/allMedical'
import MedicalAllWrapper from '../ui/medical/newMedical'


import NewVehicleWrapper from '../ui/vehicle/newVehicle'
import VehicleAllWrapper from '../ui/vehicle/allVehicle'


import NewDDTWrapper from '../ui/ddt/newDDT'
import DDTAllWrapper from '../ui/ddt/allDDT'

import IncidentAllWrapper from '../ui/Incident/allIncident'
import NewIncidentWrapper from '../ui/Incident/newIncident'

import MonitorNewWrapper from '../ui/monitor/dailyMonitor'
import MonitorAllWrapper from '../ui/monitor/allMonitor'

import FinalIndexWrapper from '../ui/report/finalIndex'
import VehicleIndexWrapper from '../ui/report/vehicleIndex'
 */}
export function PrivateRoutes() {
  const BuilderPageWrapper = lazy(() => import('../pages/layout-builder/BuilderPageWrapper'))
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))

  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>


        <Route path='/company/edit' component={CompanyProfile} />

        <Route path='/contractor/all' component={ContractorAllWrapper} />
        <Route path='/contractor/new' component={NewContractorWrapper} />
        <Route path='/contractor/edit/:id' component={NewContractorWrapper} />\

        <Route path='/course/all' component={CourseAllWrapper} />
        <Route path='/course/new' component={NewCourseWrapper} />
        <Route path='/course/edit/:id' component={NewCourseWrapper} />

        <Route path='/question/all' component={QuestionAllWrapper} />
        <Route path='/question/new' component={NewQuestionWrapper} />
        <Route path='/question/edit/:id' component={NewQuestionWrapper} />

        <Route path='/course-question/map/:id' component={CourseQuestionnWrapper} />

        <Route path='/site/all' component={SiteAllWrapper} />
        <Route path='/site/new' component={NewSiteWrapper} />
        <Route path='/site/edit/:id' component={NewSiteWrapper} />


        <Route path='/user/all' component={UserAllWrapper} />
        <Route path='/user/new' component={NewUserWrapper} />
        <Route path='/user/edit/:id' component={NewUserWrapper} />

        <Route path='/dashboard/site/:site/guest/:id' component={GuestProfile} />
        <Route path='/dashboard/detail/:id' component={DashboardDetail} />
        <Route path='/dashboard/contractor/:id' component={ContractorDetail} />
        <Route path='/dashboard' component={DashboardWrapper} />

        <Route path='/report/summary' component={SummaryReport} />
        <Route path='/setting' component={Setting} />



        {/*
        <Route path='/helper/all' component={HelperAllWrapper} />
        <Route path='/helper/new' component={NewHelperWrapper} />


        <Route path='/transporter/all' component={NewTransporterWrapper} />
        <Route path='/transporter/new' component={TransporterAllWrapper} />


        <Route path='/medical/all' component={NewMedicalWrapper} />
        <Route path='/medical/new' component={MedicalAllWrapper} />

        <Route path='/vehicle/all' component={VehicleAllWrapper} />
        <Route path='/vehicle/new' component={NewVehicleWrapper} />


        <Route path='/ddt/all' component={DDTAllWrapper} />
        <Route path='/ddt/new' component={NewDDTWrapper} />

        <Route path='/incident/all' component={IncidentAllWrapper} />
        <Route path='/incident/new' component={NewIncidentWrapper} />

        <Route path='/monitor/new' component={MonitorNewWrapper} />
        <Route path='/monitor/all' component={MonitorAllWrapper} />

        <Route path='/report/finalindex' component={FinalIndexWrapper} />
        <Route path='/report/vehicleindex' component={VehicleIndexWrapper} />
 */}
        <Redirect from='/auth' to='/dashboard' />
        <Redirect exact from='/' to='/dashboard' />
        <Redirect to='error/404' />
      </Switch>
    </Suspense>
  )
}
