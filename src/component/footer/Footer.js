import React from "react";
import { Container, Row, Col, InputGroup, Form, Button } from "react-bootstrap";
import logo from "../../Image/logo.svg";
import { Link } from "react-router-dom";

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
                    <span>Home</span>
                    <span>Tokenomics</span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <span>Why Us</span>
                    <span>Roadmap</span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <span> Solutions</span>
                    <span>Blogs</span>
                  </li>
                </ul>
              </Col>
              <Col>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <Button variant="outline-secondary" id="button-addon2">
                    Button
                  </Button>
                </InputGroup>
                <h6>Social Media Links</h6>
                <Link to="">
                  <img src="" alt="" />
                </Link>
                <Link to="">
                  <img src="" alt="" />
                </Link>
                <Link to="">
                  <img src="" alt="" />
                </Link>
              </Col>
            </Row>
          </footer>
        </Container>
      </section>
    </>
  );
}

export default Footer;
