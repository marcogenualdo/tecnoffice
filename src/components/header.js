import React from "react";
import { Link } from "gatsby";

import { Navbar, Nav, Button } from "react-bootstrap";
import logo from "../images/logo.png";
import "../styles/header.scss";

const SiteNavbar = ({ pageInfo }) => {
  return (
    <Navbar variant="light" expand="lg" id="site-navbar">
      <Link to="/" className="link-no-style">
        <Navbar.Brand as="span">
          <img className="logo" src={logo} alt={pageInfo} />
        </Navbar.Brand>
      </Link>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link to="/page-2" className="link-no-style">
            <Nav.Link as="span" eventKey="page-2">
              Promo
            </Nav.Link>
          </Link>
          <Link to="/page-2" className="link-no-style">
            <Nav.Link as="span" eventKey="page-2">
              Assistenza
            </Nav.Link>
          </Link>
          <Link to="/page-2" className="link-no-style">
            <Nav.Link as="span" eventKey="page-2">
              Link Utili
            </Nav.Link>
          </Link>
          <Link to="/page-2" className="link-no-style">
            <Nav.Link as="span" eventKey="page-2">
              Chi Siamo
            </Nav.Link>
          </Link>
          <Button>Contattaci</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default SiteNavbar;
