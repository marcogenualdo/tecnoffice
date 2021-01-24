import React from "react";
import { Row, Col, Container, ListGroup } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import "../styles/home.scss";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      officeBg: file(relativePath: { eq: "home-bg-office.png" }) {
        childImageSharp {
          # Specify a fluid image and fragment
          # The default maxWidth is 800 pixels
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      linesBg: file(relativePath: { eq: "home-bg-lines.png" }) {
        childImageSharp {
          # Specify a fluid image and fragment
          # The default maxWidth is 800 pixels
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout pageInfo={{ pageName: "index" }}>
      <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
      <Container fluid className="px-0 office-bg ">
        <Img fluid={data.officeBg.childImageSharp.fluid} />
      </Container>
      <Container fluid className="px-0 lines-bg">
        <Img fluid={data.linesBg.childImageSharp.fluid} />
      </Container>
      <Container className="home-intro">
        <Row>
          <Col>
            <h1>Lorem Ipsum</h1>
          </Col>
        </Row>
        <Row className="home-intro-text">
          <Col>
            <p>
              This starter also includes a navbar that sticks to the top of the
              screen when the user scrolls past it, and a footer that stays at
              the bottom of the screen.
            </p>
            <p>
              For more documentation on these packages and how they work, please
              refer to the pages linked in the list above.
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default IndexPage;
