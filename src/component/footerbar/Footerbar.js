import React from "react";
import { Container } from "react-bootstrap";
import "./Footerbar.scss";
import { Link } from "react-router-dom";

function Footerbar() {
  return (
    <>
      <section className="Footerbar_Sec">
        <div className="hrline"></div>
        <Container>
          <div className="footerBar">
            <ul className="term-policy">
              <li>
                <Link to="">Terms</Link>
              </li>
              <li>
                <Link to="">Privacy Policy</Link>
              </li>
            </ul>
            <p>Copyright @ 2022 | All Rights Reserved.</p>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Footerbar;
