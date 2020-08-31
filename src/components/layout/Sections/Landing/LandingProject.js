import React from "react";
// ???
import { Link } from "react-router-dom";
import { Container, Row, Nav, NavItem, NavLink } from "reactstrap";

export default function LandingProject() {
  return (
    <>
      <div className="section section-dark text-center">
        <Container>
          <Row>
            <div className="ml-auto mr-auto text-center col-md-8">
              <h6 className="text-muted">My Work</h6>
              <h2 className="title">Let's talk about my project</h2>
            </div>
          </Row>
          <Row>
            <div className="project-pills ml-auto mr-auto text-center">
              <Nav className="nav-pills-primary nav-pills">
                <NavItem>
                  <NavLink to="#" tag={Link} target="_blank">
                    <i className="nc-icon nc-app" /> All
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/project" tag={Link} target="_blank">
                    <i className="fab fa-react" /> React/React Native
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/project" tag={Link} target="_blank">
                    <i className="nc-icon nc-app" /> AngularJS
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/project" tag={Link} target="_blank">
                    <i className="nc-icon nc-app" /> Ruby/Rails
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/project" tag={Link} target="_blank">
                    <i className="nc-icon nc-app" /> Flask/Django
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}
