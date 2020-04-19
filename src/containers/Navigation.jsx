import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './styles/navigation.scss'

function Navigation() {
    // TODO: in the navbar, remove bg and variant and replace with my colors.
    return (
        <Navbar collapseOnSelect expand={false} bg="light" variant="light">
            <Navbar.Brand className="navbarBrand" href="/">WILLIAM LARSSON</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="responsive-navbar-nav" />
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