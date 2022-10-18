import React from "react";
import Footer from "../../component/footer/Footer";
import Footerbar from "../../component/footerbar/Footerbar";
import Header from "../../component/header/Header";
import Layout from "../../component/layout/Layout";
import "./Home.scss";
import { Form, Row, Col, Container } from "react-bootstrap";
import Button from "../../component/button/Button";
import plus from "../../Image/plus.png";

function Home() {
  return (
    <div>
      <Layout>
        <section className="firstSec">
          <Container>
            <Row>
              <Col>
                <div className="text-start">
                  <h2>
                    SGRB A Crypto
                    <span>Bank</span>
                  </h2>
                  <ul>
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
                      A utility token is unique to its ecosystem. SGRB Token for
                      example, can only be used to tip content creators through
                      the browser or through other applications that have
                      integrated SGRB wallets, like Twitter. SGRB has no other
                      use beyond speculating on its value. The same can be said
                      of any utility token.{" "}
                    </li>
                    <li>
                      <span>
                        <img src={plus} alt="icon" />
                      </span>
                      Utility tokens are not mineable cryptocurrencies. They are
                      usually pre-mined, being created all at once and
                      distributed in a manner chosen by the team behind the
                      project.
                    </li>
                  </ul>
                </div>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </section>
      </Layout>
    </div>
  );
}

export default Home;
