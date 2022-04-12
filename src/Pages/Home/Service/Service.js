import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, image, description, price } = service;
    return (
        <div>
            <Col>
                <Card style={{ width: '22rem', height: '500px' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Button variant="primary"><Link to="/checkout" className='text-white text-decoration-none'>Book: {price}$</Link></Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;