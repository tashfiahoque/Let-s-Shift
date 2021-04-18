import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact my-5 py-5">
            <div className="container">
                <div className="section-header text-center">
                    <h1 className="pt-2">Always <b>Connect With Us</b></h1>
                </div>
                <div className="col-md-9 mx-auto pt-2">
                    <form action="">
                        <input type="email" name="email" placeholder="Your Email" className="form-control form-control-lg my-3" />
                        <input type="text" name="name" placeholder="Your Name / Company's Name" className="form-control form-control-lg my-3" />
                        <textarea name="message" placeholder="Your Message" className="form-control form-control-lg my-3" cols="30" rows="10"></textarea>
                        <button className="btn btn-lg all-btn px-5">Send</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;