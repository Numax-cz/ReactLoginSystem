
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

export default function User() {
    const history = useHistory();
    const [session, Setsession] = useState(
        sessionStorage.getItem("user") || ''
    );

    if (session === '') {
        history.push("/");
    }

    return (
        <div>
            <h1>Vítej {session}!</h1>
            <a href="/logout">Odhlásit se</a>
        </div>
    );
}