import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

class About extends Component{
    render(){
        return(
            <Container className="about-main" fluid>
            <Row>
                {/*Left Side Profile Column*/}
                <Col sm={4} className="left-col">
                    <Image className="about-profile" src="assets/profile.jpg" alt="profile" roundedCircle style={{marginTop:'6em'}}/>
                    <h1>Raymon Sobrepena</h1> 
                    <h2>Developer</h2>        
                    <hr style={{borderTop: '3px solid black', width: '100%'}}/>
                    <p>
                    Computer Science Graduate from Ryerson University (2014-2018).
                    Interests in Computer Science include developing Mobile Applications, Java Applications/Software as well as Web Development. 
                    Eager and willing to learn and try new things in the world of Computer Science
                    </p>
                    <hr style={{borderTop: '3px solid black', width: '100%'}}/>
                    <h3>Address</h3>
                    <p>17.Mauve Dr., Brampton, Ontario</p>
                    <h3>Phone</h3>
                    <p>(647) 309-0904</p>
                    <h3>E-Mail</h3>
                    <p>raymon.p.sobrepena@gmail.com</p>
                </Col>

                <Col sm={8} className="right-col">
                <h1>Right Column</h1>
                </Col> 
            </Row>
            </Container>        
        );
    }
}

export default About;

