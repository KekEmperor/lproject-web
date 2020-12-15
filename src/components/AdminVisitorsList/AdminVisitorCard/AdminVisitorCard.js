import React, { useState } from 'react';
import Cookies from 'js-cookie'

import styles from './AdminVisitorCard.module.scss';
import { FiEdit2 } from 'react-icons/fi'
import { AiOutlineDelete } from 'react-icons/ai'

const deleteVisitor = (visId) => {
    fetch("http://localhost:30030/admin/" + localStorage.getItem('adminId') + "/visitor/" + visId + "/delete", {
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

function AdminVisitorCard({ visId, firstName, lastName, phoneNumber }) {
    return (
        <div>
            <div className={styles.wrapper}>
                <p>{lastName + " " + firstName}</p>
                <div className={styles.lower}>
                    <div>
                        <span>{phoneNumber}</span>
                    </div>
                    <div className={styles.icons}>
                        <a href={"/admin/visitor/" + visId + "/edit"}><FiEdit2 size={28} /></a>
                        <a onClick={(e) => deleteVisitor(visId)}><AiOutlineDelete size={30} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminVisitorCard