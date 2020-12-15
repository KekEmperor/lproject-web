import React, { useEffect, useState } from 'react';
import styles from './AdminOrganizersList.module.scss';

import AdminOrganizerCard from './AdminOrganizerCard/AdminOrganizerCard.js'
import { retrieveAllOrganizers } from '../../dataHelpers/retrieveAccounts.js';

const AdminOrganizersList = () => {
    const [orgs, setOrgs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetch() {
            const orgs = await retrieveAllOrganizers();

            console.log(orgs)

            setOrgs(orgs);
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
                {orgs.map(({ _id, companyName, email }) =>
                    (<AdminOrganizerCard orgId={_id} name={companyName} email={email} />))}
            </div>
        );
    }
}

export default AdminOrganizersList;