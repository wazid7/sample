import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NavSelf.css';

const NavSelf = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Master Tech</Navbar.Brand>
                    <Nav className="ms-auto">
                        <NavLink className="navLink" to="/home">Home</NavLink>
                        <NavLink className="navLink" to="/about">About</NavLink>
                        <NavLink className="navLink" to="/services">Services</NavLink>
                        <NavLink className="navLink" to="/contact">Contact</NavLink>
                        
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavSelf;