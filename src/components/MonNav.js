import React, { Component } from 'react';
import {Navbar,Nav} from 'react-bootstrap';
class MonNav extends Component {
    render() {
        return (
            <div>
                 <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Mon BMI</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Acceuil</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
    
                </Navbar>
            </div>
        );
    }
}

export default MonNav;