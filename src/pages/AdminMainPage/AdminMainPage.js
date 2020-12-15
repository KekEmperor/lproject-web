import React from 'react'
import Cookies from 'js-cookie'

import AdminMenu from '../../components/AdminMenu/AdminMenu'

import styles from './AdminMainPage.module.scss'

function AdminMainPage() {
    if (Cookies.get('adminToken')) {
        return (
            <div>
                <AdminMenu />
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

export default AdminMainPage