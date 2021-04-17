import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {


    const { serviceTitle, serviceDescription, price, imageURL, _id } = service;
    return (
        <Link to={`/selectService/${_id}`}><div className="col">
            <div className="card">
                <div className="card-image">
                    <img src={imageURL} className="card-img-top" alt={serviceTitle} />
                </div>
                <div className="card-body text-center">
                    <h5 className="card-title">{serviceTitle}</h5>
                    <h6 className="card-title">{price}</h6>
                    <p className="card-text">{serviceDescription}</p>
                </div>
            </div>
        </div></Link>
    );
};

export default ServiceCard;