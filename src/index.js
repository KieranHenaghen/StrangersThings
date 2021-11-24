import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const cohort = '2108-USD-RM-WEB-PT';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${ cohort }`;

import {
    Posts,
    Register
} from './components';

const App = (props) => {
    <BrowserRouter>
        <div id="navbar">
            <div id="title">
                Stranger's Things
            </div>
            <div id="profile">
                Profile
            </div>
        </div>
        <section id="postsection">
        <Route path="/posts">
            <Posts />
        </Route>
        <Route exact path="/">
            <Posts />
        </Route>
        </section>
    </BrowserRouter>
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);