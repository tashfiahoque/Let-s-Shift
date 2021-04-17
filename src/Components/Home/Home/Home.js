import React from 'react';
import About from '../About/About';
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
        </>
    );
};

export default Home;