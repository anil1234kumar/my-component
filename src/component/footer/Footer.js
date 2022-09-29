import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../Image/logo.svg";

function Footer() {
  return (
    <>
      <section>
        <Container>
          <footer>
            <Row>
              <Col>
                <img src={logo} alt="logo" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Col>
              <Col>
                <h6>Quick Link</h6>
                <ul>
                  <li>
                    <Span>Home</Span>
                    <Span>Tokenomics</Span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Span>Why Us</Span>
                    <Span>Roadmap</Span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Span> Solutions</Span>
                    <Span>Blogs</Span>
                  </li>
                </ul>
              </Col>
              <Col></Col>
            </Row>
          </footer>
        </Container>
      </section>
    </>
  );
}

export default Footer;
