import React, { Component } from 'react';
import Home from "./components/home";
import About from "./components/about"
import Contact from "./components/contact";
import Portfolio from "./components/portfolio";
import Navbar from './components/mynavbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
