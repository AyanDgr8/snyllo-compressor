// src/components/routes/Landing/Header/Header.js

import React, { useState, useRef, useEffect }  from "react";
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownOpen(false);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img
                            src="/uploads/compressor-logo.png"
                            alt="compressor-logo"
                            className="compressor-logo"
                            onClick={scrollToTop}
                        />
                    </Link>
                    <div
                        className="navbar-toggler"
                        type="button"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </div>
                    <div 
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                        ref={dropdownRef}
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/technology" className="nav-link" onClick={scrollToTop}>TECHNOLOGY</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to="/products" 
                                    className="nav-link dropdown-toggle prod-bt" 
                                    id="navbarDropdown" 
                                    role="button"  
                                    onClick={scrollToTop}
                                    onMouseEnter={handleMouseEnter}
                                >
                                    PRODUCTS
                                </Link>
                            <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                                <li><Link to="/products/air" className="dropdown-item" onClick={scrollToTop}>Air Compressors</Link></li>
                                <li><Link to="/products/gas" className="dropdown-item" onClick={scrollToTop}>Gas Compressors</Link></li>
                                <li><Link to="/products/rotary" className="dropdown-item" onClick={scrollToTop}>Rotary Screw Compressors</Link></li>
                                <li><Link to="/products/oil-free" className="dropdown-item" onClick={scrollToTop}>Oil-Free Compressors</Link></li>
                                <li><Link to="/products/oil-lubricated" className="dropdown-item" onClick={scrollToTop}>Oil-Lubricated Compressors</Link></li>
                                <li><Link to="/products/portable" className="dropdown-item" onClick={scrollToTop}>Portable Compressors</Link></li>
                                <li><Link to="/products/diesel" className="dropdown-item" onClick={scrollToTop}>Diesel-Driven Compressors</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="/industry" className="nav-link" onClick={scrollToTop}>INDUSTRY</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-link" onClick={scrollToTop}>SERVICES</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about-us" className="nav-link" onClick={scrollToTop}>ABOUT US</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link" onClick={scrollToTop}>CONTACT</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    );
};

export default Header;