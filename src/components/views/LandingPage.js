import React, { Component, Fragment } from "react";
// Navbar
import AppNavbar from "../layout/Navbars/AppNavbar";
// Header
import LandingPageHeader from "../layout/Headers/LandingPageHeader";
// Footer
import AppFooter from "../layout/Footers/AppFooter";
//  Sections
import LandingGoal from "../layout/Sections/Landing/LandingGoal";
import LandingContact from "../layout/Sections/Landing/LandingContact";
import LandingProject from "../layout/Sections/Landing/LandingProject";

export default class Landing extends Component {
  render() {
    //let pageHeader = React.createRef();
    return (
      // Add background image
      <Fragment>
        <AppNavbar />
        <LandingPageHeader />
        <div className="main">
          <LandingGoal />
          <LandingProject />
          <LandingContact />
        </div>
        <AppFooter />
      </Fragment>
    );
  }
}

/*


      
*/
