import React from 'react';
import './AboutSection.css';
const AboutSection = () => {
    return (
        <div className="container aboutSection h-full mt-5">
            <div className="row pt-5">
                <div className="col-md-6">
                    <img className="img-fluid" src="https://blog.planbook.com/wp-content/uploads/2019/05/image2-2.jpg" alt="image" />
                </div>
                <div className="col-md-6">
                    <h1>I Help People Who has Lost in the Life Cycle</h1>
                    <p>When you come to coaching or counseling, we work with you, your situation / issue and together we find the best solution for you. All the tools we will use, you will be able to apply later in life, without necessarily turning to the coach every time.</p>
                    <button className="btn btn-primary">Contact Me</button>
                </div>
            </div>

        </div>
    );
};

export default AboutSection;