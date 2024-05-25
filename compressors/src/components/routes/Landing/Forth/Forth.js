// src/components/routes/Landing/Forth/Forth.js

import React from "react";
import './Forth.css';

const Forth = () =>{
    return(
        <div>
            <section className='four-cards-second'>
                <div className="row d-flex justify-content-between">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                        <div className="card border border-0 cardd">
                            <img 
                            src="./uploads/service.png" 
                            className=" position-relative top-0 start-50 translate-middle img-icon" 
                            alt="service-icon"
                            />
                            <div className="card-body ">
                                <h5 className="card-title">Service</h5>
                                <p className="card-text">24hrs online multilingual servies, providing 200% air solutions. Original ELANG spare parts in stock. Professional overseas after-sales technical service team.<br></br><br></br><br></br> <br></br></p>
                                
                            </div>
                        </div>  

                        <div className="card border border-0 cardd" >
                            <img 
                            src="./uploads/prodtest.png" 
                            className="position-relative top-0 start-50 translate-middle img-icon" 
                            alt="prodtest-icon"
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">Production & Testing</h5>
                                <p className="card-text">Standardized production and 5 times inspections. All compressors will pass the 50-60°C high temperature running test, 1.2 times over-speed & over-pressure test, secondary oil return test, etc.<br></br><br></br><br></br></p>
                                
                            </div>
                        </div> 

                        <div className="card border border-0 cardd" >
                            <img 
                            src="./uploads/oemodm.png" 
                            className="position-relative top-0 start-50 translate-middle img-icon oemodm-icon" 
                            alt="oemodm-icon"
                            />
                            <div className="card-body">
                                <h5 className="card-title">OEM & ODM Support</h5>
                                <p className="card-text">Professional technical and R&D team to provide customers with one-step complete OEM/ODM compressed air system service.<br></br> <br></br><br></br><br></br></p>
                                
                            </div>
                        </div> 

                        <div className="card border border-0 cardd" >
                            <img 
                            src="./uploads/training.png" 
                            className="position-relative top-0 start-50 translate-middle img-icon" 
                            alt="training-icon"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Training Support</h5>
                                <p className="card-text">Elang Energy Innovation Academy provides professional technology training and sales support, as well as seminars about the efficient compressed air management.<br></br><br></br><br></br> </p>
                                
                            </div>
                        </div> 
                    </div>
                </div>


            </section>

        </div>
    )
}
          
export default Forth;
