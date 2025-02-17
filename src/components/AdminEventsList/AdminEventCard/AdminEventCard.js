import React, { useState } from 'react';
import Cookies from 'js-cookie'

import styles from './AdminEventCard.module.scss';
import { FiEdit2 } from 'react-icons/fi'
import { AiOutlineDelete } from 'react-icons/ai'

const deleteEvent = (eventId) => {
    fetch("http://localhost:30030/admin/" + localStorage.getItem('adminId') + "/event/" + eventId + "/delete", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "x-auth-token": Cookies.get('adminToken'),
        }
    }).then(res => res.json()).then(data => {
        if (data) {
            alert("Подію видалено!");
            document.location.reload();
        }
    })
}

function AdminEventCard({ eventId, name, startDate, finishDate, locationCity, locationCountry }) {
    return (
        <div>
            <div className={styles.wrapper}>
                <p>{name}</p>
                <div className={styles.lower}>
                    <div>
                        <span>{startDate + " - " + finishDate}</span><br />
                        <span>{locationCountry + ", " + locationCity}</span>
                    </div>
                    <div className={styles.icons}>
                        <a href={"/admin/event/" + eventId + "/edit"}><FiEdit2 size={28} /></a>
                        <a onClick={(e) => deleteEvent(eventId)}><AiOutlineDelete size={30} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminEventCard;