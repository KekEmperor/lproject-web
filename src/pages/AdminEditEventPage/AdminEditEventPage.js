import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { retrieveEvent } from '../../dataHelpers/retrieveEvent'
import dateformat from 'dateformat'

import styles from './AdminEditEventPage.module.scss'

import AdminMenu from '../../components/AdminMenu/AdminMenu.js'
import { Redirect } from 'react-router-dom';

function AdminEditEventPage(props) {
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
    const [loading, setLoading] = useState(true);
    const eventId = props.match.params.id;

    const submit = (e) => {
        e.preventDefault();

        const sDate = Date.parse(startDate + " " + startTime);
        const fDate = Date.parse(finishDate + " " + finishTime);

        console.log(startDate, sDate, fDate, Date.now().valueOf())

        if (sDate > Date.now().valueOf() && fDate > sDate) {
            fetch("http://localhost:30030/admin/" + localStorage.getItem('adminId') + "/event/" + eventId + "/edit", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": Cookies.get('adminToken'),
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
                    alert("Подію змінено!")
                    setRedirect(true);
                }
            })
        }
        else {
            alert('Встановіть, будь ласка, коректний час у майбутньому!')
        }
    }

    useEffect(() => {
        async function fetch() {
            const event = await retrieveEvent(eventId);

            setName(event.name);
            setStartDate(dateformat(event.startDate, "yyyy-mm-dd"));
            setStartTime(dateformat(event.startDate, "HH:MM"));
            setFinishDate(dateformat(event.finishDate, "yyyy-mm-dd"));
            setFinishTime(dateformat(event.finishDate, "HH:MM"));
            setCountry(event.locationCountry);
            setCity(event.locationCity);
            setAddress(event.locationAddress);
            setPlace(event.locationPlace);
            setDesc(event.description);
            setLoading(false);
        }

        fetch();
    }, []);


    if (isRedirected) {
        return <Redirect to="/admin/events" />;
    }
    else if (loading) {
        return <div></div>
    }
    else {
        return (
            <div>
                <AdminMenu />
                <div className={styles.wrapper}>
                    <h2>Редагування заходу</h2>
                    <form onSubmit={submit}>
                        <div className={styles.fieldWrapper}>
                            <label>Назва заходу</label>
                            <input type="text" value={name} name="eventName" placeholder="Party" required onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className={styles.fieldWrapper}>
                            <label>Дата початку заходу</label>
                            <input type="date" value={dateformat(startDate, "yyyy-mm-dd")} name="startDate" required onChange={(e) => setStartDate(e.target.value)} />
                        </div>
                        <div className={styles.fieldWrapper}>
                            <label>Час початку заходу</label>
                            <input type="time" value={startTime}  name="startTime" required onChange={(e) => setStartTime(e.target.value)} />
                        </div>
                        <div className={styles.fieldWrapper}>
                            <label>Дата закінчення заходу</label>
                            <input type="date" value={dateformat(finishDate, "yyyy-mm-dd")} name="finishDate" required onChange={(e) => setFinishDate(e.target.value)} />
                        </div>
                        <div className={styles.fieldWrapper}>
                            <label>Час закінчення заходу</label>
                            <input type="time" value={finishTime} name="finishTime" required onChange={(e) => setFinishTime(e.target.value)} />
                        </div>
                        <div className={styles.fieldWrapper}>
                            <label>Країна проведення</label>
                            <input type="text" value={country} name="country" placeholder="Україна" required onChange={(e) => setCountry(e.target.value)} />
                        </div>
                        <div className={styles.fieldWrapper}>
                            <label>Місто проведення</label>
                            <input type="text" value={city} name="city" placeholder="Харків" required onChange={(e) => setCity(e.target.value)} />
                        </div>
                        <div className={styles.fieldWrapper}>
                            <label>Адреса проведення</label>
                            <input type="text" value={address} name="address" placeholder="проспект Московський, 202" required onChange={(e) => setAddress(e.target.value)} />
                        </div>
                        <div className={styles.fieldWrapper}>
                            <label>Місце проведення</label>
                            <input type="text" value={place} name="place" placeholder="ТРЦ 'Sun City'" required onChange={(e) => setPlace(e.target.value)} />
                        </div>
                        <div className={styles.fieldWrapper}>
                            <label>Опис</label>
                            <input type="text" value={desc} name="description" onChange={(e) => setDesc(e.target.value)} />
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

export default AdminEditEventPage;