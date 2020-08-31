import React from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    CardFooter,
    Progress,
  } from "reactstrap";


export default function LandingGoal() {
  return (
    <>
      <div className="section text-center">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="title">Let's talk about my goal</h2>
              <br />
            </Col>
          </Row>
          <Row>
            <Col md="3">
              <div className="info">
                <div className="icon icon-info">
                  <i className="fa fa-rocket" />
                </div>
                <div className="description">
                  <h4 className="info-title">Fast</h4>
                  <p className="description">
                    Fast load application with free bugs is my highest priority.
                  </p>
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="info">
                <div className="icon icon-info">
                  <i className="nc-icon nc-bulb-63" />
                </div>
                <div className="description">
                  <h4 className="info-title">No limit</h4>
                  <p>
                    Responsive web-application works flexibly on any device.
                  </p>
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="info">
                <div className="icon icon-info">
                  <i className="nc-icon nc-bulb-63" />
                </div>
                <div className="description">
                  <h4 className="info-title">Creativity</h4>
                  <p>Easy to use, dynamic and friendly.</p>
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="info">
                <div className="icon icon-info">
                  <i className="fa fa-user-secret" />
                </div>
                <div className="description">
                  <h4 className="info-title">Security</h4>
                  <p>
                    The web application will always be safe for end-users across
                    multiple platforms.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="4 mt-5 pt-5">
              <Card className="card-profile card-plain">
                <div className="card-avatar">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="profile"
                      src={require("../../../../assets/img/portrait/portrait_1.jpg")}
                    />
                  </a>
                </div>
                <CardBody>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h4">Son Nguyen</CardTitle>
                      <h6 className="card-category">Junior Web Developer</h6>
                    </div>
                  </a>
                  <p className="card-description text-center blockquote">
                    "Do not give up, the beginning is always the hardest"
                  </p>
                </CardBody>
                <CardFooter className="text-center mt-0 pt-0">
                  <a
                    className="btn-just-icon btn-outline-success"
                    color="link"
                    href="https://www.linkedin.com/in/son-nguyen-b68378112/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-linkedin" />
                  </a>
                  <a
                    className="btn-just-icon btn-outline-success ml-1"
                    color="link"
                    href="https://github.com/biem97/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-github" />
                  </a>
                  <a
                    className="btn-just-icon btn-outline-success ml-1"
                    color="link"
                    href="https://www.instagram.com/biem97/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-instagram" />
                  </a>
                </CardFooter>
              </Card>
            </Col>
            <Col md="8">
              <div>
                <h3>Technical Skills</h3>
                <br />
              </div>
              <Row>
                <Col md="2">
                  <div className="">HTML5</div>
                </Col>
                <Col md="10">
                  <Progress
                    animated
                    color="success"
                    max="100"
                    value="40"
                    barClassName="progress-bar-success"
                  />
                </Col>
              </Row>
              <hr />
              <Row>
                <Col md="2">
                  <div>CSS3</div>
                </Col>
                <Col md="10">
                  <Progress
                    animated
                    color="success"
                    max="100"
                    value="25"
                    barClassName="progress-bar-success"
                  />
                </Col>
              </Row>
              <hr />
              <Row>
                <Col md="2">
                  <div>Javascript</div>
                </Col>
                <Col md="10">
                  <Progress
                    animated
                    color="success"
                    max="100"
                    value="25"
                    barClassName="progress-bar-success"
                  />
                </Col>
              </Row>
              <hr />
              <Row>
                <Col md="2">
                  <span>ReactJS</span>
                </Col>
                <Col md="10">
                  <Progress
                    animated
                    color="success"
                    max="100"
                    value="25"
                    barClassName="progress-bar-success"
                  />
                </Col>
              </Row>
              <hr />
              <Row>
                <Col md="2">
                  <span>NodeJS</span>
                </Col>
                <Col md="10">
                  <Progress
                    animated
                    color="success"
                    max="100"
                    value="25"
                    barClassName="progress-bar-success"
                  />
                </Col>
              </Row>
              <hr />
              <Row>
                <Col md="2">
                  <div>MongoDB</div>
                </Col>
                <Col md="10">
                  <Progress
                    animated
                    color="success"
                    max="100"
                    value="25"
                    barClassName="progress-bar-success"
                  />
                </Col>
              </Row>
              <hr />
              <Row>
                <Col md="2">
                  <div>ExpressJS</div>
                </Col>
                <Col md="10">
                  <Progress
                    animated
                    color="success"
                    max="100"
                    value="25"
                    barClassName="progress-bar-success"
                  />
                </Col>
              </Row>
              <hr />
              <Row>
                <Col md="2">
                  <div>RestAPI</div>
                </Col>
                <Col md="10">
                  <Progress
                    animated
                    color="success"
                    max="100"
                    value="25"
                    barClassName="progress-bar-success"
                  />
                </Col>
              </Row>
              <hr />
              <Row>
                <Col md="2">
                  <div>UI/UX Design</div>
                </Col>
                <Col md="10">
                  <Progress
                    animated
                    color="success"
                    max="100"
                    value="25"
                    barClassName="progress-bar-success"
                  />
                </Col>
              </Row>
              <hr />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
