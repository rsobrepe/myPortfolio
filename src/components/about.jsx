import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

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

                {/*Right Side Profile Column*/}
                <Col sm={8} className="right-col">
                    <h1>Education</h1>
                    <Education
                        startYear={2010}
                        endYear={2014}
                        schoolName="Cardinal Ambrozic Secondary School"
                        schoolDescription="Catholic Secondary High School, Main jobs/work include; Basketball Team, Baseball Team, Football Team, Track Team, AV Club, Orientation Leadership, Think Fast Volunteering"
                    />

                    <Education
                        startYear={2014}
                        endYear={2018}
                        schoolName="Ryerson University"
                        schoolDescription="Majored in Computer Science. Involvement include; General Manager of Table Tennis Club, Orientation Crew leader."
                    />
                    <hr style={{borderTop: '3px solid white', width: '100%'}}/>

                    <h1 style={{marginTop: '0.75em'}}>Experience</h1> 
                    <Experience 
                        startYear={2014}
                        endYear={2015}
                        jobName="L-3 Wescam Applied Physics Specialties"
                        jobTitle="Engineering Intern"
                        jobDescription="Edited and created Assembly Model/Drawings using AutoCad (SolidWorks). Developed small software (Python) for Engineering use. Cleaned up archived Files for Engineers. Handled and organized parts and lenses for assembly."
                    />

                    <Experience 
                        startYear={2016}
                        endYear="Present"
                        jobName="Perplexity Escape Games"
                        jobTitle="Team Lead/Lead Programmer"
                        jobDescription="Provide exceptional Customer Service. Manages and leads team. Opening and closing duties such as managing cash and transactions. Deal with customer/game issues. Host private corportate events.Program games and software solutions for both Customers and Team Needs (C#, Java, Arduino/Raspberry Pi, Python, AndroidSDK)"
                    />

                    <hr style={{borderTop: '3px solid white', width: '100%'}}/>
                    <h1 style={{marginTop: '0.75em', paddingBottom: '4px'}}>Skills</h1>

                    <Skills 
                        skill="HTML"
                        progress={100}
                    />

                    <Skills 
                        skill="CSS"
                        progress={100}
                    />
                    <Skills 
                        skill="Java"
                        progress={100}
                    />
                    <Skills 
                        skill="C#"
                        progress={95}
                    />
                    <Skills 
                        skill="JavaScript"
                        progress={80}
                    />
                    <Skills 
                        skill="React.js"
                        progress={80}
                    />
                    <Skills 
                        skill="Bootstrap"
                        progress={80}
                    />
                    <Skills 
                        skill="AndroidSDK"
                        progress={80}
                    />
                    <Skills 
                        skill="Python"
                        progress={80}
                    />

                    <Skills 
                        skill="SQL"
                        progress={70}
                    />
                    <Skills 
                        skill="MongoDB"
                        progress={70}
                    />
            
                </Col> 
            </Row>
            </Container>        
        );
    }
}

export default About;

