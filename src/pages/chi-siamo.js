import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Container, Col, Row } from "react-bootstrap";
import Layout from "../components/layout";
import "../styles/chi-siamo.scss";

const ChiSiamo = () => {
  const {
    site: { siteMetadata: businessData },
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
      }
    `
  );

  return (
    <Layout pageInfo={{ pageName: "contattaci" }}>
      <Container fluid className="main-container">
        <Row>
          <Col sm={8} className="main-text">
            <h1>Chi Siamo</h1>
            <p>
              This starter also includes a navbar that sticks to the top of the
              screen when the user scrolls past it, and a footer that stays at
              the bottom of the screen.
            </p>
          </Col>
          <Col sm={4} className="contatti">
            <h1>Contatti</h1>
            <ul>
              <li>Email: {businessData.email}</li>
              <li>Telefono: {businessData.phone}</li>
              <li>
                <a href={businessData.addressLink}>
                  Indirizzo: {businessData.address}
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default ChiSiamo;
