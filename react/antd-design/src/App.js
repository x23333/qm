import React , {Component} from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Main from './Main'
import Sidebar from './Sidebar';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Sidebar></Sidebar>
          <Route exact path="/" component={Main} />
          <Route  path="/dashboard/monitor" component={Main} />
        </div>
      </Router>
    )
  }
}

export default App;