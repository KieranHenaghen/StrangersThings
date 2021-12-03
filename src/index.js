import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const cohort = '2108-USD-RM-WEB-PT';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${ cohort }`;

import {
    Posts,
    Register,
    PostForm,
    Login,
    Messages,
    NavBar
} from './components';

const App = (props) => {
    return (
    <BrowserRouter>
        <NavBar />
        
        <section id="postsection">
            
            <Route path="/posts">
            {
                localStorage.getItem("account-token") ? 
                <button onClick={() => { 
                    return (
                        <PostForm />
                    )}}>Create New Post</button>
                : null
            }
                <Posts />
            </Route>
            <Route exact path="/">
            {
                localStorage.getItem("account-token") ? 
                <button onClick={() => { 
                    return (
                        <PostForm />
                    )}}>Create New Post</button>
                : null
            }
                <Posts />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route exact path="/profile">
                {
                    localStorage.getItem("account-token") ?
                    <>
                    <button onClick={() => {
                        localStorage.removeItem("account-token");
                        
                        }}>Logout</button>
                    <section>
                        <Messages />
                    </section></>
                    : <>
                    <section>
                        <Register />
                    </section>
                    <br></br>
                    <div className="seperator">OR</div>
                    <br></br>
                    <section>
                        <Login />
                    </section>
                    </>
                }
            </Route>
        </section>
    </BrowserRouter>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);