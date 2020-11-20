import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import { Switch, Route, BrowserRouter, HashRouter } from 'react-router-dom';
import Home from './components/pages/HomePage/Home.js';
import Footer from './components/pages/Footer/Footer.js';
import Services from './components/pages/Services/Services.js';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' exact component={Services} />
        </Switch>
        <Footer />
      </HashRouter>
    );
  }
}

export default App;
