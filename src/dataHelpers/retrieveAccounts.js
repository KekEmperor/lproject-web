import Cookies from 'js-cookie'

export const retrieveAllOrganizers = async () => {
    const res = await fetch("http://localhost:30030/organizer", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })

    return res.json();
}

export const retrieveOrganizer = async (orgId) => {
    const res = await fetch("http://localhost:30030/admin/" + localStorage.getItem('adminId') + "/organizer/" + orgId, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-auth-token": Cookies.get('adminToken')
        }
    })

    return res.json()
}

export const retrieveAllVisitors = async () => {
    const res = await fetch("http://localhost:30030/visitor", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })

    return res.json();
}

export const retrieveVisitor = async (visId) => {
    const res = await fetch("http://localhost:30030/admin/" + localStorage.getItem('adminId') + "/visitor/" + visId, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-auth-token": Cookies.get('adminToken')
        }
    })

    return res.json();
}