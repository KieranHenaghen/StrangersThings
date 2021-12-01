import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const cohort = '2108-USD-RM-WEB-PT';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${ cohort }`;

import {
    Posts,
    Register,
    PostForm,
    Login
} from './components';

const App = (props) => {
    const [dropdown, setDropdown] = useState(false);
    return (
    <BrowserRouter>
        <div id="navbar">
            <div id="title">
                Stranger's Things
            </div>
            <div className="dropdown-container" onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
                <div id="profile">
                    <Link to="/profile">Profile</Link>
                </div>
                <div id="dropdown">
                    {
                        dropdown ?
                        !localStorage.getItem("account-token") ?
                        <>
                        <div>
                            <Link to="/register">Register</Link>
                        </div>
                        <div>
                            <Link to="/login">Login</Link>
                        </div> </>
                        : <>
                        <div>
                            Messages
                        </div>
                        <div>
                            Logout
                        </div>
                        </>
                        : null
                    }
                </div>
            </div>
        </div>
        <section id="postsection">
            {
                localStorage.getItem("account-token") ? 
                <button onClick={() => { 
                    return (
                        <PostForm />
                    )}}>Create New Post</button>
                : null
            }
            <Route path="/posts">
                <Posts />
            </Route>
            <Route exact path="/">
                <Posts />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route>
                
            </Route>
        </section>
    </BrowserRouter>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);