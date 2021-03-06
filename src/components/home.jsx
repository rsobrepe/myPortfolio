import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import $ from 'jquery';



class Home extends Component{
    
    componentDidMount() {
        window.scrollTo(0, 0)
      }

    scrollToTop = () => {
        scroll.scrollToTop(); 
    };
    render(){
        return(
            <div className="main-background">

                    {/*Background Photo*/}
                    <div className="bg">                
                            <h1>Raymon Sobrepena</h1>                                                      
                            <div className="social-links">
                                {/*LinkedIn*/}
                                <a href="https://www.linkedin.com/in/raymon-sobrepena/" rel="noopener noreferrer" target="_blank">
                                  <i class="fab fa-linkedin"></i>
                                </a>                                                        
                                {/*GitHub*/}
                                <a href="https://github.com/rsobrepe" rel="noopener noreferrer" target="_blank">
                                    <i class="fab fa-github-square"></i>
                                </a>
                                {/*Facebook*/}
                                <a href="https://www.facebook.com/raysobrepena" rel="noopener noreferrer" target="_blank">
                                    <i class="fab fa-facebook-square"></i>
                                </a>
                                {/*Instagram*/}
                                <a href="https://www.instagram.com/raysobrepena/" rel="noopener noreferrer" target="_blank">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </div>
                            <Link
                                activeClass="active"
                                to="home-intro"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={100}
                            >  
                                <i class="fas fa-angle-double-down" id="#section" 
                                    style={{marginBottom: '1px', fontSize: '3em',
                                    color: 'white', display: 'flex', margin:' auto', paddingLeft: '50%', paddingTop:'5.5em'
                                    }}
                                ></i>
                            </Link>     
                    </div>

                    <div className = "home-intro">
                            <h2>Welcome To My Website!</h2>
                            <p style={{fontStyle: 'italic', fontSize:'1.5em'}}>"Your true success in life begins only when you make the commitment to become excellent at what you do." — Brian Tracy</p>
                            <p style={{fontWeight: 'bold', fontSize:'1em'}}>
                                Welcome! This is my personal website and portfolio used to express my life as well as show off the projects that I've been a part of or I've been currently working on!
                                I am currently focusing on and sharpening my skills in Web Development, mainly focusing on frameworks such as Bootrap, React.js and libraries such as jQuery. 
                                I do have my degree in Computer Science but I have been mainly self taught and really do enjoy the challenges of self-learning. My main focus is Web Development but I do want to 
                                explore many different aspects in programming such as developing Desktop Softwares, Mobile Applications and Web Applications. I am still a little rough around the edges in terms of coding
                                but I do really enjoy coding and being a developer and can't wait to take on new challenges. I strive to be excellent at everything I do and programming is no exception!             
                            </p>
                            <h3>Tools used for this Website:</h3>
                            <div className="social-links-intro">

                                <a href="https://html.com/" rel="noopener noreferrer" target="_blank">
                                    <i class="fab fa-html5"></i> 
                                </a>

                                <a href="https://www.w3schools.com/css/" rel="noopener noreferrer" target="_blank">
                                    <i class="fab fa-css3-alt"></i>
                                </a>

                                <a href="https://www.javascript.com/" rel="noopener noreferrer" target="_blank">
                                    
                                <i class="fab fa-js-square"></i> 
                                </a>
                                <a href="https://reactjs.org/" rel="noopener noreferrer" target="_blank">
                                    <i class="fab fa-react"></i> 
                                </a>                                                                                            
                            </div>
                            <Link
                                activeClass="active"
                                to="bg"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={100}
                            > 
                            <h3 style={{paddingTop: '5em', fontSize:'1em'}}>Back To Top</h3>
                            </Link>
                    </div>
         
            </div>        
        );
    }
}

export default Home;