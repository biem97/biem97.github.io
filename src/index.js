import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// styles
import "./assets/css/bootstrap.min.css";
import "./assets/css/paper-kit.css";
// import "assets/css/paper-kit.min.css";
// import "assets/css/paper-kit.css.map";
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  //Used to be <React.StrictMode>
  <React.Fragment>
    <Router basename={process.env.PUBLIC_URL}>< App /></Router>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
