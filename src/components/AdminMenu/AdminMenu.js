import React from 'react'
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie'

import styles from './AdminMenu.module.scss';

function AdminMenu() {
    return (
        <div className={styles.wrapper}>
            <div><a href="/admin/organizers"><b>Організатори</b></a></div>
            <div><a href="/admin/visitors"><b>Відвідувачі</b></a></div>
            <div><a href="/admin/events"><b>Заходи</b></a></div>
            <div><a href="/admin/backup"><b>Керування копіями</b></a></div>
        </div>
    )
}

export default AdminMenu;