import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Row, Col, Container } from "react-bootstrap";
import footerBg from "../images/footer-bg.svg";

const Footer = () => {
  const {
    businessData: {
      childMarkdownRemark: { frontmatter: businessData },
    },
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
        <img width="100%" src={footerBg} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
