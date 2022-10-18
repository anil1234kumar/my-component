import React from "react";
import { Container, NavDropdown, Navbar, Nav } from "react-bootstrap";
import logo from "../../Image/logo.svg";
import { Link } from "react-router-dom";
import "./Header.scss";
import Button from "../button/Button";

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function Header() {
  return (
    <>
      <section className="headerSec">
        <Container>
          <header>
            <nav class="navbar">
              <Link to="">
                <img className="logo" src={logo} alt="" />
              </Link>
              <ul class="nav-links">
                <input type="checkbox" id="checkbox_toggle" />
                <label for="checkbox_toggle" class="hamburger">
                  &#9776;
                </label>

                <div class="menu">
                  <li>
                    <Link to="">Home</Link>
                  </li>
                  <li>
                    <Link to=""> whyus</Link>
                  </li>
                  <li class="services">
                    <Link to="">solutions</Link>
                    <ul class="dropdown">
                      <li>
                        <a href="/">Dropdown 1 </a>
                      </li>
                      <li>
                        <a href="/">Dropdown 2</a>
                      </li>
                      <li>
                        <a href="/">Dropdown 2</a>
                      </li>
                      <li>
                        <a href="/">Dropdown 3</a>
                      </li>
                      <li>
                        <a href="/">Dropdown 4</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="">Tokenomics</Link>
                  </li>
                  <li>
                    <Link to="">Blogs</Link>
                  </li>
                  <Button className="ms-3" />
                </div>
              </ul>
            </nav>
          </header>
        </Container>
        <div className="hrline"></div>
      </section>
    </>
  );
}

export default Header;
