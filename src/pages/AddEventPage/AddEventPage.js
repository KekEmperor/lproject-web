import React, { useState } from 'react'
import Cookies from 'js-cookie'
import { useTranslation } from 'react-i18next';

import styles from './AddEventPage.module.scss'

import Menu from '../../components/Menu/Menu.js'
import { Redirect } from 'react-router-dom';

function AddEventPage() {
    const [t, i18n] = useTranslation();

    const [name, setName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [finishDate, setFinishDate] = useState('');
    const [finishTime, setFinishTime] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [place, setPlace] = useState('');
    const [desc, setDesc] = useState('');
    const [isRedirected, setRedirect] = useState(false);

    const submit = (e) => {
        e.preventDefault();

        const sDate = Date.parse(startDate + " " + startTime);
        const fDate = Date.parse(finishDate + " " + finishTime);

        console.log(sDate, fDate, Date.now().valueOf())

        if (sDate > Date.now().valueOf() && fDate > sDate) {
            fetch("http://localhost:30030/organizer/" + localStorage.getItem('organizerId') + "/events", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": Cookies.get('token'),
                },
                body: JSON.stringify({
                    name: name,
                    startDate: sDate,
                    finishDate: fDate,
                    description: desc,
                    locationAddress: address,
                    locationCity: city,
                    locationCountry: country,
                    locationPlace: place,
                })
            }).then(res => res.json()).then(data => {
                if (data.name) {
                    alert(t("Подію додано!"))
                    setRedirect(true);
                }
            })
        }
        else
        {
            alert(t('Встановіть, будь ласка, коректний час у майбутньому!'))
        }
    }

    return isRedirected ? <Redirect to="/overview" /> : (
        <div>
            <Menu />
            <div className={styles.wrapper}>
                <h2>{t('Додавання нового заходу')}</h2>
                <form onSubmit={submit}>
                    <div className={styles.fieldWrapper}>
                        <label>{t("Назва заходу")}</label>
                        <input type="text" name="eventName" placeholder="Party" required onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className={styles.fieldWrapper}>
                        <label>{t('Дата початку заходу')}</label>
                        <input type="date" name="startDate" required onChange={(e) => setStartDate(e.target.value)} />
                    </div>
                    <div className={styles.fieldWrapper}>
                        <label>{t('Час початку заходу')}</label>
                        <input type="time" name="startTime" required onChange={(e) => setStartTime(e.target.value)} />
                    </div>
                    <div className={styles.fieldWrapper}>
                        <label>{t('Дата закінчення заходу')}</label>
                        <input type="date" name="finishDate" required onChange={(e) => setFinishDate(e.target.value)} />
                    </div>
                    <div className={styles.fieldWrapper}>
                        <label>{t('Час закінчення заходу')}</label>
                        <input type="time" name="finishTime" required onChange={(e) => setFinishTime(e.target.value)} />
                    </div>
                    <div className={styles.fieldWrapper}>
                        <label>{t('Країна проведення')}</label>
                        <input type="text" name="country" placeholder="Україна" required onChange={(e) => setCountry(e.target.value)} />
                    </div>
                    <div className={styles.fieldWrapper}>
                        <label>{t('Місто проведення')}</label>
                        <input type="text" name="city" placeholder="Харків" required onChange={(e) => setCity(e.target.value)} />
                    </div>
                    <div className={styles.fieldWrapper}>
                        <label>{t('Адреса проведення')}</label>
                        <input type="text" name="address" placeholder="проспект Московський, 202" required onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div className={styles.fieldWrapper}>
                        <label>{t('Місце проведення')}</label>
                        <input type="text" name="place" placeholder="ТРЦ 'Sun City'" required onChange={(e) => setPlace(e.target.value)} />
                    </div>
                    <div className={styles.fieldWrapper}>
                        <label>{t('Опис')}</label>
                        <input type="text" name="description" onChange={(e) => setDesc(e.target.value)} />
                    </div>
                    <div className={styles.fieldWrapper}>
                        <input type="submit" value={t("Надіслати")} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddEventPage;