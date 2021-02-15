import { graphql } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../styles/promo.scss";

const PromoEntry = ({ title, price, description, imgSrc, float, bgColor }) => (
  <div className="promo-entry-wrapper" style={{ backgroundColor: bgColor }}>
    <Container className="promo-entry" style={{ float }}>
      <Row>
        <Col lg={6} className="promo-entry-text">
          <h1>
            <span className="promo-title">{title}</span>
            <span className="promo-price">{price} €</span>
          </h1>
          <p>{description}</p>
        </Col>
        <Col lg={6}>
          <div className="promo-entry-image">
            <img src={imgSrc} />
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

const serviceBackgroundColors = {
  0: "rgba(255, 198, 88, 0.19)",
  1: "rgba(156, 233, 127, 0.19)",
  2: "rgba(255, 88, 88, 0.19)",
  3: "rgb(244, 244, 244)",
};

const SecondPage = ({ data }) => (
  <Layout pageInfo={{ pageName: "promo" }}>
    <SEO title="Promo" />

    <div className="promo-lines-bg">
      <Img fluid={data.linesBg.childImageSharp.fluid} />
    </div>

    <h1 className="promo-header">Le nostre promozioni</h1>

    {data.entries.nodes.map((entry, index) => (
      <PromoEntry
        title={entry.childMarkdownRemark.frontmatter.title}
        price={entry.childMarkdownRemark.frontmatter.price}
        imgSrc={entry.childMarkdownRemark.frontmatter.image}
        description={entry.childMarkdownRemark.excerpt}
        float={index % 2 ? "left" : "right"}
        bgColor={serviceBackgroundColors[index % 4]}
      />
    ))}
    <div style={{ clear: "both" }} />
  </Layout>
);

export default SecondPage;

export const query = graphql`
  query {
    entries: allFile(
      sort: { fields: birthTime, order: DESC }
      filter: { absolutePath: { regex: "/promo/" } }
    ) {
      nodes {
        childMarkdownRemark {
          excerpt(pruneLength: 10000)
          frontmatter {
            image
            title
            price
          }
        }
      }
    }
    linesBg: file(relativePath: { eq: "full-bg-lines.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
