import React, { Suspense, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './OverviewPage.module.scss';

import EventsList from '../../components/EventsList/EventsList.js'
import Menu from '../../components/Menu/Menu.js'

function OverviewPage() {
    const [t, i18n] = useTranslation();

    return (
        <div>
            <Menu />
            <div className={styles.wrapper}>
                <h2>{t('Оберіть захід зі списку доданих')}</h2>
                <EventsList />
                <h4>{t('або')} <a href="/addEvent">{t('додайте новий захід')}</a></h4>
            </div>
        </div>
    );
}

export default OverviewPage;