import React, { useEffect, useState } from 'react';
import styles from './EventsList.module.scss';
import dateformat from 'dateformat';

import EventCard from './EventCard/EventCard.js'
import { retrieveEvents } from '../../dataHelpers/retrieveEvents';

const EventsList = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetch() {
            const events = await retrieveEvents();

            setEvents(events.sort((a, b) => new Date(a.startDate).valueOf() - new Date(b.startDate).valueOf()));
            setLoading(false);
        }

        fetch();
    }, []);

    if (loading) {
        return <div></div>
    }

    return (
        <div className={styles.wrapper}>
            {events.map(({ _id, name, startDate, finishDate, locationCountry, locationCity }) =>
                (<EventCard eventId={_id} name={name} startDate={dateformat(startDate, "dd.mm.yyyy")} finishDate={dateformat(finishDate, "dd.mm.yyyy")} locationCity={locationCity} locationCountry={locationCountry} />))}
        </div>
    );
}

export default EventsList;