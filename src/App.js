import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Cookies from 'js-cookie';

import LoginPage from './pages/LoginPage/LoginPage.js'
import OverviewPage from './pages/OverviewPage/OverviewPage.js'
import ReviewPage from './pages/ReviewPage/ReviewPage.js'
import LocationPage from './pages/LocationPage/LocationPage.js'
import Menu from './components/Menu/Menu.js'

function App() {
  Cookies.set('language', 'u')
  return (
    <div>
      {Cookies.get('token') ?
        <div>
          <Menu />
          <Switch>
            <Route path='/login' component={LoginPage} />
            <Route path='/overview' component={OverviewPage} />
            <Route exact path='/review/:eventId/location/:locationId' component={LocationPage} />
            <Route exact path='/review/:id' component={ReviewPage} />
          </Switch>
        </div>
        :
        <LoginPage />
      }
    </div>
  );
}

export default App;
