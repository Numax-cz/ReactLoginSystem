import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import App from './App';
import User from './User';
import Logout from "./Logout";
import Login from "./Login";
export default function RouterMain() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/user" component={User} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/login" component={Login} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}