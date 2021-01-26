import React from "react";
import { Row, Col, Container } from "react-bootstrap";
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
    }
  `);

  return (
    <Layout pageInfo={{ pageName: "index" }}>
      <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
      <Container fluid className="px-0 office-bg">
        <Img fluid={data.officeBg.childImageSharp.fluid} />
      </Container>
      <Container fluid className="px-0 lines-bg">
        <Img fluid={data.linesBg.childImageSharp.fluid} />
      </Container>

      <Container className="home-intro px-5">
        <h1>Lorem Ipsum</h1>
        <p>
          This starter also includes a navbar that sticks to the top of the
          screen when the user scrolls past it, and a footer that stays at the
          bottom of the screen.
        </p>
        <p>
          For more documentation on these packages and how they work, please
          refer to the pages linked in the list above.
        </p>
      </Container>
    </Layout>
  );
};

export default IndexPage;
