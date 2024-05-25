// src/components/routes/Landing/Seventh/Seventh.js

import React from "react";
import './Seventh.css';

const Seventh = () =>{
    return(
        <div>

            <section className="seventh-container">
                <div className="seventh-first-left">
                    <div className="seventh-f-l-content">
                        <h4 className="seventh-f-l-heading1">LOW COST OF OWNERSHIP THROUGHOUT LIFE CYCLE </h4>
                        <h2 className="seventh-f-l-heading2">SNYP series compressors provide low capital cost and low operating cost</h2>
                        <p  className="seventh-f-l-para">
                            Compressed air is often referred to as the "fourth utility" and is critical to most manufacturing operations. 
                            Facility performance depends upon compressor reliability and efficiency.<br></br>
                            Power consumption is a significant cost throughout the life cycle of a compressor. 
                            Therefore, it is important to consider the life cycle cost of a compressed air system when evaluating productivity 
                            improvements. SNYP series advanced energy-saving features reduce operation costs significantly.
                        </p>
                    </div>
                </div>
                <div className="seventh-first-right">
                    <img 
                        src="/uploads/factory7.jpg"
                        className="factory3"
                        alt="factory3"
                    />
                </div>


            </section>


            {/* ************8 */}
            <section className="seventh-cont">
            
                <img 
                    src="/uploads/children.png"
                    className='children'
                    alt="children Background"
                />
                <div className="seventh-content">
                    <div className="seventh-heading">SnylloAir CSR</div>
                    <p className="seventh-para">At SnylloAir, we aim to give back to the community through campaigns and programs
                        designed to empower, upfit and better society. SnylloAir has unique several projects in
                        the field of education, vocational training, and community advancement.
                    </p>
                    <div className="seventh-btn">Read More</div>
                </div>

            </section>

        </div>
    )
}

export default Seventh;