import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Cookies from 'js-cookie';

import LoginPage from './pages/LoginPage/LoginPage.js'
import OverviewPage from './pages/OverviewPage/OverviewPage.js'
import ReviewPage from './pages/ReviewPage/ReviewPage.js'
import LocationPage from './pages/LocationPage/LocationPage.js'
import AddEventPage from './pages/AddEventPage/AddEventPage.js'
import RegisterPage from './pages/RegisterPage/RegisterPage.js'
import AddLocationPage from './pages/AddLocationPage/AddLocationPage';

function App() {
  return (
    <div>
      {Cookies.get('token') ?
        <div>
          <Switch>
            <Route path='/login' component={LoginPage} />
            <Route path='/overview' component={OverviewPage} />
            <Route exact path='/review/:eventId/location/:locationId' component={LocationPage} />
            <Route exact path='/review/:id' component={ReviewPage} />
            <Route exact path='/review/:eventId/addLocation' component={AddLocationPage} />
            <Route path='/addEvent' component={AddEventPage} />
          </Switch>
        </div>
        :
        <LoginPage />
      }
    </div>
  );
}

export default App;
