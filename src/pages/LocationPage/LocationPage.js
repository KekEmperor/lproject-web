import React, { useEffect, useState } from 'react';
import { retrieveLocation } from '../../dataHelpers/retrieveEvent.js';
import { retrieveAges, retrieveGenders, retrieveTimeline } from '../../dataHelpers/retrieveStats.js';
import styles from './LocationPage.module.scss'

import AgeChart from '../../components/Graphs/AgeChart/AgeChart.js'
import GenderChart from '../../components/Graphs/GenderChart/GenderChart.js'
import TimeSeriesChart from '../../components/Graphs/TimeSeriesChart/TimeSeriesChart.js'

function LocationPage(props) {
    const [ages, setAges] = useState('');
    const [averageTime, setTime] = useState('');
    const [genders, setGenders] = useState('');
    const [timeline, setTimeline] = useState('');
    const [location, setLocation] = useState('');
    const [loading, setLoading] = useState(true);
    const eventId = props.match.params.eventId;
    const locationId = props.match.params.locationId;

    useEffect(() => {
        async function fetch() {
            const location = await retrieveLocation(locationId);
            const ages = await retrieveAges(eventId);
            const genders = await retrieveGenders(eventId);
            const timeline = await retrieveTimeline(eventId);

            setLocation(location);
            setAges(ages[locationId]);
            setGenders(genders[locationId]);
            setTimeline(timeline[locationId]);
            setLoading(false);
        }

        fetch();
    }, [])

    return loading ? <div></div> : (
        <div className={styles.wrapper}>
            <div className={styles.pieWrapper}>
                <AgeChart under30={ages['under30']} from30to50={ages['from30to50']} from50={ages['from50']} />
                <GenderChart women={genders['womenPercent']} men={genders['menPercent']} />
            </div>
            <TimeSeriesChart timeline={timeline} />
        </div>
    )
}

export default LocationPage;