import { graphql } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../styles/home.scss";

const HomeEntry = ({ title, content, imgSrc, bgColor }) => (
  <div className="home-entry-wrapper" style={{ backgroundColor: bgColor }}>
    <Container fluid className="home-entry">
      <Row>
        <Col lg={6} className="entry-text">
          <h1>{title}</h1>
          <p>{content}</p>
        </Col>
        <Col lg={6} className="entry-img">
          <div className="image-wrap">
            <img src={imgSrc} />
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

const Services = ({ entries }) => (
  <div className="entries-wrapper">
    <div className="entries-header">
      <h1>I nostri servizi</h1>
    </div>
    {entries.map((entry, index) => (
      <HomeEntry
        title={entry.frontmatter.title}
        imgSrc={entry.frontmatter.image}
        content={entry.excerpt}
        bgColor={index % 2 ? "#f4f4f4" : "#fff"}
      />
    ))}
  </div>
);

const IndexPage = ({ data }) => {
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
        <div
          className="home-intro"
          dangerouslySetInnerHTML={{
            __html: data.intro.childMarkdownRemark.html,
          }}
        />
      </div>
      <div className="ricoh-hero">
        <h2>Rivenditore autorizzato</h2>
        <span className="ricoh-logo">
          <Img fluid={data.logoRicoh.childImageSharp.fluid} />
        </span>
      </div>
      <Services entries={data.services.nodes} />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
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
    intro: file(relativePath: { eq: "home/intro.md" }) {
      childMarkdownRemark {
        html
      }
    }
    services: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "home/services/" } }
    ) {
      nodes {
        frontmatter {
          title
          image
        }
        excerpt(pruneLength: 10000)
      }
    }
  }
`;
