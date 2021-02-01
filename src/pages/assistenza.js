import React from "react";
import { Container } from "react-bootstrap";
import Accordion from "../components/forms/accordion";
import Form from "../components/forms/contattaci";
import Layout from "../components/layout";

export const forms = [
  {
    title: "Richiesta Assistenza",
    form: <Form />,
  },
  {
    title: "Richiesta Toner",
    form: <Form />,
  },
  {
    title: "Richiesta Contatori",
    form: <Form />,
  },
  {
    title: "Assistenza Computer",
    form: <Form />,
  },
];

const Assistenza = ({ location }) => {
  if (location?.state?.activeForm == undefined)
    location = { state: { activeForm: null } };

  return (
    <Layout pageInfo={{ pageName: "contattaci" }}>
      <Container className="px-md-5">
        <Accordion forms={forms} activeItem={location.state.activeForm} />
      </Container>
    </Layout>
  );
};

export default Assistenza;
