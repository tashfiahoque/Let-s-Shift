import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import './BookingList.css';

const BookingList = () => {

    const [myBookings, setMyBookings] = useState([]);
    const [user, setUser] = useContext(UserContext)

    // loading user's orders
    useEffect(() => {
        fetch('http://localhost:4000/bookingInfo?email=' + user.email)
            .then(res => res.json())
            .then(data => setMyBookings(data))
    }, [user.email])
    return (
        <section id="myServices" className="p-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Sidebar />
                    </div>
                    <div className="col-md-8">
                        <div className="d-flex justify-content-between addservice-header mt-5">
                            <h1>My Chosen Services</h1>
                            {
                                user && <h3>Welcome {user.name}</h3>
                            }

                        </div>

                        {
                            myBookings.length === 0 &&
                            <h4 className="my-4 text-center text-danger">Loading Your Orders....</h4>
                        }

                        <div className="row mt-4">
                            {
                                myBookings.map(order =>
                                    <div key={order._id} className="col-md-5 my-3">
                                        <div className="bg-white h-100 rounded p-3">
                                            <img src={order.selectedService.imageURL} alt="" />
                                            <div className="d-flex mb-3 justify-content-between">
                                                <h4 className="text-danger">{order.selectedService.serviceTitle}</h4>
                                                <h5 className="text-primary">{order.status}</h5>
                                            </div>
                                            <h5>Ordered By: <b>{order.formData.name}</b></h5>
                                            <p>{order.selectedService.serviceDescription}</p>
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