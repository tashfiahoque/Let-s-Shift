import React, { useContext } from 'react';
import './Dashboard.css';
import Sidebar from '../Sidebar/Sidebar';
import Dashboard1 from './Dashboard1';
import { UserContext } from '../../../App';



const Dashboard = () => {
    const [user] = useContext(UserContext)

    return (
        <main className="dashboard">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Sidebar />
                    </div>
                    <div className="col-md-8">
                        <div className="d-flex justify-content-between addservice-header mt-5">
                            <h1 className="header-title"> Add Service</h1>
                            {
                                user && <h3 className="header-title">Welcome admin, {user.name}</h3>
                            }

                        </div>
                        <div className="addservice-form">
                            <Dashboard1 />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Dashboard;