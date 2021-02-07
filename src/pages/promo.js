import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../styles/promo.scss";

const PromoEntry = () => (
  <Container className="promo-entry">
    <Row>
      <Col lg={6} className="promo-entry-text">
        <h1>Promo 1</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Col>
      <Col lg={6} className="promo-entry-image">
        <img src="https://www.thinkpro.net/wp-content/uploads/Benefits-Of-Large-Format-Printing-862x517.jpg" />
      </Col>
    </Row>
  </Container>
);

const SecondPage = () => (
  <Layout pageInfo={{ pageName: "promo" }}>
    <SEO title="Promo" />
    <h1>Le nostre prmozioni:</h1>
    <PromoEntry />
    <PromoEntry />
  </Layout>
);

export default SecondPage;
