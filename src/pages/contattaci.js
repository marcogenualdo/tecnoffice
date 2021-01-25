import React from "react";
import { Container } from "react-bootstrap";
import Form from "../components/forms/contattaci";
import Layout from "../components/layout";

const contattaci = () => (
  <Layout pageInfo={{ pageName: "contattaci" }}>
    <Container className="px-md-5">
      <Form />
    </Container>
  </Layout>
);

export default contattaci;
