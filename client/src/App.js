import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/posts" component={Posts} exact/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
