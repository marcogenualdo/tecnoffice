import { graphql } from "gatsby";
import Img from "gatsby-image";
import React, { useEffect, useState } from "react";
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
          <div
            className="entry-body"
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
        </Col>
        <Col lg={6} className="entry-img">
          <img src={imgSrc} />
        </Col>
      </Row>
    </Container>
  </div>
);

const serviceBackgroundColors = {
  0: "rgba(255, 198, 88, 0.19)",
  1: "rgba(255, 168, 168, 0.19)",
  2: "rgb(244, 244, 244)",
};

const Services = ({ entries }) => (
  <div className="entries-wrapper">
    {entries.map((entry, index) => (
      <HomeEntry
        title={entry.frontmatter.title}
        imgSrc={entry.frontmatter.image}
        content={entry.html}
        bgColor={serviceBackgroundColors[index % 3]}
      />
    ))}
  </div>
);

const IndexPage = ({ data }) => {
  const HomeIntro = () => (
    <div
      className="home-intro"
      dangerouslySetInnerHTML={{
        __html: data.intro.childMarkdownRemark.html,
      }}
    />
  );

  const introOverlapWidth = 700;
  const [introDoesFit, setIntroDoesFit] = useState(true);
  useEffect(() => {
    setIntroDoesFit(window.innerWidth > introOverlapWidth);
  }, 1000);

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
        {introDoesFit ? <HomeIntro /> : <></>}
      </div>
      {!introDoesFit ? <HomeIntro /> : <></>}

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
      sort: { fields: frontmatter___title, order: ASC }
      filter: { fileAbsolutePath: { regex: "home/services/" } }
    ) {
      nodes {
        frontmatter {
          title
          image
        }
        html
      }
    }
  }
`;
