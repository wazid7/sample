import { faChalkboardTeacher, faGraduationCap, faHeadphones, faLayerGroup, faPeopleArrows, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ChooseUs.css';

const element = <FontAwesomeIcon icon={faGraduationCap} />
const element2 = <FontAwesomeIcon icon={faLayerGroup} />
const element3 = <FontAwesomeIcon icon={faChalkboardTeacher} />
const element4 = <FontAwesomeIcon icon={faHeadphones} />
const element5 = <FontAwesomeIcon icon={faPlay} />
const element6 = <FontAwesomeIcon icon={faPeopleArrows} />

const ChooseUs = () => {
    return (
        <div className=" choose-section py-5">
            <h1 className="py-5">Why Choose Us ?</h1>

            <div className="row m-0">

                <div className="col-md-4">
                    <div className="row m-0">
                        <div className="col-md-3">
                            <h1>{element4}</h1>
                        </div>
                        <div className="col-md-9">
                            <h3>Stay Motivated</h3>
                            <p className="lead">Our mission is to make language learning accessible to everyone</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-md-3">
                            <h1>{element5}</h1>
                        </div>
                        <div className="col-md-9">
                            <h3>Free Video Content</h3>
                            <p className="lead">Our mission is to make language learning accessible to everyone</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-md-3">
                            <h1>{element6}</h1>
                        </div>
                        <div className="col-md-9">
                            <h3>Personalized Learning</h3>
                            <p className="lead">Our mission is to make language learning accessible to everyone</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row mt-5 m-0">
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-md-3">
                            <h1> {element}</h1>
                        </div>
                        <div className="col-md-9">
                            <h3>Intermediate Grading</h3>
                            <p className="lead">Our mission is to make language learning accessible to everyone</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-md-3">
                            <h1> {element2}</h1>

                        </div>
                        <div className="col-md-9">
                            <h3>Improve Quickly</h3>
                            <p className="lead">Our mission is to make language learning accessible to everyone</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-md-3">
                            <h1>{element3}</h1>
                        </div>
                        <div className="col-md-9">
                            <h3>Learn while Playing</h3>
                            <p className="lead">Our mission is to make language learning accessible to everyone</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;