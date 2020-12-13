import Cookies from 'js-cookie';

export const retrieveCounter = async (eventId) => {
    const res = await fetch("http://localhost:30030/organizer/" + localStorage.getItem('organizerId') + "/event/" + eventId + "/stat/count", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-auth-token": Cookies.get('token')
        }
    })

    return res.json();
}

export const retrieveAges = async (eventId) => {
    const res = await fetch("http://localhost:30030/organizer/" + localStorage.getItem('organizerId') + "/event/" + eventId + "/stat/ages", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-auth-token": Cookies.get('token')
        }
    })

    return res.json();
}

export const retrieveGenders = async (eventId) => {
    const res = await fetch("http://localhost:30030/organizer/" + localStorage.getItem('organizerId') + "/event/" + eventId + "/stat/genders", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-auth-token": Cookies.get('token')
        }
    })

    return res.json();
}

export const retrieveTimeline = async (eventId) => {
    const res = await fetch("http://localhost:30030/organizer/" + localStorage.getItem('organizerId') + "/event/" + eventId + "/stat/timelines", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-auth-token": Cookies.get('token')
        }
    })

    return res.json();
}

export const retrieveAverageTime = async (eventId) => {
    const res = await fetch("http://localhost:30030/organizer/" + localStorage.getItem('organizerId') + "/event/" + eventId + "/stat/averageTime", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-auth-token": Cookies.get('token')
        }
    })

    return res.json();
}