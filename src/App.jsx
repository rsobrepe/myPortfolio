import React, { Component } from 'react';
import { Container, Navbar, NavDropdown, Row, Col, Nav, NavItem, Button, Image} from 'react-bootstrap';
import Home from "./components/home";
import About from "./components/about";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main">
          <div className="main-navbar">
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top'>
                <Navbar.Brand href="/">Ray Sobrepena</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="/about" eventKey="/about">About</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/contact">Contact Me</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
          </Navbar>
          <Home />
          </div>                
        </div>
    );
  }
}

export default App;
