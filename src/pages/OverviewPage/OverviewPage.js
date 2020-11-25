import React, { Suspense, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import styles from './OverviewPage.module.scss';

import EventsList from '../../components/EventsList/EventsList.js'
import { retrieveEvents } from '../../dataHelpers/retrieveEvents';

function OverviewPage() {
    return (
        <div>
            <div className={styles.wrapper}>
                <h2>Оберіть захід зі списку доданих:</h2>
                <EventsList />
                <h4>або додайте новий</h4>
            </div>
        </div>
    );
}

export default OverviewPage;