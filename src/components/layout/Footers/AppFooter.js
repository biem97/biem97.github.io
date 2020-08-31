
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

export default function AppFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="https://www.creative-tim.com?ref=pkr-footer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Son Nguyen
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" style={{color: "purple"}} /> by Son Nguyen
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

