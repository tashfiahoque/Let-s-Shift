import React from 'react';
import './ProcessCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProcessCard = ({ process }) => {
    return (
        <div className="col-md-4 process-card">
            <div className="text-center process-container">
                <FontAwesomeIcon className="process-icon" icon={process.icon}></FontAwesomeIcon>
                <h6>{process.title}</h6>
                <p>{process.description}</p>
            </div>
        </div>
    );
};

export default ProcessCard;