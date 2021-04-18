import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Spinner from '../../Shared/Spinner/Spinner';
import Sidebar from '../Sidebar/Sidebar';
import './BookingList.css';

const BookingList = () => {

    const [myBookings, setMyBookings] = useState([]);
    const [user] = useContext(UserContext)

    // loading user's orders
    useEffect(() => {
        fetch('https://sheltered-beyond-36382.herokuapp.com/bookingInfo?email=' + user.email)
            .then(res => res.json())
            .then(data => setMyBookings(data))
    }, [user.email])
    return (
        <section id="myServices" className="p-4 my-services">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-12">
                        <Sidebar />
                    </div>
                    <div className="col-md-8 my-services-header col-12">
                        <div className="d-flex justify-content-between mt-5">
                            <h1 className="header-title">My Chosen Services</h1>
                            {
                                user && <h3 className="header-title">Welcome, {user.name}</h3>
                            }
                        </div>
                        {
                            myBookings.length === 0 &&
                            <Spinner />
                        }
                        <div className="row mt-4">
                            {
                                myBookings.map(order =>
                                    <div key={order._id} className="col-md-5 my-3 col-12 order">
                                        <div className="bg-white h-100 rounded p-3">
                                            <img src={order.selectedService.imageURL} alt="distance" />
                                            <div className="d-flex mb-3 justify-content-between pt-3">
                                                <h4 className="text-color text-font">{order.selectedService.serviceTitle}</h4>
                                                <h5 className="text-danger text-font">{order.status}</h5>
                                            </div>
                                            <h5 className="text-color text-font">Ordered By: <b style={{ color: '#CB874F' }}>{order.formData.name}</b></h5>
                                            <p className="text-color text-font">{order.selectedService.serviceDescription}</p>
                                        </div>
                                    </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingList;