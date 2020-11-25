import React from 'react';
import styles from './LocationCard.module.scss';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

function LocationCard({ eventId, locationId, name }) {
    return (
        <div>
            <a href={'/review/' + eventId + '/location/' + locationId}>
                <div className={styles.wrapper}>
                    <span>{name}</span>
                    <ArrowForwardIosRoundedIcon />
                </div>
            </a>
        </div>
    )
}

export default LocationCard;