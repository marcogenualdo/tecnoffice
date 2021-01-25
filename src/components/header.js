import React from "react";
import { Link, navigate } from "gatsby";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import PropTypes from "prop-types";
import logo from "../images/logo.png";
import { forms } from "../pages/assistenza";
import "../styles/header.scss";

const NavLink = ({ children, to }) => (
  <Link to={to} className="link-no-style px-4 nav-link">
    <Nav.Link as="span" eventKey={to}>
      {children}
    </Nav.Link>
  </Link>
);

const SiteNavbar = ({ pageInfo }) => {
  const assistenzaItems = forms.map(({ title }) => (
    <NavDropdown.Item
      onClick={() => {
        navigate("/assistenza", { state: { activeForm: title } });
      }}
      eventKey={title}
    >
      {title}
    </NavDropdown.Item>
  ));

  return (
    <Navbar variant="light" expand="md" id="site-navbar">
      <Link to="/" className="link-no-style">
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
          <NavLink to="/promo">Promo</NavLink>

          <NavDropdown
            className="nav-link"
            // onClick={assistenzaRoute}
            title="Assistenza"
            id="nav-dropdown"
          >
            {assistenzaItems}
          </NavDropdown>

          <NavDropdown
            className="nav-link"
            // onClick={assistenzaRoute}
            title="Link Utili"
            id="nav-dropdown"
          >
            <NavDropdown.Item href="https://www.google.com" eventyKey={0}>
              Google
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="https://www.youtube.com" eventyKey={1}>
              YouTube
            </NavDropdown.Item>
          </NavDropdown>
          <NavLink to="/promo">Chi Siamo</NavLink>

          <Nav.Item className="nav-link">
            <Link to="/contattaci" className="badge badge-primary px-2 py-2 ">
              Contattaci
            </Link>
          </Nav.Item>
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
