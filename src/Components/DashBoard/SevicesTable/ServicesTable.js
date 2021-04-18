import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import './ServicesTable.css';
import { useHistory } from 'react-router';

const ServicesTable = ({ manageServices }) => {
    const history = useHistory();

    const deleteItem = id => {
        fetch(`https://sheltered-beyond-36382.herokuapp.com/deleteService/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Deleted Successfully')
                    history.push('/addServices')
                }
            })
    }
    return (
        <>
            <div className="manage-services-title p-3">
                <h1>Manage Services</h1>
            </div>
            <table className="table bg-white mt-4 text-center rounded table-borderless manage-services-table">
                <thead className="list-header">
                    <tr>
                        <th scope="col">Service Title</th>
                        <th scope="col">Service Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        manageServices.map(item => <tr key={item._id} className="font-change">
                            <td>{item.serviceTitle}</td>
                            <td>{item.serviceDescription}</td>
                            <td>{item.price}</td>
                            <td>
                                <button onClick={() => deleteItem(item._id)} className="delete-button">
                                    <FontAwesomeIcon icon={faTrashAlt} color="red" size="2x" /></button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </>
    );
};

export default ServicesTable;