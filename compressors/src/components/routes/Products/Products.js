// src/components/routes/Products/Products.js

import React from "react";
import { Link } from 'react-router-dom';
import Header from '../Landing/Header/Header.js';
import Footer from '../Landing/Footer/Footer.js';
import './Products.css';

const Products = () =>{
    return(
        <div>
            <Header />
            <section className="products-main-cont">
            
                <img 
                    src="/uploads/products-main.png"
                    className='products-main'
                    alt="Products Background"
                />
                <div className="products-content">
                    <div className="products-heading">SnylloAir COMPRESSORS</div>
                    <p className="products-para">Where Power Meets Efficiency! Say goodbye to energy wastage and hello to unparalleled performance. Our compressors redefine efficiency, seamlessly blending cutting-edge technology with eco-conscious design. Engineered to minimize energy consumption without compromising power, SnylloAir Compressors are the epitome of sustainability in action.</p>
                </div>

            </section>

            {/* ******* */}

            <section className="products-first">
                <div className="products-first-left">
                    <div className="products-f-l-content">
                        <h2 className="products-f-l-heading">Oil-Free Compressors</h2>
                        <p  className="products-f-l-para">
                            Oil-free compressors are specifically engineered to eliminate 
                            the risk of oil contamination in the compressed air. They achieve 
                            this by using alternative sealing methods and lubrication systems 
                            that do not introduce oil into the compression chamber. This ensures 
                            that the compressed air produced is free from oil contaminants, making 
                            it suitable for applications where clean air is critical.
                        </p>
                        <div className="products-f-l-btn">Know More</div>
                    </div>
                </div>
                <div className="products-first-right">
                    <img 
                        src="/uploads/oil-free.png"
                        className="oil-free"
                        alt="oil-free"
                    />

                </div>

            </section>

            {/* ********* */}
            
            
            <section className="products-second">

                <div className="products-second-left">
                    <img 
                        src="/uploads/oil-lubri.png"
                        className="oil-lubri"
                        alt="oil-lubri"
                    />
                    
                </div>

                <div className="products-second-right">
                    <div className="products-s-l-content">
                        <h2 className="products-s-l-heading">Oil-lubricated compressors</h2>
                        <p className="products-s-l-para">
                            Oil-lubricated compressors utilize oil for lubricating the moving 
                            parts and sealing the compression chamber to reduce friction and 
                            prevent gas leakage during the compression process. The oil helps 
                            in cooling and sealing the internal components, ensuring smooth 
                            operation and longevity of the compressor.
                        </p>
                        <div className="products-s-l-btn">Know More</div>
                    </div>
                </div>

            </section>

            {/* *************** */}

            <section className="products-third">
                <div className="products-third-left">
                    <div className="products-t-l-content">
                        <h2 className="products-t-l-heading">Air Compressors</h2>
                        <p  className="products-t-l-para">
                            Air compressors work by drawing in atmospheric air and 
                            mechanically reducing its volume, thereby increasing its 
                            pressure. The compressed air is stored in a tank or released 
                            directly for use in various applications. These machines come 
                            in different sizes and configurations to suit diverse needs.
                        </p>
                        <div className="products-t-l-btn">Know More</div>
                    </div>
                </div>
                <div className="products-third-right">
                    <img 
                        src="/uploads/air-compp.png"
                        className="air-compp"
                        alt="air-compp"
                    />

                </div>

            </section>

            {/* ********* */}
            
            
            <section className="products-forth">

                <div className="products-forth-left">
                    <img 
                        src="/uploads/portable.png"
                        className="portable"
                        alt="portable"
                    />
                    
                </div>

                <div className="products-forth-right">
                    <div className="products-fo-l-content">
                        <h2 className="products-fo-l-heading">Portable compressors</h2>
                        <p className="products-fo-l-para">
                            Portable compressors are gas compressors that are small and 
                            lightweight enough to be easily moved from one location to 
                            another. They are typically mounted on wheels or carried by 
                            handles, allowing for convenient transportation to various 
                            job sites or work areas where compressed air is needed.
                        </p>
                        <div className="products-fo-l-btn">Know More</div>
                    </div>
                </div>

            </section>

            {/* ********* */}

            <section className="products-fifth">
                <div className="products-fifth-left">
                    <div className="products-fi-l-content">
                        <h2 className="products-fi-l-heading">Rotary screw compressors</h2>
                        <p  className="products-fi-l-para">
                            Rotary screw compressors utilize a pair of helical rotors or screws 
                            to compress gas. As the rotors turn, air is drawn into the compressor 
                            and trapped between the screw threads. The compression occurs as the air 
                            moves along the length of the rotors, decreasing in volume and increasing 
                            in pressure until it exits the compressor.
                        </p>
                        <div className="products-fi-l-btn">Know More</div>
                    </div>
                </div>
                <div className="products-fifth-right">
                    <img 
                        src="/uploads/rotary.png"
                        className="rotary"
                        alt="rotary"
                    />

                </div>

            </section>

            {/* ********* */}
            
            
            <section className="products-sixth">

                <div className="products-sixth-left">
                    <img 
                        src="/uploads/gas.png"
                        className="gas"
                        alt="gas"
                    />
                    
                </div>

                <div className="products-sixth-right">
                    <div className="products-si-l-content">
                        <h2 className="products-si-l-heading">Gas compressors</h2>
                        <p className="products-si-l-para">
                            Gas compressors work by reducing the volume of a gas, 
                            thereby increasing its pressure. They typically consist 
                            of components such as cylinders, pistons, valves, and 
                            sometimes rotors or impellers. Gas enters the compressor 
                            at a certain pressure and volume, and through mechanical 
                            action, the volume decreases, causing an increase in pressure. 
                            This compressed gas can then be stored, transported, or used for 
                            various applications.
                        </p>
                        <div className="products-si-l-btn">Know More</div>
                    </div>
                </div>

            </section>

            {/* ********* */}

            

            <section className="products-seventh">
                <div className="products-seventh-left">
                    <div className="products-se-l-content">
                        <h2 className="products-se-l-heading">Diesel-driven compressors</h2>
                        <p  className="products-se-l-para">
                            Diesel-driven compressors are gas compressors powered by diesel 
                            engines rather than electric motors. They are designed for applications 
                            where a reliable source of compressed air is needed in remote locations, 
                            construction sites, or areas without access to electricity.
                        </p>
                        <div className="products-se-l-btn">Know More</div>
                    </div>
                </div>
                <div className="products-seventh-right">
                    <img 
                        src="/uploads/diesel.png"
                        className="diesel"
                        alt="diesel"
                    />

                </div>

            </section>

            {/* ********* */}
            
            <Footer />
        </div>
    );
};

export default Products;