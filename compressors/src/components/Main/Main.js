// src/components/Main/Main.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../routes/Landing/Home';
import Products from '../routes/Products/Products';
import './Main.css';

export default function Main(){
    return(
        <>
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                </Routes>
            </div>
        </Router>
        </>
    );
}