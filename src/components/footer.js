import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { Row, Col, Container } from "react-bootstrap";

const Footer = () => {
  const {
    businessData: {
      childMarkdownRemark: { frontmatter: businessData },
    },
    footerBg,
  } = useStaticQuery(graphql`
    query {
      businessData: file(relativePath: { eq: "business-info.md" }) {
        childMarkdownRemark {
          frontmatter {
            email
            phone
            address
            addressLink
          }
        }
      }
      footerBg: file(relativePath: { eq: "footer-unique.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <footer>
      <Container fluid className="footer-content">
        <Row>
          <Col lg={6} md={9}>
            <div className="footer-entry">
              <i>e-mail:</i> <span>{businessData.email}</span>
            </div>
            <div className="footer-entry">
              <i>Telefono:</i> <span>{businessData.phone}</span>
            </div>
            <div className="footer-entry">
              <i>Indirizzo:</i>
              <span>
                <a href={businessData.addressLink} target="blank">
                  {businessData.address}
                </a>
              </span>
            </div>
          </Col>
          <Col sm={4} className="footer-attributions"></Col>
        </Row>
      </Container>
      <div className="footer-bg">
        <Img fluid={footerBg.childImageSharp.fluid} />
      </div>
    </footer>
  );
};

export default Footer;
