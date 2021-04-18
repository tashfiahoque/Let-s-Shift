import React, { useEffect, useState } from 'react';
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import './Services.css';
import img1 from '../../../Images/logo.jpg';
import ServiceCard from '../ServiceCard/ServiceCard';
import Spinner from '../../Shared/Spinner/Spinner';


const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};
const items = [
    <div className="item">
        <img className="carouselDetails__img" alt="" src={img1} />
        <h5>hello</h5>
    </div>,
    <div className="item">
        <img className="carouselDetails__img" alt="" src={img1} />
        <h5>hello</h5>
    </div>,
    <div className="item">
        <img className="carouselDetails__imgExt" alt="" src={img1} />
        <h5>hello</h5>
    </div>
];

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://sheltered-beyond-36382.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <section id="services" className="services mt-5">
            <div className="text-center pb-5">
                <h2>Our <b style={{ color: '#105746' }}>Services</b></h2>
            </div>
            <div className="container">
                {!services.length ? <Spinner />
                    : <AliceCarousel
                        autoPlay
                        disableButtonsControls
                        infinite
                        items={services.map((service) => <ServiceCard key={service.title} service={service} />)}
                        responsive={responsive}
                    />
                }
            </div>
        </section>
    );
};

export default Services;
