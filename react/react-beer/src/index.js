import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import Single from './components/Single'
import './style.css';
import * as serviceWorker from './serviceWorker';
// import Search from './components/Search';

ReactDOM.render(<BrowserRouter>
  <div>
    <Route exact path="/" component={App} />
    <Route path="/beer" component={Single} />
    <Route path="/search/:searchTerm" component={App} />
  </div>
</BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
