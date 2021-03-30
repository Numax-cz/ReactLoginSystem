import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'


export default function Logout() {
    const history = useHistory();
    const [session, Setsession] = useState(
        sessionStorage.getItem("user") || ''
    );
    sessionStorage.clear()
    history.push("/")
    return (
        <>
        </>
    )
}