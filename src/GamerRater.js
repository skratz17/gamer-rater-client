import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { ApplicationViews } from './ApplicationViews';
import { NavBar } from './nav/NavBar';
import { Login } from './auth/Login';
import { Register } from './auth/Register';
import './GamerRater.css';

export const GamerRater = () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("gamer_rater_token")) {
                return <>
                    <NavBar />
                    <Route render={props => <ApplicationViews {...props} />} />
                </>
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/logout" render={() => {
          localStorage.removeItem('gamer_rater_token');
          return <Redirect to="/" />;
        }} />
        <Route path="/login" render={Login} />
        <Route path="/register" render={Register} />
    </>
)
