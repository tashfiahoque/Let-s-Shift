import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Spinner from '../../Shared/Spinner/Spinner';
import Sidebar from '../Sidebar/Sidebar';
import './OrderList.css';

const OrderList = () => {

    const [allOrders, setAllOrders] = useState([]);
    const statuses = ['Pending', 'On-going', 'Done'];
    const [user] = useContext(UserContext)

    // loading all orders
    useEffect(() => {
        fetch('https://sheltered-beyond-36382.herokuapp.com/allBookings')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])

    // handling status change
    function statusChange(id, e) {
        const modifiedOrder = { status: e.target.value };
        document.getElementById('update').innerText = 'Updating Changes';

        // updating status
        fetch(`https://sheltered-beyond-36382.herokuapp.com/edit/${id}`, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(modifiedOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    document.getElementById('update').innerText = 'Changes Updated Successfully!'
                }
            })
    }

    return (
        <section id="allOrder" className="p-4 all-order">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-12">
                        <Sidebar />
                    </div>
                    <div className="col-md-8 col-12">
                        <div className="d-flex justify-content-between mt-5">
                            <h1 className="header-title">All Orders</h1>
                            {
                                user && <h3 className="header-title">Welcome admin, {user.name}</h3>
                            }
                        </div>
                        {
                            allOrders.length === 0 &&
                            <Spinner />
                        }
                        <table className="table bg-white mt-4 text-center rounded table-borderless order-table">
                            <thead className="bg-light">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Service</th>
                                    <th scope="col">Pay With</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allOrders.map(order =>
                                        <tr key={order._id}>
                                            <td>{order.formData.name}</td>
                                            <td>{order.formData.email}</td>
                                            <td>{order.selectedService.serviceTitle}</td>
                                            <td>{order.formData.paymentType}</td>
                                            <td>
                                                <select className="form-control text-danger" onChange={(e) => statusChange(order._id, e)} name="status">
                                                    {
                                                        statuses.map(option =>
                                                            <option key={option} value={option} selected={option === order.status}>{option}</option>)
                                                    }
                                                </select>
                                            </td>
                                        </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderList;