import React, { Component } from 'react';
import { Navbar, Nav} from 'react-bootstrap';


class Mynavbar extends Component {
    render(){
        return(
            <div className="main">
            <div className="main-navbar">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top'>
                  <Navbar.Brand href="/">Ray Sobrepena</Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                      <Nav.Link href="/about" activeClassName="selected">About</Nav.Link>
                      <Nav.Link href="/portfolio" activeClassName="selected">Projects</Nav.Link>
                      <Nav.Link href="/contact" activeClassName="selected">Contact Me</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
            </Navbar>
            </div>                
          </div>
        );
    }
} 

export default Mynavbar;
