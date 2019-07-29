import React, { Component } from "react";
import { Navbar, Nav } from 'react-bootstrap';

class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#About">About</Nav.Link>
                            <Nav.Link href="#Work">Work</Nav.Link>
                            <Nav.Link href="#Contact">Contact</Nav.Link>            
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavBar;