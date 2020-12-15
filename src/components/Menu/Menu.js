import React from 'react'
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie'

import styles from './Menu.module.scss';

function Menu() {
    const [t, i18n] = useTranslation();

    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <div><a href="/overview"><b>{t('Огляд подій')}</b></a></div>
                <div><a href="/addEvent"><b>{t('Створити подію')}</b></a></div>
            </div>
            <div className={styles.right}>
                <div onClick={(e) => {Cookies.get('language') == 'en' ? Cookies.set('language', 'ua') : Cookies.set('language', 'en'); document.location.reload();}}>{t('Switch to English')}</div>
                <div><a href="/login"><b>{t('Вийти з акаунту')}</b></a></div>
            </div>
        </div>
    )
}

export default Menu;