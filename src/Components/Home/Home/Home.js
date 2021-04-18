import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Process from '../Process/Process';
import Services from '../Services/Services';
import ShowReview from '../ShowReview/ShowReview';
import './Home.css';

const Home = () => {
    return (
        <>
            <Header />
            <About />
            <Process />
            <Services />
            <ShowReview />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;