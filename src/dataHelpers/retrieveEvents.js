import Cookies from 'js-cookie';

export const retrieveEvents = async () => {
    const res = await fetch("http://localhost:30030/organizer/" + localStorage.getItem('organizerId') + "/events", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-auth-token": Cookies.get('token')
        }
    })

    return res.json();
}

export const retrieveAllEvents = async () => {
    const res = await fetch("http://localhost:30030/event", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-auth-token": Cookies.get('token')
        }
    })

    return res.json();
}