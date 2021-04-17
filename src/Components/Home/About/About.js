import React from 'react';
import './About.css';
import movers from '../../../Images/4421778.jpg';

const About = () => {
    return (
        <section id="about" className="about-container mt-5">
            <div className="container">
                <div className="row">
                    <h3 className="about-title">About Us</h3>
                    <h4 className="text-uppercase about-description">Who we are</h4>
                </div>
                <div className="row">
                    <div className="col-md-6 mt-5 text-left about-p">
                        <p>We provide guaranteed and reliable relocation services at affordable price from last thirty years.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim mauris in lobortis pharetra.
                            Nulla diam neque, scelerisque vel semper iaculis, sollicitudin et augue.</p>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim mauris in lobortis pharetque vel semper iaculis, sollicitudin et augue.</p>
                        <p>Top quality professional crews and professional team members ensure safely movement of your valuable products. So, It's the perfect time to say goodbye to the costly moving service and truck rental.</p>
                    </div>
                    <div className="col-md-6">
                        <img src={movers} alt="movers" className="w-100" />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default About;