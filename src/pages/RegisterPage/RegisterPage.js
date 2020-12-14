import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'

import styles from './RegisterPage.module.scss'

function RegisterPage() {
    const [email, setEmail] = useState('');
    const [companyName, setName] = useState('');
    const [password, setPassword] = useState('');
    const [isRedirected, setRedirect] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        fetch("http://localhost:30030/organizer", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email, companyName, password
            })
        }).then(res => res.json()).then(data => {
            if (data.email) {
                setRedirect(true);
            }
        })
    }

    return isRedirected ? <Redirect to='/login' /> : (
        <div>
            <div className={styles.wrapper}>
                <form onSubmit={submit} >
                    <input type="text" placeholder="Enter your e-mail" required name="email" onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" placeholder="Enter your company name" required name="name" onChange={(e) => setName(e.target.value)} />
                    <input type="password" placeholder="Enter your password" required name="password" onChange={(e) => setPassword(e.target.value)} />
                    <input type="submit" value="Register" />
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;