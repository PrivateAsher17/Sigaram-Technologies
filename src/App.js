import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  pageSize = 6;
  apiKey = "780d1673ebb24cec8f2d0136334ea79d"

  state = {
    progress: 0
  }

  setProgress=(progress)=>{
    this.setState({progress: progress})
  }

  render() {
    return (
      <Router>
      <div>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        <Switch>
          <Route exact path="/"><News setProgress={this.setProgress} apiKey={this.apiKey} key='general' pagesize={this.pageSize} country='in' category='general'/></Route>
          <Route exact path="/at"><News setProgress={this.setProgress} apiKey={this.apiKey} key='science' pagesize={this.pageSize} country='at' category='science'/></Route>
          <Route exact path="/sa"><News setProgress={this.setProgress} apiKey={this.apiKey} key='entertainment' pagesize={this.pageSize} country='sa' category='entertainment'/></Route>
          <Route exact path="/nz"><News setProgress={this.setProgress} apiKey={this.apiKey} key='sports' pagesize={this.pageSize} country='nz' category='sports'/></Route>
          <Route exact path="/us"><News setProgress={this.setProgress} apiKey={this.apiKey} key='health' pagesize={this.pageSize} country='us' category='health'/></Route>
          <Route exact path="/ae"><News setProgress={this.setProgress} apiKey={this.apiKey} key='business' pagesize={this.pageSize} country='ae' category='business'/></Route>
          <Route exact path="/ar"><News setProgress={this.setProgress} apiKey={this.apiKey} key='technology' pagesize={this.pageSize} country='ar' category='technology'/></Route>
        </Switch>
      </div>
      </Router>
    )
  }
}
