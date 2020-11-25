import Cookies from 'js-cookie';

export const retrieveEvent = async (eventId) => {
    const res = await fetch("http://localhost:30030/organizer/" + localStorage.getItem('organizerId') + "/event/" + eventId, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-auth-token": Cookies.get('token')
        }
    })

    return res.json();
}

export const retrieveLocations = async (eventId) => {
    const res = await fetch("http://localhost:30030/organizer/" + localStorage.getItem('organizerId') + "/event/" + eventId + "/locations", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-auth-token": Cookies.get('token')
        }
    })

    return res.json();
}

export const retrieveLocation = async (locationId) => {
    const res = await fetch("http://localhost:30030/eventLocation/" + locationId, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-auth-token": Cookies.get('token')
        }
    })

    return res.json();
}