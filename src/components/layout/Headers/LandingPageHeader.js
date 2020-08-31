import React, { Fragment } from "react";
import { Container, Button } from "reactstrap";

export default function LandingPageHeader() {
  let pageHeader = React.createRef();
  let playIcon = React.createRef();

  // Rotate arrow
  function rotateArrowOver(e) {
    playIcon.current.style.transform = "rotate(90deg)";
    playIcon.current.style.transition = "transform 0.3s linear";
  }

  function rotateArrowOut(e) {
    playIcon.current.style.transform = "rotate(0deg)";
    playIcon.current.style.transition = "transform 0.3s linear";
  }


  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

    return (
      <Fragment>
        <div
          style={{
            backgroundImage:
              "url(" + require("../../../assets/img/hoi-an.jpeg") + ")",
          }}
          className="page-header"
          data-parallax={true}
        >
          <div className="filter" />
          <Container>
            <div className="motto text-center">
              <h1>I'm <span className="text-danger">Son Nguyen</span></h1>
              <h3>I'm a Junior Web Developer...</h3>
              <br />
              <Button
                href="/about"
                className="btn-round mr-2"
                color="neutral"
                type="button"
                outline
              >
                More about myself
              </Button>
              <Button
                href="#"
                className="btn-round"
                color="neutral"
                target="_blank"
                onMouseOver={rotateArrowOver}
                onMouseOut={rotateArrowOut}
                outline
              >
                Explore
                <i ref={playIcon} className="fa fa-play" />
              </Button>
            </div>
          </Container>
        </div>
      </Fragment>
    );
  }

