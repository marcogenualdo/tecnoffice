import { graphql } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../styles/promo.scss";

const PromoEntry = ({ content, float, bgColor }) => {
  const title = content.frontmatter.title;
  const price = content.frontmatter.price;
  const imgSrc = content.frontmatter.featuredImage.childImageSharp.fluid;
  const description = content.html;

  return (
    <div className="promo-entry-wrapper" style={{ backgroundColor: bgColor }}>
      <Container className="promo-entry" style={{ float }}>
        <h1>
          <span className="promo-title">{title}</span>
          <span className="promo-price">{price} €</span>
        </h1>
        <Row className="promo-entry-body">
          <Col md={6} className="promo-entry-text">
            <div
              className="entry-body"
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            />
          </Col>
          <Col md={6} className="promo-entry-image-wrapper">
            <div className="promo-entry-image">
              <Img fluid={imgSrc} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const serviceBackgroundColors = {
  0: "rgba(255, 198, 88, 0.19)",
  1: "rgba(156, 233, 127, 0.19)",
  2: "rgba(255, 88, 88, 0.19)",
  3: "rgb(244, 244, 244)",
};

const SecondPage = ({ data }) => (
  <Layout pageInfo={{ pageName: "promo" }}>
    <SEO
      title="Promo"
      keywords={[
        `tecnoffice`,
        `printing`,
        `multifunzione`,
        `stampante`,
        `stampanti`,
        `ufficio`,
        `fotocopie`,
        `fotocopiatrici`,
        `roma`,
        `offerte`,
        `offerta`,
        `promozione`,
      ]}
    />

    <div className="promo-lines-bg">
      <Img fluid={data.linesBg.childImageSharp.fluid} />
    </div>

    <h1 className="promo-header">Le nostre promozioni</h1>

    {data.entries.nodes.map((entry, index) => (
      <PromoEntry
        content={entry.childMarkdownRemark}
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
      filter: { absolutePath: { regex: "/promo//" } }
    ) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            price
          }
          html
        }
      }
    }
    linesBg: file(relativePath: { eq: "full-bg-lines.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
