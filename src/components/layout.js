/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";

import { Container } from "react-bootstrap";
import Navbar from "./header";
import "../styles/layout.scss";

const Layout = ({ children, pageInfo }) => (
  <Container fluid className="px-sm-5 layout-container">
    <Navbar pageInfo={pageInfo} />
    <main className="py-5">{children}</main>
  </Container>
);

export default Layout;
