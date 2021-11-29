import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <Navbar bg="dark" variant='dark' expand={ false }>
            <Container fluid>
                <Navbar.Brand className="d-flex align-items-center">
                    <NavLink to="/">
                        <img
                            src={ logo }
                            width="50"
                            height="50"
                            className="align-top img-fluid me-3"
                            alt="logo"
                        />
                    </NavLink>
                    <span>Sami Meadad Choudhury</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel" className="fs-1">Explore More</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <NavLink className="fs-1 mb-3 text-primary text-decoration-none" to="/home"><i class="fas fa-home"></i></NavLink>
                            <NavLink className="fs-2 mb-3 text-primary text-decoration-none" to="/projects">My Projects</NavLink>
                            <NavLink className="fs-2 mb-3 text-primary text-decoration-none" to="/about">My Profile</NavLink>
                            <NavLink className="fs-2 text-primary text-decoration-none" to="/contact">Contact Me</NavLink>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

export default Header;