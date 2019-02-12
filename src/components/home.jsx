import React, { Component } from 'react';




class Home extends Component{
    render(){
        return(
            <div className="main-background">

                    {/*Background Photo*/}
                    <div className="bg">                
                            <h1>Raymon Sobrepena</h1>                                                      
                            <div className="social-links">
                                {/*LinkedIn*/}
                                <a href="https://www.linkedin.com/in/raymon-sobrepena/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>                                                        
                                {/*GitHub*/}
                                <a href="https://github.com/rsobrepe" rel="noopener noreferrer" target="_blank">
                                    <i class="fa fa-github-square" aria-hidden="true"></i>
                                </a>
                                {/*Facebook*/}
                                <a href="https://www.facebook.com/raysobrepena" rel="noopener noreferrer" target="_blank">
                                    <i class="fa fa-facebook-square" aria-hidden="true"></i>
                                </a>
                                {/*Instagram*/}
                                <a href="https://www.instagram.com/raysobrepena/" rel="noopener noreferrer" target="_blank">
                                    <i class="fa fa-instagram" aria-hidden="true"></i>
                                </a>
                            </div>
                    </div>
         
            </div>        
        );
    }
}

export default Home;