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
                        <Offcanvas.Title id="offcanvasNavbarLabel">Explore More</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link><NavLink to="/home">Home</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/projects">My Projects</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/about">About Me</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/contact">Contact Me</NavLink></Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

export default Header;