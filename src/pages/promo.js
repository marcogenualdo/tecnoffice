import { graphql } from "gatsby";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../styles/promo.scss";

const PromoEntry = ({ title, price, description, imgSrc, float }) => (
  <Container className="promo-entry" style={{ float }}>
    <Row>
      <Col lg={6} className="promo-entry-text">
        <h1>
          {title} - {price}€
        </h1>
        <p>{description}</p>
      </Col>
      <Col lg={6} className="promo-entry-image">
        <img src={imgSrc} />
      </Col>
    </Row>
  </Container>
);

const SecondPage = ({ data }) => (
  <Layout pageInfo={{ pageName: "promo" }}>
    <SEO title="Promo" />
    <h1>Le nostre promozioni:</h1>

    {data.entries.nodes.map((entry, index) => (
      <PromoEntry
        title={entry.childMarkdownRemark.frontmatter.title}
        price={entry.childMarkdownRemark.frontmatter.price}
        imgSrc={entry.childMarkdownRemark.frontmatter.image}
        description={entry.childMarkdownRemark.excerpt}
        float={index % 2 ? "left" : "right"}
      />
    ))}
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
  }
`;
