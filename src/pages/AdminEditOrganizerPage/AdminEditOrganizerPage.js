import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { retrieveOrganizer } from '../../dataHelpers/retrieveAccounts'

import styles from './AdminEditOrganizerPage.module.scss'

import AdminMenu from '../../components/AdminMenu/AdminMenu.js'
import { Redirect } from 'react-router-dom';

function AdminEditOrganizerPage(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isRedirected, setRedirect] = useState(false);
    const [loading, setLoading] = useState(true);
    const orgId = props.match.params.id;

    const submit = (e) => {
        e.preventDefault();

        fetch("http://localhost:30030/admin/" + localStorage.getItem('adminId') + "/organizer/" + orgId + "/edit", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": Cookies.get('adminToken'),
            },
            body: JSON.stringify({
                companyName: name,
            })
        }).then(res => res.json()).then(data => {
            if (data.companyName) {
                alert("Акаунт змінено!")
                setRedirect(true);
            }
        })
    }

    useEffect(() => {
        async function fetch() {
            const org = await retrieveOrganizer(orgId);

            setName(org.companyName);
            setEmail(org.email);
            setLoading(false);
        }

        fetch();
    }, []);


    if (isRedirected) {
        return <Redirect to="/admin/organizers" />
    }
    else if (loading) {
        return <div></div>
    }
    else {
        return (
            <div>
                <AdminMenu />
                <div className={styles.wrapper}>
                    <h2>Редагування акаунту організатора</h2>
                    <form onSubmit={submit}>
                        <div className={styles.fieldWrapper}>
                            <label>Назва компанії-організатора</label>
                            <input type="text" value={name} name="orgName" required onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className={styles.fieldWrapper}>
                            <label>Електронна пошта організатора</label>
                            <input type="text" value={email} required disabled />
                        </div>
                        <div className={styles.fieldWrapper}>
                            <input type="submit" value="Надіслати" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default AdminEditOrganizerPage;