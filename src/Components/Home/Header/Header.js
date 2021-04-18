import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import banner from '../../../Images/4353765.jpg';
import './Header.css';
import { UserContext } from '../../../App';


const Header = () => {
    const [checkAdmin, setCheckAdmin] = useState(null);
    const [user] = useContext(UserContext);
    useEffect(() => {
        fetch(`https://sheltered-beyond-36382.herokuapp.com/checkAdmin/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setCheckAdmin(data);
            })
    }, [user.email])
    return (
        <header className="pt-1">
            <Navbar />
            <div className="container mt-3">
                <div className="row align-items-center">
                    <div className="col-md-5 mb-5 mb-md-0">
                        <h1 className="banner-title">We Safely <span style={{ color: "#D3A21F" }}>Move Your </span>Valuable Products</h1>
                        <p className="my-4 banner-p"><span style={{ color: "#D3A21F" }}>Towns Best </span>Relocation and Moving Service Provider</p>
                        {checkAdmin ? "" : <a href="#services" className="btn all-btn px-5">Hire us</a>}
                    </div>
                    <div className="col-md-7 img-hover">
                        <img src={banner} alt="" className="w-100 banner-img" />
                    </div>
                </div>
            </div>

        </header>

    );
};

export default Header;