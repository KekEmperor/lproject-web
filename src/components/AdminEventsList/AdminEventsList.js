import React, { useEffect, useState } from 'react';
import styles from './AdminEventsList.module.scss';
import dateformat from 'dateformat';

import AdminEventCard from './AdminEventCard/AdminEventCard.js'
import { retrieveAllEvents } from '../../dataHelpers/retrieveEvents';

const AdminEventsList = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetch() {
            const events = await retrieveAllEvents();

            setEvents(events.sort((a, b) => new Date(a.startDate).valueOf() - new Date(b.startDate).valueOf()));
            setLoading(false);
        }

        fetch();
    }, []);

    if (loading) {
        return <div></div>
    }
    else {
        return (
            <div className={styles.wrapper}>
                {events.map(({ _id, name, startDate, finishDate, locationCountry, locationCity }) =>
                    (<AdminEventCard eventId={_id} name={name} startDate={dateformat(startDate, "dd.mm.yyyy")} finishDate={dateformat(finishDate, "dd.mm.yyyy")} locationCity={locationCity} locationCountry={locationCountry} />))}
            </div>
        );
    }
}

export default AdminEventsList;