import React from 'react';
import styles from './EventCard.module.scss';

function EventCard({ eventId, name, startDate, finishDate, locationCity, locationCountry }) {
    return (
        <div>
            <a href={'/review/' + eventId}>
                <div className={styles.wrapper}>
                    <p>{name}</p>
                    <span>{startDate + " - " + finishDate}</span><br />
                    <span>{locationCountry + ", " + locationCity}</span>
                </div>
            </a>
        </div>
    );
}

export default EventCard;