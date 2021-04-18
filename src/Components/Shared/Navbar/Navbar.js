// <a href='https://www.freepik.com/vectors/house'>House vector created by freepik - www.freepik.com</a>
// <a href='https://www.freepik.com/vectors/people'>People vector created by pch.vector - www.freepik.com</a>
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../Images/logo.jpg';
import "./Navbar.css";


const Navbar = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const [user, setuser] = useContext(UserContext);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    const [checkAdmin, setCheckAdmin] = useState(null)
    const handleLogOut = () => {
        setuser({});
    }
    useEffect(() => {
        fetch(`https://sheltered-beyond-36382.herokuapp.com/checkAdmin/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setCheckAdmin(data);
            })
    }, [user.email])

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" id="nav">
                <div className="container">
                    <a className="navbar-brand logo" href="/"><h1>Let's Shift&nbsp;&nbsp;<span><img src={logo} alt="Logo" /></span></h1></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation" onClick={handleNavCollapse}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse menu`} id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 links">
                            <li className="nav-item mainNav__hover">
                                <Link className="nav-link" to="/home" >Home</Link>
                            </li>
                            {!checkAdmin &&
                                <li className="nav-item  mainNav__hover">
                                    <a className="nav-link" href="#services">Services</a>
                                </li>
                            }
                            <li className="nav-item mainNav__hover">
                                <a className="nav-link" href="#reviews">Reviews</a>
                            </li>
                            <li className="nav-item mainNav__hover">
                                <a className="nav-link" href="#contact">Contact Us</a>
                            </li>
                            {checkAdmin &&
                                <li className="nav-item mainNav__hover">
                                    <Link className="nav-link" to="/addServices">Admin</Link>
                                </li>
                            }
                            {user.name && <h6 style={{ color: '#D3A21F' }}>{user.name}&nbsp;&nbsp;</h6>}
                            {user.name || user.email
                                ? <li className="nav-item active mainNav__hover">
                                    <Link className="nav-link" to="/" onClick={handleLogOut}>Log out</Link>
                                </li>
                                : <li className="nav-item active mainNav__hover">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;