import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
          <News country="us" pageSize={10} category="general" key="general" />
          </Route>
          <Route exact path="/business">
          <News country="us" pageSize={10} category="business" key="business" />
          </Route>
          <Route exact path="/entertainment">
          <News country="us" pageSize={10} category="entertainment" key="entertainment" />
          </Route>
          <Route exact path="/health">
          <News country="us" pageSize={10} category="health" key="health" />  
          </Route>
          <Route exact path="/science">
          <News country="us" pageSize={10} category="science" key="science" />  
          </Route>
          <Route exact path="/sports">
          <News country="us" pageSize={10} category="sports" key="sports" />  
          </Route>
          <Route exact path="/technology">
          <News country="us" pageSize={10} category="technology" key="technology" />
          </Route>
        </Switch>
        </Router>       
      </div>
    )
  }
}

export default App

