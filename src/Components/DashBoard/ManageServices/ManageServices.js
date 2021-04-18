import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../../App';
import Spinner from '../../Shared/Spinner/Spinner';
import ServicesTable from '../SevicesTable/ServicesTable';
import Sidebar from '../Sidebar/Sidebar';
import './ManageServices.css';

const ManageServices = () => {
    const [manageServices, setManageServices] = useState([]);
    const [user] = useContext(UserContext);

    useEffect(() => {
        fetch('https://sheltered-beyond-36382.herokuapp.com/manage')
            .then(res => res.json())
            .then(data => setManageServices(data))
    }, []);

    return (
        <>
            <section className="manage-services">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <Sidebar />
                        </div>
                        <div className="col-md-8 col-12">
                            <div className="d-flex justify-content-between mt-5">
                                <h1 className="header-title">My Chosen Services</h1>
                                {
                                    user && <h3 className="header-title">Welcome admin, {user.name}</h3>
                                }
                            </div>
                            {
                                manageServices.length === 0 &&
                                <Spinner />
                            }
                            <div className="mt-3">
                                <ServicesTable manageServices={manageServices} />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ManageServices;