/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";

import Navbar from "./header";
import Footer from "./footer";
import "../styles/layout.scss";

const Layout = ({ children, pageInfo }) => (
  <div>
    <Navbar pageInfo={pageInfo} />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
