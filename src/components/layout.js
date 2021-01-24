/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";

import { Container } from "react-bootstrap";
import Navbar from "./header";

const Layout = ({ children, pageInfo }) => (
  <Container fluid className="px-0 main">
    <Navbar pageInfo={pageInfo} />
    <main>{children}</main>
  </Container>
);

export default Layout;
