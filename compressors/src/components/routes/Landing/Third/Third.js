// src/components/routes/Landing/Third/Third.js


import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Third.css';


const Third = () => {

    const machineImages =[
        "/uploads/machine1.png",
        "/uploads/machine2.png",
        "/uploads/machine3.png",
        "/uploads/machine4.png",
        "/uploads/machine5.png",
        "/uploads/machine6.png",
        "/uploads/machine7.png",

    ];

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 2500,
        slidesToShow: window.innerWidth <= 768 ? 1 : 3, // Show 1 slide on mobile, 3 slides otherwise
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 500,
    };

    return(
        <div className='third-container'>
            <div className='third-c-heading'>SnylloAir Products</div>
            
            <Slider {...sliderSettings} className='machines-slider'>
                {machineImages.map((image, index) => ( 
                <div key={index} className="slide">
                    <img src={image} alt={`Machine Image ${index + 1}`} /> 
                </div>
                ))}
            </Slider>
            {/* <img 
                src="/uploads/machine-bg.png"
                className='machine-bg'
                alt="Machines Background"
            /> */}
        </div>
    )
}

export default Third;