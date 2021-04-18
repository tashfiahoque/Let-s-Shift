import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faLuggageCart } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { IdContext, UserContext } from '../../../App';
import logo from '../../../Images/logo.jpg';


const Sidebar = () => {

    const [selectedService, setSelectedService] = useContext(IdContext)
    const [user, setUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://sheltered-beyond-36382.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: user.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])

    const handleLogOut = () => {
        setUser({});
    }
    const { _id } = selectedService;
    return (
        <>
            <div className="sidebar">
                <div className="sidebar-title">
                    <h1>Let's Shift&nbsp;&nbsp;<span><img src={logo} alt="Logo" /></span></h1>
                </div>
                <div className="sidebar-nav">
                    <nav className="nav flex-column">
                        {isAdmin ?
                            <div className="admin-bar">
                                <Link className="nav-link" aria-current="page" to="/orderList">
                                    <FontAwesomeIcon icon={faClipboardList} color="#D3A21F" size="1x" />
                            &nbsp;&nbsp;Order list</Link>
                                <Link className="nav-link active" to="/addServices">
                                    <FontAwesomeIcon icon={faPlus} color="#D3A21F" size="1x" />
                            &nbsp;&nbsp;Add Services</Link>
                                <Link className="nav-link" aria-current="page" to="/manageServices">
                                    <FontAwesomeIcon icon={faThLarge} color="#D3A21F" size="1x" />
                            &nbsp;&nbsp;Manage Services</Link>
                                <Link className="nav-link" aria-current="page" to="/makeAdmin">
                                    <FontAwesomeIcon icon={faUserPlus} color="#D3A21F" size="1x" />
                            &nbsp;&nbsp;Make Admin</Link>
                            </div>
                            :
                            <div className="user-bar">
                                <Link className="nav-link active" to={`/bookService/${_id}`}>
                                    <FontAwesomeIcon icon={faLuggageCart} color="#D3A21F" size="1x" />
                            &nbsp;&nbsp;Book</Link>
                                <Link className="nav-link" aria-current="page" to="/bookingList">
                                    <FontAwesomeIcon icon={faClipboardList} color="#D3A21F" size="1x" />
                            &nbsp;&nbsp;Booking List</Link>
                                <Link className="nav-link" aria-current="page" to="/review">
                                    <FontAwesomeIcon icon={faCommentDots} color="#D3A21F" size="1x" />
                            &nbsp;&nbsp;Review</Link>
                            </div>
                        }
                        <Link className="nav-link" to="/">
                            <FontAwesomeIcon icon={faHome} color="#D3A21F" size="1x" />
                            &nbsp;&nbsp;Home
                        </Link>
                        {user &&
                            <li className="nav-item active onClick={signOut}">
                                <Link className="nav-link" to="/" onClick={handleLogOut}>
                                    <FontAwesomeIcon icon={faSignOutAlt} color="#D3A21F" size="1x" />
                                    &nbsp;&nbsp;Log out
                                </Link>
                            </li>}
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Sidebar;