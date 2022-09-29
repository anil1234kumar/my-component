import React from "react";
import { Container, NavDropdown, Navbar, Nav } from "react-bootstrap";
import logo from "../../Image/logo.svg";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <>
      <section>
        <Container>
          <header className="navbar">
            <nav>
              <Link to="">
                <img src={logo} alt="" />
              </Link>
            </nav>
            <nav>
              <Link to="">Home</Link>

              <Link to=""> whyus</Link>

              <Link to="">solutions</Link>

              <Link to="">Tokenomics</Link>

              <Link to="">Blogs</Link>

              <Link to="">
                <button>connect</button>
              </Link>
            </nav>
          </header>
        </Container>
      </section>
    </>
  );
}

export default Header;
