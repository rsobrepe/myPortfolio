import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

class Contact extends Component{
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render(){
        return(
            <Container className="contact-main" fluid>
                <h1>Contact Me!</h1>
                <Container className="contact-form">
                <Form>
                <p>
                    Feel free to leave any reveiw or feedback on my webpage or if you just want to reach out to 
                    me! I am always looking to improve as well as add on new and cool components to my website! 
                </p>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput2">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="subject"/>
                    </Form.Group>
                    
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                    <Button variant="outline-primary">Send</Button>
                </Form>
                </Container>
        </Container>
        );
    }
}

export default Contact;