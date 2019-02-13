import React, { Component } from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css';

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
                      <Nav.Link href="#" activeClassName="selected">
                      <Link to="/about"
                        style={{
                          fontFamily: 'Oxygen',
                          color: 'grey'
                        }}
                      >About</Link>
                      </Nav.Link>

                      <Nav.Link href="#" activeClassName="selected">
                      <Link to="/portfolio" style={{
                          fontFamily: 'Oxygen',
                          color: 'grey'
                        }}
                      >Projects</Link>
                      </Nav.Link>

                      <Nav.Link href="#" activeClassName="selected">
                      <Link to="/contact"style={{
                          fontFamily: 'Oxygen',
                          color: 'grey'
                        }}
                      >Contact Me</Link>
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
            </Navbar>
            </div>                
          </div>
        );
    }
} 

export default Mynavbar;
