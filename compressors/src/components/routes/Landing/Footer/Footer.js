// src/components/routes/Landing/Footer/Footer.js

import React from "react";
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return(
        <div>
        <footer class="text-center text-lg-start bg-body-tertiary text-muted">
            
            <section class="footer-container">
                <div class="container text-center text-md-start mt-5">
                
                    <div class="row mt-3">
                        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 first-footer-cont">
                        
                            <img 
                                src="/uploads/snyllo-footer.png"
                                alt="snyllo-footer"
                                className="snyllo-footer"
                            />

                            <div className="footer-icons-social">
                                <a href="https://www.facebook.com/snylloestetica" className="me-4 text-reset">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FSnylloestetica" className="me-4 text-reset">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="https://www.instagram.com/snylloestetica/?igsh=bmRyMTF3anM0OHpn" className="me-4 text-reset">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://www.linkedin.com/company/snyllo-%C3%A9stetica/mycompany/" className="me-4 text-reset">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="https://www.youtube.com/channel/UC8DT1-rd61x1HkEkR2AVVzQ" className="me-4 text-reset">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>

                        </div>
                        
                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 footer-second-third">
                        
                        <h6 class="text-uppercase fw-bold mb-4 footer-topics">
                            Products
                        </h6>
                        <p>
                            <Link to="/products/air"  onClick={scrollToTop} className="dropdown-items" >Air Compressors</Link>
                        </p>
                        <p>
                            <Link to="/products/gas" onClick={scrollToTop} className="dropdown-items" >Gas Compressors</Link>
                        </p>
                        <p>
                            <Link to="/products/oil-free"  onClick={scrollToTop} class="dropdown-items">Oil-Free Compressors</Link>
                        </p>
                        <p>
                            <Link to="/products/oil-lubricated" onClick={scrollToTop} class="dropdown-items">Oil-Lubricated Compressors</Link>
                        </p>
                        <p>
                            <Link to="/products/rotary"  onClick={scrollToTop} class="dropdown-items">Rotary Screw Compressors</Link>
                        </p>
                        <p>
                            <Link to="/products/portable"  onClick={scrollToTop} class="dropdown-items">Portable Compressors</Link>
                        </p>
                        <p>
                            <Link to="/products/diesel"  onClick={scrollToTop} class="dropdown-items">Diesel-Driven Compressors</Link>
                        </p>
                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 footer-second-third">
                        
                        <h6 class="text-uppercase fw-bold mb-4 footer-topics">
                            Other
                        </h6>
                        <p>
                            <a href="#!" class="dropdown-items">Technology</a>
                        </p>
                        <p>
                            <a href="#!" class="dropdown-items">Industry</a>
                        </p>
                        <p>
                            <a href="#!" class="dropdown-items">Services</a>
                        </p>
                        <p>
                            <a href="#!" class="dropdown-items">About Us</a>
                        </p>
                        </div>
                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        
                        <h6 class="text-uppercase fw-bold mb-4  footer-topics">Contact</h6>
                        <p className="everything"><i class="fas fa-home me-3"></i> Corporate Office: Plot No. 73, Block B, PH-1, Mayapuri Industrial Area, New Delhi- 110064</p>
                        <p className="everything"><i class="fas fa-home me-3"></i> Head Office: 3rd Floor, BPTP Centra One, Golf Course Ext. Road, Sec 61, Gurugram, Haryana- 110064</p>
                        <p  className="everything">
                            <i class="fas fa-envelope me-3"></i>
                            <a href='mailto:hello@snylloestetica.com' className="email-phone">hello@snylloestetica.com</a>
                        </p>
                        <p  className="everything">
                            <i class="fas fa-phone me-3"></i>
                            <a href='tel:+91 98009-96002' className="email-phone"> + 91 98009-96002</a>
                        </p>
                        <p className="everything">
                            <i class="fas fa-phone me-3"></i>
                            <a href="tel:+91 91008-96008" className="email-phone"> + 91 91008-96008</a>
                        </p>
                        </div>
                    </div>
                </div>
            </section>

            
            <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                Copyright © 2024. All Rights Reserved by  
                <a className="text-reset fw-bold" href="https://www.snylloair.com/index.html"> Snyllo Innovations Pvt. Ltd.</a>
            </div>

        </footer>

            
        </div>

    );
};

export default Footer;