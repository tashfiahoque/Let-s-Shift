import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './OrderList.css';

const OrderList = () => {

    const [allOrders, setAllOrders] = useState([]);
    const statuses = ['Pending', 'Processing', 'Done'];

    // loading all orders
    useEffect(() => {
        fetch('http://localhost:4000/allBookings')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])

    // handling status change
    function statusChange(id, e) {
        const modifiedOrder = { status: e.target.value };
        document.getElementById('update').innerText = 'Updating Changes';

        // updating status
        fetch(`http://localhost:4000/edit/${id}`, {
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
        <section id="allOrder" className="p-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Sidebar />
                    </div>
                    <div className="col-md-8">
                        <h3>All Orders From Customers</h3>
                        <h5 className="text-center text-success" id="update">.</h5>
                        {
                            allOrders.length === 0 &&
                            <h4 className="my-4 text-center text-danger">Loading Orders....</h4>
                        }
                        <table className="table bg-white mt-4 text-center rounded table-borderless">
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
                                                <select className="form-control" onChange={(e) => statusChange(order._id, e)} name="status">
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