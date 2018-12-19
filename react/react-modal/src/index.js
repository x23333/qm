import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

const Home=()=><div>Home</div>;
const WillMatch=()=><div>WillMatch</div>;
const NotMatch=({location})=><div>
    <h1>404 Not Found</h1>
    <h3><code>{location.pathname}</code></h3>
</div>;

const NotMatchExample=()=><Router>
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/old-match">Old Match, to be redirected</Link>
        </li>
        <li>
            <Link to="/will-match">Will Match</Link>
        </li>
        <li>
            <Link to="/will-not-match">Will Not Match</Link>
        </li>
        <li>
            <Link to="/also/will/not/match">Also Will Not Match</Link>
        </li>
        <Switch>
            <Route path="/" exact component={ Home } />
            <Redirect from="/old-match" to="/will-match" />
            <Route path="/will-match" component={ WillMatch }/>
            <Route component={ NotMatch } />
        </Switch>
    </ul>
</Router >

ReactDOM.render(<NotMatchExample />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
