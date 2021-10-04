import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import "./AllServices.css";

const AllServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./fakeData2.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="container">

            <h2 className="py-5">Services</h2>
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service => <Col>
                        <Card className="cards">
                            <Card.Img className="allService-img" variant="top" src={service.img} />
                            <Card.Body>
                                <Card.Title>{service.name}</Card.Title>
                                <Card.Text className="text-price">
                                    <h6>Price:$ {service.price}</h6>
                                </Card.Text>
                                <button className="btn btn-primary">Purchase</button>
                            </Card.Body>
                        </Card>
                    </Col>


                    )
                }
            </Row>
        </div>
    );
};

export default AllServices;