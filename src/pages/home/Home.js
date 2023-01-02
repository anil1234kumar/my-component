import React, { Component } from "react";
import Footer from "../../component/footer/Footer";
import Footerbar from "../../component/footerbar/Footerbar";
import Header from "../../component/header/Header";
import Layout from "../../component/layout/Layout";
import "./Home.scss";
import { Row, Col, Container, Image } from "react-bootstrap";
// import Button from "../../component/button/Button";
import plus from "../../Image/plus.png";
import timebg from "../../Image/timerBg.png";
import question from "../../Image/question.png";
import Login from "../../component/login/Login.tsx";

function Home() {
  return (
    <div className="home-Page">
      <Layout>
        {/* <Login /> */}
        <main>
          <section id="first" className="firstSec">
            <Container>
              <Row className="align-items-center">
                <Col lg={12} xl={6}>
                  <div className="text-start">
                    <h2>
                      SGRB A Crypto
                      <span>Bank</span>
                    </h2>
                    <p>What is Crypto used for Utilities?</p>
                    <ul>
                      <li>
                        <img src={plus} alt="icon" />
                        <span></span>
                        <p>
                          A utility token is unique to its ecosystem. SGRB Token
                          for example, can only be used to tip content creators
                          through the browser or through other applications that
                          have integrated SGRB wallets, like Twitter. SGRB has
                          no other use beyond speculating on its value. The same
                          can be said of any utility token.
                        </p>
                      </li>
                      <li>
                        <span>
                          <img src={plus} alt="icon" />
                        </span>
                        <p>
                          A utility token is a crypto token that serves some use
                          case within a specific ecosystem. These tokens allow
                          users to perform some action on a certain network.{" "}
                        </p>
                      </li>
                      <li>
                        <span>
                          <img src={plus} alt="icon" />
                        </span>
                        <p>
                          Utility tokens are not mineable cryptocurrencies. They
                          are usually pre-mined, being created all at once and
                          distributed in a manner chosen by the team behind the
                          project.
                        </p>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col className="timeSec">
                  <Image fluid src={timebg} alt="img" />
                </Col>
              </Row>
            </Container>
          </section>
          <section className="secSec" id="sec">
            <Container>
              <Row>
                <Col lg={6}>
                  <Image fluid src={question} alt="img" />
                </Col>
                <Col lg={6}>
                  <h4>Why Choose SGRB?</h4>
                  <h5>Why is SGRB Token is unique</h5>
                  <p>
                    SGRB is Simple and safe Cryptocurrency management and
                    payment service through double encryption security system
                    and two-way QR technology.
                  </p>
                  <Row>
                    <Col></Col>
                    <Col></Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
      </Layout>
    </div>
  );
}

export default Home;
