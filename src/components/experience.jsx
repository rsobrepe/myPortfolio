import React, { Component } from 'react';
import { Col, Container } from 'react-bootstrap';

class Experience extends Component{
    render(){
        return(
            <Container fluid>
                <Col xs={8}>
                    <h4 style={{marginTop: '0px', fontFamily:'Anton'}}>{this.props.jobName} ({this.props.startYear} - {this.props.endYear})</h4>
                    <h5 style={{marginTop: '0px', fontFamily:'Anton', fontStyle: 'italic'}}>{this.props.jobTitle}</h5>
                    <p style={{fontFamily: 'Oxygen'}}>{this.props.jobDescription}</p>
                </Col>
            </Container>
        );
    }
}

export default Experience;