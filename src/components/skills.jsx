import React, { Component } from 'react';
import { Col, Container, ProgressBar } from 'react-bootstrap';

class Skills extends Component{
    render(){
        return(
            <Container fluid style={{padding:'1em'}}>
                <Col sm={12}>
                <div style={{display: 'flex', fontFamily: 'Anton'}}>
                {this.props.skill}
                <ProgressBar style={{margin: 'auto', width: '75%'}} 
                now={this.props.progress}/>
                </div>
                </Col>
            </Container>
            
        );
    }
}

export default Skills;