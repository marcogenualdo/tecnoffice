import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Form from "../components/forms/contattaci";
import Layout from "../components/layout";

const Contattaci = () => (
  <Layout pageInfo={{ pageName: "contattaci" }}>
    <Container className="px-md-5 contattaci-main">
      <Row>
        <Col lg={6} className="px-md-5 py-3">
          <h1>Mandaci una mail</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Col>
        <Col lg={6}>
          <Form />
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default Contattaci;
