import React from "react";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledPopover,
  PopoverBody,
  PopoverHeader
} from "reactstrap";

// core components
import AppNavbar from "../layout/Navbars/AppNavbar.js";
import AboutPageHeader from "../layout/Headers/AboutPageHeader.js";
import AppFooter from "../layout/Footers/AppFooter.js";

function ProfilePage() {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <AppNavbar />
      <AboutPageHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="profile_picture"
                className="img-circle img-no-padding img-responsive"
                src={require("../../assets/img/portrait/portrait_1.jpg")}
              />
            </div>
            <div className="name">
              <h4 className="title">
                Son Yen Nguyen <br />
              </h4>
              <h6 className="description">Junior Full-stack web developer</h6>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p>
                I was born in 1997 in Danang City, Vietnam and I had lived there for 19 
                years before I moved to the United States for education at <a href="https://www.tamucc.edu/">Texas A&M University</a> in Computer Science major. 
                I graduated on Fall semester 2020 with GPA 3.92.
              </p>
              <br />
              <Button className="btn-round" color="danger" onClick={(e) => e.target.focus()} id="popover" outline >
                <i className="fa fa-cog" /> Settings
              </Button>
              <UncontrolledPopover
                placement={window.innerWidth < 768 ? "top" : "left"}
                target="popover"
                trigger="focus"
              >
              <PopoverHeader>Button is not working</PopoverHeader>
                <PopoverBody>
                  The function of this button will be added and popover will be removed.
                </PopoverBody>
              </UncontrolledPopover>
            </Col>
          </Row>
          <br />
          <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
              <Nav role="tablist" tabs>
                <NavItem>
                  <NavLink
                    className={activeTab === "1" ? "active" : ""}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    Follows
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "2" ? "active" : ""}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    Following
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>
          {/* Tab panes */}
          <TabContent className="following" activeTab={activeTab}>
            <TabPane tabId="1" id="follows">
              <Row>
                <Col className="ml-auto mr-auto" md="6">
                  <ul className="list-unstyled follows">
                    <li>
                      <Row>
                        <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            //src={require("assets/img/faces/clem-onojeghuo-2.jpg")}
                          />
                        </Col>
                        <Col className="ml-auto mr-auto" lg="7" md="4" xs="4">
                          <h6>
                            Flume <br />
                            <small>Musical Producer</small>
                          </h6>
                        </Col>
                        <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                          <FormGroup check>
                            <Label check>
                              <Input
                                defaultChecked
                                defaultValue=""
                                type="checkbox"
                              />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </Col>
                      </Row>
                    </li>
                    <hr />
                    <li>
                      <Row>
                        <Col className="mx-auto" lg="2" md="4" xs="4">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            //src={require("assets/img/faces/ayo-ogunseinde-2.jpg")}
                          />
                        </Col>
                        <Col lg="7" md="4" xs="4">
                          <h6>
                            Banks <br />
                            <small>Singer</small>
                          </h6>
                        </Col>
                        <Col lg="3" md="4" xs="4">
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue="" type="checkbox" />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </Col>
                      </Row>
                    </li>
                  </ul>
                </Col>
              </Row>
            </TabPane>
            <TabPane className="text-center" tabId="2" id="following">
              <h3 className="text-muted">Not following anyone yet :(</h3>
              <Button className="btn-round" color="warning">
                Find artists
              </Button>
            </TabPane>
          </TabContent>
        </Container>
      </div>
      <AppFooter />
    </>
  );
}

export default ProfilePage;
