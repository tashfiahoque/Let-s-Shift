import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const [info, setInfo] = useState({});

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleSubmit = (e) => {
        e.preventDefault();


        fetch('http://localhost:4000/makeAdmin', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(info)
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    document.getElementById('newAdminForm').innerHTML = '<h3 class="text-center text-success mt-5"><b>New Admin Added Successfully</b></h3>';
                }
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="make-admin">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col">
                        <Sidebar />
                    </div>
                    <div className="col-md-8 col p-4 pr-5">
                        <div className="d-flex justify-content-between addservice-header mt-5">
                            <h1>Add Service</h1>
                            <h3>Flex item 2</h3>
                        </div>
                        <div>
                            <form id="newAdminForm" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">New Admin Name</label>
                                    <input onBlur={handleBlur} type="text" name="name" placeholder="Admin Name" className="form-control my-3" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input onBlur={handleBlur} type="email" name="email" placeholder="Admin Email" className="form-control my-3" required />
                                </div>
                                <button className="btn btn-dark d-block mt-4 px-4">Make Admin</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;