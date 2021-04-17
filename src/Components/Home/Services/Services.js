import React, { useEffect, useState } from 'react';
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import './Services.css';
import img1 from '../../../Images/logo.jpg';
import ServiceCard from '../ServiceCard/ServiceCard';


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
        fetch('http://localhost:4000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <section id="services" className="services mt-5">
            <div className="container">
                <AliceCarousel
                    autoPlay
                    disableButtonsControls
                    infinite
                    items={services.map((service) => <ServiceCard key={service.title} service={service} />)}
                    responsive={responsive}
                />
                {/* <div className="row row-cols-1 row-cols-md-3 g-4">
                    {services.map((service) => <ServiceCard key={service._id} service={service} />)}
                </div> */}

            </div>
        </section>
    );
};

export default Services;
