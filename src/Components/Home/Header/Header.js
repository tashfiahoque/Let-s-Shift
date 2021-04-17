import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import banner from '../../../Images/4353765.jpg';
import './Header.css';

const Header = () => {
    return (
        <header className="pt-1">
            <Navbar />
            <div className="container mt-4">
                <div className="row align-items-center">
                    <div className="col-md-5 mb-5 mb-md-0">
                        <h1 className="banner-title"><b>We Safely Move Your Valuable Products</b></h1>
                        <p className="my-4 banner-p">Towns Best Relocation and Moving Service Provider</p>
                        <a href="#services" className="btn btn-dark px-5">Hire us</a>
                    </div>
                    <div className="col-md-7">
                        <img src={banner} alt="" className="w-100 banner-img" />
                    </div>
                </div>
            </div>
        </header>

    );
};

export default Header;