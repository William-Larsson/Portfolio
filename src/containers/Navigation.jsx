import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './styles/navigation.scss'

function Navigation() {
    return (
        <Navbar className="navbar-custom" collapseOnSelect expand={false}>
            <Navbar.Brand className="navbarBrand" href="/" />
            <Navbar.Toggle className="navbarToggle" aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link className="ml-auto" href="/">Home</Nav.Link>
                    <Nav.Link className="ml-auto" href="/about">About me</Nav.Link>
                    <Nav.Link className="ml-auto" href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation