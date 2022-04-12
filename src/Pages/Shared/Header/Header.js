import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Hotel-Booking</Navbar.Brand>
                    <Nav className="me-3">
                        <Link className='text-white text-decoration-none me-3' to="/">Home</Link>
                        <Link className='text-white text-decoration-none me-3' to="/about">About</Link>
                        <Link className='text-white text-decoration-none' to="/login">Login</Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;