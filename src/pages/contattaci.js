import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Form from "../components/forms/contattaci";
import Layout from "../components/layout";

const contattaci = () => (
  <Layout pageInfo={{ pageName: "contattaci" }}>
    <Container className="px-md-5 contattaci-main">
      <Row>
        <Col sm={6} className="px-md-5 py-3">
          <h1>Mandaci una mail</h1>
          <p>
            This starter also includes a navbar that sticks to the top of the
            screen when the user scrolls past it, and a footer that stays at the
            bottom of the screen.
          </p>
        </Col>
        <Col sm={6}>
          <Form />
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default contattaci;
