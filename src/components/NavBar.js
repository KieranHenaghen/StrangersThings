import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';


const NavBar = () => {
    const [dropdown, setDropdown] = useState(false);

    return(
    <div id="navbar">
        <Route path="/profile">
            <div id="posts">
                <Link to="/posts">Posts</Link>
            </div>
        </Route>
        <Route path="/me">
            <div id="posts">
                <Link to="/posts">Posts</Link>
            </div>
        </Route>
        <Route path="/register">
            <div id="posts">
                <Link to="/posts">Posts</Link>
            </div>
        </Route>
        <Route path="/login">
            <div id="posts">
                <Link to="/posts">Posts</Link>
            </div>
        </Route>

        <div id="title">
            Stranger's Things
        </div>

        <Route exact path="/">
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
                            <Link to="/me">Messages</Link>
                        </div>
                        <div onClick={() => {
                            localStorage.removeItem("account-token");
                        }}>
                            Logout
                        </div>
                        </>
                        : null
                    }
                </div>
            </div>
        </Route>
        <Route path="/posts">
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
                            <Link to="/me">Messages</Link>
                        </div>
                        <div onClick={() => {
                            localStorage.removeItem("account-token");
                        }}>
                            Logout
                        </div>
                        </>
                        : null
                    }
                </div>
            </div>
        </Route>
        <Route path="/me">
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
                        <div onClick={() => {
                            localStorage.removeItem("account-token");
                        }}>
                            Logout
                        </div>
                        </>
                        : null
                    }
                </div>
            </div>
        </Route>
        <Route path="/register">
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
                            <Link to="/login">Login</Link>
                        </div> </>
                        : <>
                        <div>
                            <Link to="/me">Messages</Link>
                        </div>
                        <div onClick={() => {
                            localStorage.removeItem("account-token");
                        }}>
                            Logout
                        </div>
                        </>
                        : null
                    }
                </div>
            </div>
        </Route>
        {/* <React path="/login">
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
                        </>
                        : <>
                        <div>
                            <Link to="/me">Messages</Link>
                        </div>
                        <div onClick={() => {
                            localStorage.removeItem("account-token");
                        }}>
                            Logout
                        </div>
                        </>
                        : null
                    }
                </div>
            </div>
        </React> */}
    </div>
    )
}

export default NavBar;