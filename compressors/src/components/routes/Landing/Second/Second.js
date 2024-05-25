// src/components/routes/Landing/Second/Second.js

import React from "react";
import './Second.css';

const Second = () =>{
    return(
        <div>
            

        <section className='four-cards-sixth'>

            <div className="row d-flex justify-content-center">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                    <div className="card border border-0 carddd">
                        <img 
                        src="./uploads/first-i.png" 
                        className=" position-relative top-0 start-50 translate-middle img-icon iconnn" 
                        alt="first-i"
                        />
                        <div className="card-body">
                            <h5 className="card-title">INNOVATION</h5>
                            <p className="card-text ca-te">Promoting a culture of innovation will ensure that we always retain a leading edge.</p>
                        </div>
                    </div>  

                    <div className="card border border-0 carddd" >
                        <img 
                        src="./uploads/second-i.png" 
                        className="position-relative top-0 start-50 translate-middle img-icon iconnn" 
                        alt="second-i"
                        />
                        <div className="card-body text-center">
                            <h5 className="card-title">SENSITIVIY</h5>
                            <p className="card-text ca-te">We value our relationships with stakeholders, so it's a priority to go that extra mile to cater to their needs intuitively.</p>
                        </div>
                    </div> 

                    <div className="card border border-0 carddd" >
                        <img 
                        src="./uploads/third-i.png" 
                        className="position-relative top-0 start-50 translate-middle img-icon oemodm-icon iconnn" 
                        alt="third-i"
                        />
                        <div className="card-body ">
                            <h5 className="card-title">QUALITY</h5>
                            <p className="card-text ca-te">We deliver uncompromised and top-notch  quality consistently to all those who share vested interests. </p>
                        </div>
                    </div> 

                    <div className="card border border-0 carddd" >
                        <img 
                            src="./uploads/sixth-i.png" 
                            className="position-relative top-0 start-50 translate-middle img-icon iconnn" 
                            alt="sixth-i"
                        />
                        <div className="card-body">
                            <h5 className="card-title">INTEGRITY</h5>
                            <p className="card-text ca-te">Honesty and integrity are the foundation of all undertakings in our relationships with stakeholders.</p>
                        </div>
                    </div> 
                </div>
            </div>

        </section>

        </div>
    )
}

export default Second;