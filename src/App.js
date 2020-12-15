import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Cookies from 'js-cookie';
import './i18n'

import LoginPage from './pages/LoginPage/LoginPage.js'
import OverviewPage from './pages/OverviewPage/OverviewPage.js'
import ReviewPage from './pages/ReviewPage/ReviewPage.js'
import LocationPage from './pages/LocationPage/LocationPage.js'
import AddEventPage from './pages/AddEventPage/AddEventPage.js'
import RegisterPage from './pages/RegisterPage/RegisterPage.js'
import AddLocationPage from './pages/AddLocationPage/AddLocationPage';
import AdminLoginPage from './pages/AdminLoginPage/AdminLoginPage.js'
import AdminMainPage from './pages/AdminMainPage/AdminMainPage';
import AdminEventsPage from './pages/AdminEventsPage/AdminEventsPage'
import AdminEditEventPage from './pages/AdminEditEventPage/AdminEditEventPage';
import AdminOrganizersPage from './pages/AdminOrganizersPage/AdminOrganizersPage';
import AdminEditOrganizerPage from './pages/AdminEditOrganizerPage/AdminEditOrganizerPage';
import AdminVisitorsPage from './pages/AdminVisitorsPage/AdminVisitorsPage';
import AdminEditVisitorPage from './pages/AdminEditVisitorPage/AdminEditVisitorPage';

function App() {
  return (
    <div>
      {Cookies.get('token') ?
        <div>
          <Switch>
            <Route exact path='/' component={OverviewPage} />
            <Route path='/login' component={LoginPage} />
            <Route path='/overview' component={OverviewPage} />
            <Route exact path='/review/:eventId/location/:locationId' component={LocationPage} />
            <Route exact path='/review/:id' component={ReviewPage} />
            <Route exact path='/review/:eventId/addLocation' component={AddLocationPage} />
            <Route path='/addEvent' component={AddEventPage} />
            <Route path='/register' component={RegisterPage} />
            <Route path='/admin/login' component={AdminLoginPage} />
            <Route exact path='/admin' component={AdminMainPage} />
            <Route path='/admin/events' component={AdminEventsPage} />
            <Route exact path="/admin/event/:id/edit" component={AdminEditEventPage} />
            <Route path='/admin/organizers' component={AdminOrganizersPage} />
            <Route path='/admin/organizer/:id/edit' component={AdminEditOrganizerPage} />
            <Route path='/admin/visitors' component={AdminVisitorsPage} />
            <Route path='/admin/visitor/:id/edit' component={AdminEditVisitorPage} />
          </Switch>
        </div>
        :
        <Switch>
          <Route exact path='/' component={LoginPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={RegisterPage} />
          <Route path='/admin/login' component={AdminLoginPage} />
          <Route exact path='/admin' component={AdminMainPage} />
          <Route path='/admin/events' component={AdminEventsPage} />
          <Route exact path="/admin/event/:id/edit" component={AdminEditEventPage} />
          <Route path='/admin/organizers' component={AdminOrganizersPage} />
          <Route path='/admin/organizer/:id/edit' component={AdminEditOrganizerPage} />
          <Route path='/admin/visitors' component={AdminVisitorsPage} />
          <Route path='/admin/visitor/:id/edit' component={AdminEditVisitorPage} />
        </Switch>
      }
    </div>
  );
}

export default App;
