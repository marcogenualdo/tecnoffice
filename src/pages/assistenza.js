import React from "react";
import { Container } from "react-bootstrap";
import Accordion from "../components/forms/accordion";
import {
  AssistenzaComputer,
  RichiestaAssistenza,
  RichiestaContatori,
  RichiestaToner,
} from "../components/forms/assistenza";
import Layout from "../components/layout";

export const forms = [
  {
    title: "Richiesta Assistenza",
    form: <RichiestaAssistenza />,
  },
  {
    title: "Richiesta Toner",
    form: <RichiestaToner />,
  },
  {
    title: "Richiesta Contatori",
    form: <RichiestaContatori />,
  },
  {
    title: "Assistenza Computer",
    form: <AssistenzaComputer />,
  },
];

const Assistenza = ({ location }) => {
  if (location?.state?.activeForm == undefined)
    location = { state: { activeForm: null } };

  return (
    <Layout pageInfo={{ pageName: "contattaci" }}>
      <Container className="px-lg-5 py-sm-5">
        <Accordion forms={forms} activeItem={location.state.activeForm} />
      </Container>
    </Layout>
  );
};

export default Assistenza;
