import React from "react";
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

export default function Landing() {
    return (
      <>
        <AppNavbar />
        <LandingPageHeader />
        <div className="main">
          <LandingGoal />
          <LandingProject />
          <LandingContact />
        </div>
        <AppFooter />
      </>
    );
}

