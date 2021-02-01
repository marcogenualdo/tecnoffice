import React, { useEffect, useState } from "react";
import { Link, navigate } from "gatsby";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import PropTypes from "prop-types";
import logo from "../images/logo.png";
import { forms } from "../pages/assistenza";
import "../styles/header.scss";

const NavLink = ({ children, to }) => (
  <Link to={to} className="nav-link">
    <Nav.Link as="span" eventKey={to}>
      {children}
    </Nav.Link>
  </Link>
);

const SiteNavbar = ({ pageInfo }) => {
  // background transparency on scroll
  const navAlpha = yScroll => Math.max(0, Math.min(1, yScroll / 300));
  const [alpha, setAlpha] = useState(0);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const yScroll = document.scrollingElement.scrollTop;
      setAlpha(navAlpha(yScroll));
    });
  }, []);

  // background color on mobile menu toggle
  const [expandedMenu, setExpandedMenu] = useState(false);
  const toggleBg = () => {
    setExpandedMenu(!expandedMenu);
  };

  // assistenza sub-menu
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
    <Navbar
      variant="light"
      expand="xl"
      id="site-navbar"
      fixed="top"
      style={{
        backgroundColor: expandedMenu
          ? "#434343"
          : `rgba(255,255,255,${alpha})`,
      }}
    >
      <Link to="/">
        <Navbar.Brand as="span">
          <img className="logo" src={logo} alt={pageInfo} />
        </Navbar.Brand>
      </Link>

      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        className="nav-hamburger"
        onClick={toggleBg}
        style={{ backgroundColor: expandedMenu ? "#fff" : "#0000" }}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavLink to="/promo">Promo</NavLink>

          <NavDropdown className="nav-link" title="Assistenza">
            {assistenzaItems}
          </NavDropdown>

          <NavDropdown className="nav-link" title="Link Utili">
            <NavDropdown.Item href="https://www.ricoh.it/prodotti" eventKey={0}>
              Prodotti Ricoh
            </NavDropdown.Item>
          </NavDropdown>
          <NavLink to="/chi-siamo">Chi Siamo</NavLink>

          <Nav.Item className="nav-link">
            <Link to="/contattaci" className="badge badge-primary">
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
