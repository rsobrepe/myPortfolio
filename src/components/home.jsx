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
                    </div>
         
            </div>        
        );
    }
}

export default Home;