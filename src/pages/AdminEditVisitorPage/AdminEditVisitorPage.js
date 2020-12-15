import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { retrieveVisitor } from '../../dataHelpers/retrieveAccounts'

import styles from './AdminEditVisitorPage.module.scss'

import AdminMenu from '../../components/AdminMenu/AdminMenu.js'
import { Redirect } from 'react-router-dom';

function AdminEditVisitorPage(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [birthYear, setBirthYear] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isRedirected, setRedirect] = useState(false);
    const [loading, setLoading] = useState(true);
    const visId = props.match.params.id;

    const submit = (e) => {
        e.preventDefault();

        fetch("http://localhost:30030/admin/" + localStorage.getItem('adminId') + "/visitor/" + visId + "/edit", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": Cookies.get('adminToken'),
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                gender: gender,
                birthYear: birthYear
            })
        }).then(res => res.json()).then(data => {
            if (data.firstName) {
                alert("Акаунт змінено!")
                setRedirect(true);
            }
        })
    }

    useEffect(() => {
        async function fetch() {
            const vis = await retrieveVisitor(visId);

            setFirstName(vis.firstName);
            setLastName(vis.lastName);
            setGender(vis.gender);
            setBirthYear(vis.birthYear);
            setPhoneNumber(vis.phoneNumber);
            setLoading(false);
        }

        fetch();
    }, []);

    if (isRedirected) {
        return <Redirect to="/admin/visitors" />
    }
    else if (loading) {
        return <div></div>
    }
    else {
        return (
            <div>
                <AdminMenu />
                <div className={styles.wrapper}>
                    <h2>Редагування акаунту відвідувача</h2>
                    <form onSubmit={submit}>
                        <div className={styles.fieldWrapper}>
                            <label>Ім'я</label>
                            <input type="text" value={firstName} name="orgName" required onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div className={styles.fieldWrapper}>
                            <label>Прізвище</label>
                            <input type="text" value={lastName} required onChange={(e) => setLastName(e.target.value)} />
                        </div>
                        <div className={styles.fieldWrapper}>
                            <label>Рік народження</label>
                            <input type="text" value={birthYear} required onChange={(e) => setBirthYear(e.target.value)} />
                        </div>
                        <div className={styles.fieldWrapper}>
                            <label>Стать</label>
                            <select name="types" value={gender} onChange={(e) => setGender(e.target.value)}>
                                <option>W</option>
                                <option>M</option>
                            </select>
                        </div>
                        <div className={styles.fieldWrapper}>
                            <label>Номер телефону</label>
                            <input type="text" value={phoneNumber} required disabled />
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

export default AdminEditVisitorPage;