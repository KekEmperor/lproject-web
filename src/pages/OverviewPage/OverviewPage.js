import React, { Suspense, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import styles from './OverviewPage.module.scss';

import EventsList from '../../components/EventsList/EventsList.js'
import { retrieveEvents } from '../../dataHelpers/retrieveEvents';
import Menu from '../../components/Menu/Menu.js'

function OverviewPage() {
    return (
        <div>
            <Menu />
            <div className={styles.wrapper}>
                <h2>Оберіть захід зі списку доданих</h2>
                <EventsList />
                <h4>або <a href="/addEvent">додайте новий</a></h4>
            </div>
        </div>
    );
}

export default OverviewPage;