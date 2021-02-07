import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import "../styles/home.scss";

const HomeEntry = ({ title, imgSrc }) => (
  <Container fluid className="home-entry">
    <Row>
      <Col lg={6} className="entry-text">
        <h1>{title}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Col>
      <Col lg={6} className="entry-img">
        <div className="image-wrap">
          <img src={imgSrc} />
        </div>
      </Col>
    </Row>
  </Container>
);

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      officeBg: file(relativePath: { eq: "home-bg-office.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      linesBg: file(relativePath: { eq: "home-bg-lines.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logoRicoh: file(relativePath: { eq: "logo-ricoh.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout pageInfo={{ pageName: "index" }}>
      <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
      <div className="office-bg">
        <Img fluid={data.officeBg.childImageSharp.fluid} />
      </div>
      <div className="lines-bg">
        <Img fluid={data.linesBg.childImageSharp.fluid} />
      </div>

      <div className="main-image-box">
        <div className="home-intro">
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className="ricoh-hero">
        <h2>Rivenditore autorizzato</h2>
        <span className="ricoh-logo">
          <Img fluid={data.logoRicoh.childImageSharp.fluid} />
        </span>
      </div>

      <HomeEntry
        title="Entry 1"
        imgSrc="https://www.thephoblographer.com/wp-content/uploads/2016/12/Chris-Gampat-The-Phoblographer-Epson-P800-printer-review-product-photos-9-770x513.jpg"
      />
      <HomeEntry
        title="Entry 2"
        imgSrc="http://cdn.arstechnica.net/wp-content/uploads/2011/02/ask-ars-color-printing.jpg"
      />
    </Layout>
  );
};

export default IndexPage;
