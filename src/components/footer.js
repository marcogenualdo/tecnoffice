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
          <Col sm={6}>
            <ul>
              <li>
                <i>e-mail:</i> <span>{businessData.email}</span>
              </li>
              <li>
                <i>Telefono:</i> <span>{businessData.phone}</span>
              </li>
              <li>
                <i>Indirizzo:</i>
                <span>
                  <a href={businessData.addressLink}>{businessData.address}</a>
                </span>
              </li>
            </ul>
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
