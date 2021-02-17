import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { FormContattaci } from "../components/forms/forms";
import Layout from "../components/layout";

const Contattaci = () => (
  <Layout pageInfo={{ pageName: "contattaci" }}>
    <Container className="px-lg-5 contattaci-main">
      <Row>
        <Col lg={6} className="px-lg-3 py-3">
          <h1>Mandaci una mail</h1>
          <p style={{ fontSize: "1.1rem" }}>
            Per maggiori informazioni sui nostri servizi puoi raggiungerci
            direttamente compilando questo form. Un membro del nostro staff ti
            ricontatterà a breve.
          </p>
        </Col>
        <Col lg={6}>
          <FormContattaci />
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default Contattaci;
