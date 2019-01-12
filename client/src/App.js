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
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
