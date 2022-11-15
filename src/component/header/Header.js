import React, { useState } from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import logo from "../../Image/logo.svg";
// import Button from "../button/Buttons";
import "./Header.scss";

function Header() {
  const [color, setColor] = useState(false);
  const colorChange = () => {
    if (window.scrollY >= 150) {
      setColor(true);
    } else setColor(false);
  };
  window.addEventListener("scroll", colorChange);

  return (
    <div className={color ? "header headerbg" : "header"}>
      <Navbar className="p-0 " collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand className="p-0" href="#home">
            <img className="logo" src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="active" href="#features">
                Home
              </Nav.Link>
              <Nav.Link href="#">Why Us</Nav.Link>
              <Nav.Link href="">Tokenomics</Nav.Link>
              <Nav.Link href="">Solution</Nav.Link>
              <Nav.Link href="">Utility</Nav.Link>
              <Nav.Link href="">Banking</Nav.Link>
              <Nav.Link href="">Roadmap</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {/* <Button className="ms-4 fixedBtn" /> */}
        </Container>
      </Navbar>
      <div className="hrline"></div>
    </div>
  );
}

export default Header;
