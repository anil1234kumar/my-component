import React from "react";
import { Container } from "react-bootstrap";
import "./Footerbar.scss";

function Footerbar() {
  return (
    <>
      <section>
        <div className="hrline"></div>
        <Container>
          <div className="d-flex footerBar">
            <ul className="term-policy">
              <li>Terms</li>
              <li>Privacy Policy</li>
            </ul>
            <p>Copyright 2022 | All Rights Reserved.</p>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Footerbar;
