import React from 'react'
import Cookies from 'js-cookie'

import AdminMenu from '../../components/AdminMenu/AdminMenu'

import styles from './AdminOrganizersPage.module.scss'
import AdminOrganizersList from '../../components/AdminOrganizersList/AdminOrganizersList'

function AdminOrganizersPage() {
    if (Cookies.get('adminToken')) {
        return (
            <div>
                <AdminMenu />
                <div className={styles.wrapper}>
                    <h2>Змініть або видаліть дані про організаторів</h2>
                    <AdminOrganizersList />
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

export default AdminOrganizersPage