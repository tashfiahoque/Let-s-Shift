import { faFacebookF, faGooglePlusG, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';
import FooterCol from './FooterCol';

const Footer = () => {
    const ourAddress = [
        { name: "Dhaka" },
        { name: "Chittagong" },
    ]

    const services = [
        { name: "Domestic Moving" },
        { name: "International Move" },
        { name: "Secured Storage" },
        { name: "Corporate Move" },
        { name: "Truck Rental" },
        { name: "Long Distance" }
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-4 col-6">
                        <FooterCol key={1} menuTitle="Services" menuItems={services} />
                    </div>
                    <div className="col-md-4 col-6">
                        <FooterCol key={2} menuTitle="Our Address" menuItems={ourAddress} />
                    </div>
                    <div className="col-md-4 col-12">
                        <ul className="social-media list-inline text-center">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-3 text-center">
                            <h6>Call now</h6>
                            <button className="btn mt-3">+017000000</button>
                        </div>
                    </div>
                </div>
                <div className="copyRight text-center mt-3">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;