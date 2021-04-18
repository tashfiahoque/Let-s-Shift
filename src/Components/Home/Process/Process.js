import React from 'react';
import './Process.css';
import processData from './fakeData.js';
import ProcessCard from '../ProcessCard/ProcessCard';

const Process = () => {

    return (
        <section id="process" className="mt-5 d-flex justify-content-center">
            <div className="container">
                <div className="row text-center process-header">
                    <h3 className="process-title">Moving Process</h3>
                    <h4 className="text-uppercase process-description">How it works</h4>
                    <div className="row mt-5 process-details">
                        {
                            processData.map(process => <ProcessCard process={process} key={process.title} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;