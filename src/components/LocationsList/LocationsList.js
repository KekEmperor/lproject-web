import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import styles from './LocationsList.module.scss';
import dateformat from 'dateformat';

import LocationCard from './LocationCard/LocationCard.js'
import { retrieveLocations } from '../../dataHelpers/retrieveEvent.js';

function LocationsList({ eventId }) {
    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetch() {
            const locations = await retrieveLocations(eventId);
            
            setLocations(locations);
            setLoading(false);
        }

        fetch();
    }, []);

    if (loading) {
        return <div></div>
    }

    return (
        <div>
            {locations.map(({ _id, name }) => (<LocationCard eventId={eventId} locationId={_id} name={name} />))}
        </div>
    );
}

export default LocationsList;