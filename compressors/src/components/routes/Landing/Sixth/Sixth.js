// src/components/routes/Landing/Sixth/Sixth.js

import React from "react";
import { Link } from 'react-router-dom';
import "./Sixth.css";

const Sixth = () => {
    return(
        <div>
            <section className="sixth-first">
                <div className="sixth-first-left">
                    <div className="sixth-f-l-content">
                        <h4 className="sixth-f-l-heading1">ALWAYS BE THE CHOICE EVERYWHERE</h4>
                        <h2 className="sixth-f-l-heading2">Our aspiration is to be the world's preferred Compressor Manufacturer.</h2>
                        <p  className="sixth-f-l-para">The Vision is the purpose that penetrates the length, width and depth of the organization. 
                            This gives forth the seven core values, each having its own hue and meaning, but together 
                            creating a powerful and vibrant spectrum. These values are our core beliefs that create a 
                            beautiful world withn and outside of SnylloAir. A transparent and stable organization allows 
                            its vision to permeate all levels with the same intensity and clarity, ensuring that every value 
                            is followed and lived everyday by everyone, with awareness and pride.
                        </p>
                        <div className="sixth-f-l-btn">See The Complete Journey</div>
                    </div>
                </div>
                <div className="sixth-first-right">
                    <img 
                        src="/uploads/factory5.jpg"
                        className="factory1"
                        alt="factory1"
                    />

                </div>

            </section>

            {/* ********* */}
            
            
            <section className="sixth-second">

                <div className="sixth-second-left">
                    <img 
                        src="/uploads/factory6.jpg"
                        className="factory2"
                        alt="factory2"
                    />
                    
                </div>

                <div className="sixth-second-right">
                    <div className="sixth-s-l-content">
                        <h4 className="sixth-s-l-heading">THE POWER BEHIND SNYLLOAIR ROTARY SCREW AIR COMPRESSORS</h4>
                        <p className="sixth-s-l-para">SnylloAir Equipments was established in 1960 as an air compressor 
                        and garage equipment manufacturing company. Over the years, the company has exponentially grown 
                        its product portfolio and aligned its offering to changing market requirements. Today, SnylloAir 
                        Equipments Limited is a global air compressor manufacturer with a broad line of innovative and 
                        technologically superior compressed air systems.
                        </p>
                        <div className="sixth-s-l-btn">See The Complete Journey</div>
                    </div>
                </div>

            </section>

            {/* ******** */}

            <section className="sixth-img">
                <img 
                    src="/uploads/sixthh.png" 
                    alt="sixth" 
                    className="sixthh"
                />
            </section>


        </div>
    )
}

export default Sixth;