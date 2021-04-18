import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Footer from '../../Shared/Footer/Footer';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Process from '../Process/Process';
import Services from '../Services/Services';
import ShowReview from '../ShowReview/ShowReview';
import './Home.css';

const Home = () => {
    const [user] = useContext(UserContext);
    const [checkUser, setCheckUser] = useState(null);
    useEffect(() => {
        fetch(`https://sheltered-beyond-36382.herokuapp.com/checkUser/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setCheckUser(data);
            })
    }, [user.email])
    return (
        <>
            <Header />
            <About />
            <Process />
            {!checkUser && <Services />}
            <ShowReview />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;