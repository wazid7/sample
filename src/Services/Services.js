import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);

    // data load
    useEffect(() => {
        fetch('./fakeData1.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className="container">

            <h1 className="py-5 text-center" >Services</h1>

            <Row xs={1} md={3} className="g-4">

                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }

            </Row>
        </div>
    );
};

export default Services;