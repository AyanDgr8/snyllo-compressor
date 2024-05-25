// src/components/routes/Landing/First/First.js

import React from "react";
import { Link } from 'react-router-dom';
import './First.css';

const First = () =>{
    return(
        <div>
            <section className="first-cont">
                <div  className="first-left">
                    <div className="first-l-content">
                        <h3 className="first-l-heading" >Energy Saving</h3>
                        <h1 className="first-l-subheading" >COMPRESSORS</h1>
                        <p className="first-l-para">SnylloAir has a portfolio of over 400 products and accessories.
                            Over the years, we have built a strong brand through strategic 
                            partnerships with global leaders, product innovation by way of 
                            in-house research and engineering, and a customer-centric approach.
                        </p>
                        <div className="btns">
                            <div className="btns-know">Know More</div>
                            <div className="btns-cont">Contact Us</div>
                        </div>
                    </div>
                </div>
                <div  className="first-right">
                    <img 
                       src="/uploads/all-machines.png"
                       className="all-machines"
                       alt="all-machines"
                    />
                </div>

            </section>

            {/* ********** */}

            <section className="first-cont-second">
                <span className="first-cont-three">
                    <h1><strong>10</strong> yrs+</h1>
                    <h5>of customer centric innovation</h5>
                </span>
                <span className="first-cont-three">
                    <h1><strong>70</strong>k+</h1>
                    <h5>successful installations worldwide</h5>
                </span>
                <span className="first-cont-three">
                    <h1><strong>5</strong>+</h1>
                    <h5>countries and counting</h5>
                </span>

            </section>

        </div>
    );
};

export default First;
