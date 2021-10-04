import React from 'react';
import "./FooterSection.css";

const FooterSection = () => {
    return (
        <div className=" footer-section mt-5">
            <div className="row p-5 m-0">
                <div className="col-md-4">
                    <h1>Master Tech</h1>
                    <p>By connecting students all over the world to the best instructors, we helping individuals reach their goals and pursue their dreams.</p>
                </div>
                <div className="col-md-4">
                    <h2>Popular Courses</h2>
                    <ul>
                        <li><a href="#">UX/UI Design</a></li>
                        <li><a href="#">Web Design</a></li>
                        <li><a href="#">Project Design</a></li>
                        <li><a href="#">Front-end Design</a></li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h1>Latest News</h1>
                    <a href="">Online Learning Steps-up: What the World is Learning</a>
                </div>
            </div>
        </div>
    );
};

export default FooterSection;