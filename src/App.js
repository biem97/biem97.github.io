import React from "react";
//import AppNavBar from "./components/layout/AppNavBar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import AboutPage from "./components/views/AboutPage";
import Project from "./components/views/Project";
import LandingPage from "./components/views/LandingPage";

// To public on Github Page, use HashRouter instead of BrowserRouter
//import { BrowserRouter as Router } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NotFound from "./components/views/NotFound";

function App() {
  return (
    <>
      <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/project" component={Project} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route component={NotFound} />      
      </Switch>
    </>
  );
}

export default App;