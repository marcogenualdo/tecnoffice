import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Layout from "../components/layout";
import "../styles/chi-siamo.scss";

const chiSiamo = () => (
  <Layout pageInfo={{ pageName: "contattaci" }}>
    <Container fluid className="main-container">
      <Row>
        <Col sm={8} className="main-text">
          <h1>Chi Siamo</h1>
          <p>
            This starter also includes a navbar that sticks to the top of the
            screen when the user scrolls past it, and a footer that stays at the
            bottom of the screen.
          </p>
        </Col>
        <Col sm={4} className="contatti">
          <h1>Contatti</h1>
          <ul>
            <li>Email: STUB</li>
            <li>Telefono: STUB</li>
            <li>Indirizzo: STUB</li>
          </ul>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default chiSiamo;
