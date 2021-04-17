// <a href='https://www.freepik.com/vectors/house'>House vector created by freepik - www.freepik.com</a>
// <a href='https://www.freepik.com/vectors/people'>People vector created by pch.vector - www.freepik.com</a>
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Images/logo.jpg';
import "./Navbar.css";


const Navbar = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    // const handleLogOut = () => {
    // setLoggedInUser({});
    // }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" id="nav">
                <div className="container">
                    <a className="navbar-brand logo" href="/"><img src={logo} alt="Logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation" onClick={handleNavCollapse}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse menu`} id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 links">
                            <li className="nav-item">
                                <Link className="nav-link" to="/home" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/deals">Reviews</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact Us</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin">Admin</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            {/* {loggedInUser.name && <h5>{loggedInUser.name}&nbsp;&nbsp;</h5>}
                                {loggedInUser.name || loggedInUser.email
                                    ? <li className="nav-item active onClick={signOut}">
                                        <a className="nav-link" href="/" onClick={handleLogOut}>Log out</a>
                                    </li>
                                    : <li className="nav-item active">
                                        <a className="nav-link" href="/login">Login</a>
                                    </li>} */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;