import React, { useEffect, useState } from 'react';
import styles from './ReviewPage.module.scss'
import dateformat from 'dateformat'

import { retrieveEvent, retrieveLocations } from '../../dataHelpers/retrieveEvent.js'
import { retrieveCounter } from '../../dataHelpers/retrieveStats.js';
import LocationsList from '../../components/LocationsList/LocationsList.js'

function ReviewPage(props) {
    const [event, setEvent] = useState('');
    const [locations, setLocations] = useState('');
    const [counter, setCounter] = useState('');
    const [loading, setLoading] = useState(true);
    const eventId = props.match.params.id;

    useEffect(() => {
        async function fetch() {
            const event = await retrieveEvent(eventId);
            const counter = await retrieveCounter(eventId);

            setCounter(counter);
            setEvent(event);
            setLoading(false);
        }

        fetch();
    }, []);

    if (loading) {
        return <div></div>
    }
    return (
        <div className={styles.wrapper}>
            <p className={styles.name}>Назва заходу: {event.name}</p>
            <p>Час проведення: {dateformat(event.startDate, 'dd.mm.yyyy HH:MM')} - {dateformat(event.finishDate, 'dd.mm.yyyy HH:MM')}</p>
            <p>Місце проведення: {event.locationCountry + ", " + event.locationCity + ", " + event.locationAddress + " (" + event.locationPlace + ")"}</p>
            <div className={styles.counter}>
                <p>Загалом відвідувачів на всіх локаціях: {counter}</p>
            </div>
            <h4>Переглянути статистику за локаціями:</h4>
            <LocationsList eventId={eventId} />
        </div>
    )
}

export default ReviewPage;