import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css';

const Service = (props) => {

    // destructuring
    const { img, name, price } = props.service;

    return (
        <div>
            <Col>
                <Card className="card">
                    <Card.Img className="card-img" variant="top" src={img} width="100" />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text className="text">
                            <h6>Price:$ {price}</h6>
                        </Card.Text>
                        <button className="btn btn-primary">Purchase</button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;