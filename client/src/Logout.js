import React from 'react';
import { useHistory } from 'react-router-dom'


export default function Logout() {
    const history = useHistory();
    sessionStorage.clear()
    history.push("/")
    return (
        <>
        </>
    )
}