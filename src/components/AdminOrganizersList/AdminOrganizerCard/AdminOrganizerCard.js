import React, { useState } from 'react';
import Cookies from 'js-cookie'

import styles from './AdminOrganizerCard.module.scss';
import { FiEdit2 } from 'react-icons/fi'
import { AiOutlineDelete } from 'react-icons/ai'

const deleteOrg = (orgId) => {
    fetch("http://localhost:30030/admin/" + localStorage.getItem('adminId') + "/organizer/" + orgId + "/delete", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "x-auth-token": Cookies.get('adminToken'),
        }
    }).then(res => res.json()).then(data => {
        if (data) {
            alert("Акаунт видалено!");
            document.location.reload();
        }
    })
}

function AdminOrganizerCard({ orgId, name, email }) {
    return (
        <div>
            <div className={styles.wrapper}>
                <p>{name}</p>
                <div className={styles.lower}>
                    <div>
                        <span>{email}</span>
                    </div>
                    <div className={styles.icons}>
                        <a href={"/admin/organizer/" + orgId + "/edit"}><FiEdit2 size={28} /></a>
                        <a onClick={(e) => deleteOrg(orgId)}><AiOutlineDelete size={30} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminOrganizerCard;