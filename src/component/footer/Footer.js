import React from "react";
import { Container, Row, Col, InputGroup, Form, Button } from "react-bootstrap";
import logo from "../../Image/logo.svg";
import { Link } from "react-router-dom";
import linkedIn from "../../Image/linkedin.svg";
import twitter from "../../Image/twitter.svg";
import insta from "../../Image/instagram.svg";
import "./Footer.scss";
import Footerbar from "../footerbar/Footerbar";

function Footer({ className }) {
  return (
    <>
      <section className={`footerSec ${className}`}>
        <Container>
          <footer>
            <Row>
              <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                <div className="firstCol">
                  <img src={logo} alt="logo " />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </Col>
              <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                <div className="secCol">
                  <h6 className="title">Quick Link</h6>
                  <ul>
                    <li>
                      <span>Home</span>
                      <span>Tokenomics</span>
                    </li>
                    <li>
                      <span>Why Us</span>
                      <span>Roadmap</span>
                    </li>
                    <li>
                      <span> Solutions</span>
                      <span>Blogs</span>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                <div className="thirdSec">
                  <InputGroup>
                    <Form.Control
                      placeholder="Enter Email ID"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                      Button
                    </Button>
                  </InputGroup>
                  <h6 className="title">Social Media Links</h6>
                  <Link to="">
                    <img src={linkedIn} alt="icon" />
                  </Link>
                  <Link to="">
                    <img src={twitter} alt="icon" />
                  </Link>
                  <Link to="">
                    <img src={insta} alt="icon" />
                  </Link>
                </div>
              </Col>
            </Row>
          </footer>
        </Container>
        <Footerbar />
      </section>
    </>
  );
}

export default Footer;
