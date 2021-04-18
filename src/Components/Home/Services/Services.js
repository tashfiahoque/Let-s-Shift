import React, { useContext, useEffect, useState } from 'react';
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import './Services.css';
import ServiceCard from '../ServiceCard/ServiceCard';
import Spinner from '../../Shared/Spinner/Spinner';
import { UserContext } from '../../../App';
import { Link } from 'react-router-dom';


const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const Services = () => {
    const [services, setServices] = useState([]);
    const [checkUser, setCheckUser] = useState(null);
    const [user] = useContext(UserContext);

    useEffect(() => {
        fetch('https://sheltered-beyond-36382.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    useEffect(() => {
        fetch(`https://sheltered-beyond-36382.herokuapp.com/checkUser/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setCheckUser(data);
            })
    }, [user.email])

    return (
        <section id="services" className="services mt-5">
            <div className="text-center pb-5">
                <h2>Our <b style={{ color: '#105746' }}>Services</b></h2>
            </div>
            {user.signed && !checkUser ? <div className="container">
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
                :
                <Link to='/login'><h1 className="container text-center text-danger">To see this section you must login.</h1></Link>
            }


        </section>
    );
};

export default Services;
