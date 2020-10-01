import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import { Router, Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/pages/HomePage/Home.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
