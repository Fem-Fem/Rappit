import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import LoginPage from "./components/login/LoginPage";
import SignupPage from "./components/signup/SignupPage";
import Navigation from "./components/Navigation"


class App extends Component {

  render() {
    return (
        <div>
          <Navigation />
        </div>
    );
  }
}

export default App;
