import { BrowserRouter, Redirect, Switch, Route, StaticRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import User from './User';
import Logout from "./Logout";

export default function RouterMain() {
    return (

        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/user" component={User} />
                    <Route path="/Logout" component={Logout} />
                </Switch>
            </div>
        </BrowserRouter>



    )
}