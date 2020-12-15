import React, { useEffect, useState } from 'react';
import styles from './AdminVisitorsList.module.scss';

import AdminVisitorCard from './AdminVisitorCard/AdminVisitorCard.js'
import { retrieveAllVisitors } from '../../dataHelpers/retrieveAccounts.js';

const AdminVisitorsList = () => {
    const [visitors, setVisitors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetch() {
            const visitors = await retrieveAllVisitors();

            setVisitors(visitors);
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
                {visitors.map(({ _id, firstName, lastName, phoneNumber }) =>
                    (<AdminVisitorCard visId={_id} firstName={firstName} lastName={lastName} phoneNumber={phoneNumber}/>))}
            </div>
        );
    }
}

export default AdminVisitorsList