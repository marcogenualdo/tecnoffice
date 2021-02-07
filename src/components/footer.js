import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Row, Col, Container } from "react-bootstrap";

const Footer = () => {
  const {
    site: { siteMetadata: businessData },
    footerBg,
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            phone
            email
            address
            addressLink
          }
        }
        footerBg: file(relativePath: { eq: "footer-unique.png" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  return (
    <footer>
      <Container fluid className="footer-content">
        <Row>
          <Col lg={6} md={8}>
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
          <Col sm={6}></Col>
        </Row>
      </Container>
      <div className="footer-bg">
        <Img fluid={footerBg.childImageSharp.fluid} />
      </div>
    </footer>
  );
};

export default Footer;
