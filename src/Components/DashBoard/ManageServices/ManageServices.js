import React, { useState } from 'react';
import { useEffect } from 'react';
import ServicesTable from '../SevicesTable/ServicesTable';
import Sidebar from '../Sidebar/Sidebar';
import './ManageServices.css';

const ManageServices = () => {
    const [manageServices, setManageServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/manage')
            .then(res => res.json())
            .then(data => setManageServices(data))
    }, [])
    return (
        <>
            <div className="manage-services">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col">
                            <Sidebar />
                        </div>
                        <div className="col-md-8 col">
                            <div className="d-flex justify-content-between addservice-header mt-5">
                                <h1>Add Service</h1>
                                <h3>Flex item 2</h3>
                            </div>
                            <div>
                                <ServicesTable manageServices={manageServices} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ManageServices;