import React, { Component } from 'react';
import { Col, Container } from 'react-bootstrap';

class Education extends Component{
    render(){
        return(
            <Container fluid>
                <Col>
                    <h4 style={{marginTop: '0px', fontFamily: 'Anton'}}>{this.props.schoolName} ({this.props.startYear} - {this.props.endYear})</h4>
                    <p style={{fontFamily: 'Oxygen'}}>{this.props.schoolDescription}</p>
                </Col>
            </Container>
        );
    }
}

export default Education;