import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { IdContext, UserContext } from '../../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import Sidebar from '../Sidebar/Sidebar';
import './BookService.css';

const BookService = () => {
    const { id } = useParams();
    const [selectedService, setSelectedService] = useContext(IdContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [user] = useContext(UserContext);
    const [bookingData, setBookingData] = useState(null)
    useEffect(() => {
        fetch(`https://sheltered-beyond-36382.herokuapp.com/select/${id}`)
            .then(res => res.json())
            .then(data => {
                setSelectedService(data);
            })
    }, [])

    const { serviceTitle, price } = selectedService;

    const onSubmit = data => { setBookingData(data) }
    const handlePaymentSuccess = paymentId => {
        const bookDetails = {
            ...user,
            selectedService: selectedService,
            formData: bookingData,
            status: 'Pending',
            paymentId,
            bookTime: new Date()
        };
        fetch('https://sheltered-beyond-36382.herokuapp.com/addBooking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    document.getElementById('book').innerHTML = '<h3 class="text-center text-success mt-5"><b>Sevice Booked Successfully</b></h3>';
                }
            })

    }
    return (
        <div className="service-booking">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-12">
                        <Sidebar />
                    </div>
                    <div className="col-md-8 col-12 book-service-header">
                        <div className="d-flex justify-content-between mt-5">
                            <h1 className="header-title">Service Booking Information</h1>
                            {
                                user && <h3 className="header-title">Welcome {user.name}</h3>
                            }
                        </div>
                        <div className="book-service-details" style={{ display: bookingData ? 'none' : 'block' }}>
                            <form id="book" className="p-5" onSubmit={handleSubmit(onSubmit)}>
                                <div className="col form-group mb-5">
                                    <input type="text" name="name" {...register('name', {
                                        required: "Name is required",
                                        pattern: { value: /[A-Z][a-z]/, message: "First text should be capitalized", },
                                        minLength: { value: 5, message: " should be 5 characters" }
                                    })}
                                        placeholder="Your Name" className="form-control book-form" />
                                    <span style={{ color: "red" }}>{errors.name && errors.name.message}</span>
                                </div>
                                <div className="col form-group mb-5">
                                    <input type="text" name="email" {...register('email', {
                                        required: "Email is required",
                                        pattern: { value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, message: 'Email should be "@" & "." ' }
                                    })}
                                        placeholder="Your Email" className="form-control book-form" />
                                    <span style={{ color: "red" }}>{errors.email && errors.email.message}</span>
                                </div>
                                <div className="col form-group mb-5">
                                    <input {...register('value')} value={serviceTitle} className="form-control book-form" />
                                </div>
                                <div className="col form-group mb-5">
                                    <label>Pay With</label>
                                    <select name="paymentType" {...register('paymentType', { required: "This is required" })} className="form-control book-form">
                                        <option value="credit-card">Credit Card</option>
                                        <option value="paypal">Paypal</option>
                                    </select>
                                    <span style={{ color: "red" }}>{errors.paymentType && errors.paymentType.message}</span>
                                </div>

                                <div className="col form-group text-right">
                                    <h4>Your service will be charged <span style={{ color: "red" }}> {price}</span></h4>
                                    <button type="submit" className="btn all-btn mt-3">Send</button>
                                </div>
                            </form>
                        </div>
                        <div style={{ display: bookingData ? 'block' : 'none' }} className="col-md-6">
                            <h2>Please Pay for me</h2>
                            <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookService;