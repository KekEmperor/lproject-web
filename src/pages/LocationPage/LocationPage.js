import React, { useEffect, useState } from 'react';
import { retrieveLocation, retrieveEvent } from '../../dataHelpers/retrieveEvent.js';
import { retrieveAges, retrieveGenders, retrieveTimeline, retrieveAverageTime } from '../../dataHelpers/retrieveStats.js';
import styles from './LocationPage.module.scss'

import AgeChart from '../../components/Graphs/AgeChart/AgeChart.js'
import GenderChart from '../../components/Graphs/GenderChart/GenderChart.js'
import TimeSeriesChart from '../../components/Graphs/TimeSeriesChart/TimeSeriesChart.js'
import Menu from '../../components/Menu/Menu.js'

function LocationPage(props) {
    const [ages, setAges] = useState('');
    const [averageTime, setTime] = useState('');
    const [genders, setGenders] = useState('');
    const [timeline, setTimeline] = useState('');
    const [location, setLocation] = useState('');
    const [loading, setLoading] = useState(true);
    const [event, setEvent] = useState('');
    const eventId = props.match.params.eventId;
    const locationId = props.match.params.locationId;

    useEffect(() => {
        async function fetch() {
            const location = await retrieveLocation(locationId);
            const averageTime = await retrieveAverageTime(eventId);
            const ages = await retrieveAges(eventId);
            console.log(ages)
            const genders = await retrieveGenders(eventId);
            const timeline = await retrieveTimeline(eventId);
            const event = await retrieveEvent(eventId);

            setLocation(location);
            setAges(ages[locationId]);
            setTime(averageTime[locationId]);
            setGenders(genders[locationId]);
            setTimeline(timeline[locationId]);
            setEvent(event);
            setLoading(false);
        }

        fetch();
    }, [])

    if (loading) {
        return <div></div>
    }
    else {
        if (new Date(event.startDate).valueOf() < Date.now()) {
            return (
                <div>
                    <Menu />
                    <div className={styles.wrapper}>
                        <h2>Назва локації: {location.name}</h2>
                        <div className={styles.avTime}>
                            <p>Середній час, проведений на локації: {Math.ceil(averageTime / 60) + " хвилин " + averageTime % 60 + " секунд"}</p>
                        </div>
                        <div className={styles.pieWrapper}>
                            <AgeChart under30={ages['under30']} from30to50={ages['from30to50']} over50={ages['over50']} />
                            <GenderChart women={genders['womenPercent']} men={genders['menPercent']} />
                        </div>
                        <TimeSeriesChart timeline={timeline} />
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className={styles.missing}>
                    <Menu />
                    <h3>Захід ще не почався, тому статистику переглянути не можна. Будь ласка, відкрийте інший захід.</h3>
                </div>
            )
        }
    }
}

export default LocationPage;