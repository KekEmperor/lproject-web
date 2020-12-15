import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import styles from './LoginPage.module.scss';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRedirected, setRedirect] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        fetch("http://localhost:30030/organizer/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email, password
            })
        }).then(res => res.json()).then(data => {
            if (data.token) {
                Cookies.set('token', data.token)
                localStorage.setItem('organizerId', data.organizerId);
                setRedirect(true);
            }
        })
    }

    return isRedirected ? <Redirect to='/overview' /> : (
        <div>
            <div className={styles.wrapper}>
                <p>Увійти до системи як організатор</p>
                <form onSubmit={submit} >
                    <input type="text" placeholder="Введіть електронну пошту" required name="email" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Введіть пароль" required name="password" onChange={(e) => setPassword(e.target.value)} />
                    <input type="submit" value="Увійти" />
                </form>
            </div>
        </div>
    );
}

export default LoginPage;