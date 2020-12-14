import React from 'react'
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie'

import styles from './Menu.module.scss';

function Menu() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <div><a href="/overview"><b>Огляд подій</b></a></div>
                <div><a href="/addEvent"><b>Створити подію</b></a></div>
            </div>
            <div className={styles.right}>
                <div>Switch to English</div>
                <div><a href="/login"><b>Вийти з акаунту</b></a></div>
            </div>
        </div>
    )
}

export default Menu;