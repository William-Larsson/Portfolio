import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.css' // use Bootstrap css
//import 'bootstrap/dist/css/bootstrap.min.css' // use for production
import '../global/styles.scss'
import './styles/navigation.scss'

function Navigation() {
    return (
        <Navbar className="navbar-custom bodyMargin" collapseOnSelect expand={false}>
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