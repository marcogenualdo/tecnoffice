import React from "react";
import { Container } from "react-bootstrap";
import Accordion from "../components/forms/accordion";
import {
  AssistenzaComputer,
  RichiestaAssistenza,
  InvioContatori,
  RichiestaToner,
} from "../components/forms/forms";
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
    title: "Invio Contatori",
    form: <InvioContatori />,
  },
  {
    title: "Assistenza Computer",
    form: <AssistenzaComputer />,
  },
];

const Assistenza = ({ location }) => {
  if (location?.state?.activeForm === undefined)
    location = { state: { activeForm: null } };

  return (
    <Layout pageInfo={{ pageName: "contattaci" }}>
      <Container id="formBox" className="px-lg-5 py-sm-5">
        <Accordion forms={forms} activeItem={location.state.activeForm} />
      </Container>
    </Layout>
  );
};

export default Assistenza;
