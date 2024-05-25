// src/components/routes/Landing/Contact/Contact.js

import React from "react";
import './Contact.css';

const Contact = () =>{
    return(
        <div>
            <div className="contact-container">
                <section className="contact-left">
                    <h1 className="contact-heading">Get in <strong className="contact-heading-color">touch </strong></h1>
                    <h5 className="contact-subheading">Find out what makes SnylloAir a leading industrial compressor
                        company by reaching out to us today.
                    </h5>
                    <form className="cont-form">
                        <input
                            type="text"
                            placeholder="Name*"
                            name="name"
                            className="name-bookForm in-bts"
                            required
                        />
                        <input
                            type="tel"
                            placeholder="Contact Number*"
                            name="phone"
                            className="telephone-bookForm in-bts"
                            required
                        />
                        <input
                            type="tel"
                            placeholder="E-mail*"
                            name="phone"
                            className="mail-bookForm in-bts"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Occupation*"
                            name="phone"
                            className="occupation-bookForm in-bts"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Country*"
                            name="phone"
                            className="country-bookForm in-bts"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Postal Code*"
                            name="postal"
                            className="postal-bookForm in-bts"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Your Query "
                            name="message"
                            className="message-bookForm in-bts"
                        />
                        
                        <button className="bookFormbutton" type="submit">
                        Submit
                        </button>

                    </form>
                </section>
                
                <section className="contact-right">
                    <img 
                        src="/uploads/contact-machine.png"
                        className="contact-image"
                        alt="contact-image"
                    />

                </section>

            </div>
        </div>
    )
}

export default Contact;