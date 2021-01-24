import React from "react";
import { Link } from "gatsby";

import { Navbar, Nav, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import logo from "../images/logo.png";
import "../styles/header.scss";

const NavLink = ({ children, to }) => (
  <Link to={to} className="link-no-style px-4 nav-link">
    <Nav.Link as="span" eventKey={to}>
      {children}
    </Nav.Link>
  </Link>
);

const SiteNavbar = ({ pageInfo }) => {
  return (
    <Navbar variant="light" expand="lg" id="site-navbar">
      <Link to="/" className="link-no-style mt-0">
        <Navbar.Brand as="span">
          <img className="logo" src={logo} alt={pageInfo} />
        </Navbar.Brand>
      </Link>

      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        className="nav-hamburger"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto mt-4">
          <NavLink to="/page-2">Promo</NavLink>
          <NavLink to="/page-2">Assistenza</NavLink>
          <NavLink to="/page-2">Link Utili</NavLink>
          <NavLink to="/page-2">Chi Siamo</NavLink>
          <Button className="mx-4 btn-lg">Contattaci</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  as: PropTypes.string,
  eventKey: PropTypes.string,
  className: PropTypes.string,
};

export default SiteNavbar;
