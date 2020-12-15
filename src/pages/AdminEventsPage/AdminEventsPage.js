import React from 'react'
import styles from './AdminEventsPage.module.scss'
import Cookies from 'js-cookie'

import AdminEventsList from '../../components/AdminEventsList/AdminEventsList'
import AdminMenu from '../../components/AdminMenu/AdminMenu'

function AdminEventsPage() {
    if (Cookies.get('adminToken')) {
        return (
            <div>
                <AdminMenu />
                <div className={styles.wrapper}>
                    <h2>Змініть або видаліть заходи</h2>
                    <AdminEventsList />
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <h1>Ви не маєте прав користуватися панеллю адміністратора. Увійдіть до системи, будь ласка.</h1>
            </div>
        )
    }
}

export default AdminEventsPage;