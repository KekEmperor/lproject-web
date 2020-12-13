import React from 'react'
import { Redirect } from 'react-router-dom';

import styles from './Menu.module.scss';

function Menu() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <div><a href="/overview"><b>Огляд подій</b></a></div>
                <div><b>Створити подію</b></div>
            </div>
            <div className={styles.right}>
                <div>Switch to English</div>
                <div><b>Вийти з акаунту</b></div>
            </div>
        </div>
    )
}

export default Menu;