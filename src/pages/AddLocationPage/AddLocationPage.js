import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useTranslation } from 'react-i18next';

import styles from './AddLocationPage.module.scss'

import Menu from '../../components/Menu/Menu.js'

function AddLocationPage(props) {
    const [t, i18n] = useTranslation();

    const [name, setName] = useState('');
    const [type, setType] = useState('Stage')
    const [isRedirected, setRedirect] = useState(false);
    const eventId = props.match.params.eventId;

    const submit = (e) => {
        e.preventDefault();
        fetch("http://localhost:30030/organizer/" + localStorage.getItem('organizerId') + "/event/" + eventId, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": Cookies.get('token'),
            },
            body: JSON.stringify({
                baseEvent: eventId,
                name: name,
                type: type
            })
        }).then(res => res.json()).then(data => {
            if (data.name) {
                alert(t("Локацію додано!"))
                setRedirect(true);
            }
        })
    }

    return isRedirected ? <Redirect to={"/review/" + eventId} /> : (
        <div>
            <Menu />
            <div className={styles.wrapper}>
                <h2>{t('Додавання нової локації на захід')}</h2>
                <form onSubmit={submit}>
                    <div className={styles.fieldWrapper}>
                        <label>{t('Назва локації')}</label>
                        <input type="text" name="name" placeholder="Red Hall" required onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className={styles.fieldWrapper}>
                        <label>{t('Тип локації')}</label>
                        <select name="types" onChange={(e) => { setType(e.target.value); console.log(e.target.value) }}>
                            <option>Stage</option>
                            <option>Shop</option>
                        </select>
                    </div>
                    <div className={styles.fieldWrapper}>
                        <input type="submit" value={t("Надіслати")} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddLocationPage;