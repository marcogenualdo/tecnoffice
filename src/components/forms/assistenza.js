import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import Contattaci from "./contattaci";

const MandatoryField = () => (
  <Form.Control.Feedback type="invalid">
    Campo Obbligatorio.
  </Form.Control.Feedback>
);

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export const RichiestaAssistenza = () => {
  const [validated, setValidated] = useState(false);
  const [fields, setFields] = useState({});

  const handleChange = event => {
    setFields({ ...fields, [event.target.name]: event.target.value });
    setValidated(false);
  };

  const handleSubmit = event => {
    // validation
    const form = event.currentTarget;
    const isCorrect = form.checkValidity();

    if (!isCorrect) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    // sending
    if (isCorrect) {
      console.log(fields);

      const subject = `${fields.name} di ${fields.entity} ha richiesto assistenza.`;
      const body = JSON.stringify(fields);

      fetch("/contattaci", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contattaci", subject, body }),
      })
        .then(() => alert("Email inviata con successo!"))
        .catch(error => alert(error));

      event.preventDefault();
    }
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      name="contattaci"
      data-netlify="true"
    >
      <Form.Row>
        <Form.Group as={Col} sm={6} controlId="formGridName">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Nome"
            required
            onChange={handleChange}
            value={fields.name}
          />
          <MandatoryField />
        </Form.Group>

        <Form.Group as={Col} sm={6} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="email@example.it"
            required
            onChange={handleChange}
            value={fields.email}
          />
          <MandatoryField />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} sm={6} controlId="formGridTel">
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            placeholder="Telefono"
            name="phone"
            type="tel"
            onChange={handleChange}
            value={fields.phone}
          />
          <MandatoryField />
        </Form.Group>
        <Form.Group as={Col} sm={6} controlId="formGridRag">
          <Form.Label>Ragione Sociale</Form.Label>
          <Form.Control
            type="text"
            name="entity"
            placeholder="Privato/Azienda"
            required
            onChange={handleChange}
          />
          <MandatoryField />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} sm={6} controlId="formGridModel">
          <Form.Label>Modello</Form.Label>
          <Form.Control
            placeholder="Modello"
            required
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group as={Col} sm={6} controlId="formGridId">
          <Form.Label>Matricola</Form.Label>
          <Form.Control placeholder="Matricola" />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridNote">
        <Form.Label>Note</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Note..." />
      </Form.Group>

      <Button variant="primary" type="submit">
        Invia
      </Button>
    </Form>
  );
};

export const RichiestaToner = () => (
  <Form>
    <Form.Row>
      <Form.Group as={Col} sm={6} controlId="formGridName">
        <Form.Label>Nome</Form.Label>
        <Form.Control type="text" placeholder="Nome" />
      </Form.Group>

      <Form.Group as={Col} sm={6} controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="email@example.it" />
      </Form.Group>
    </Form.Row>

    <Form.Row>
      <Form.Group as={Col} sm={6} controlId="formGridTel">
        <Form.Label>Telefono</Form.Label>
        <Form.Control placeholder="Telefono" />
      </Form.Group>
      <Form.Group as={Col} sm={6} controlId="formGridRag">
        <Form.Label>Ragione Sociale</Form.Label>
        <Form.Control placeholder="Privato/Azienda" />
      </Form.Group>
    </Form.Row>

    <Form.Row>
      <Form.Group as={Col} sm={4} controlId="formGridModel">
        <Form.Label>Modello</Form.Label>
        <Form.Control placeholder="Modello" />
      </Form.Group>

      <Form.Group as={Col} sm={4} controlId="formGridId">
        <Form.Label>Matricola</Form.Label>
        <Form.Control placeholder="Matricola" />
      </Form.Group>

      <Form.Group as={Col} sm={4} controlId="formControlSelect1">
        <Form.Label>Colore Toner</Form.Label>
        <Form.Control as="select">
          <option>Nero</option>
          <option>Ciano</option>
          <option>Magenta</option>
          <option>Giallo</option>
        </Form.Control>
      </Form.Group>
    </Form.Row>

    <Form.Group controlId="formGridNote">
      <Form.Label>Note</Form.Label>
      <Form.Control as="textarea" rows={3} placeholder="Note..." />
    </Form.Group>

    <Button variant="primary" type="submit">
      Invia
    </Button>
  </Form>
);

export const RichiestaContatori = () => (
  <Form>
    <Form.Row>
      <Form.Group as={Col} sm={6} controlId="formGridName">
        <Form.Label>Nome</Form.Label>
        <Form.Control type="text" placeholder="Nome" />
      </Form.Group>

      <Form.Group as={Col} sm={6} controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="email@example.it" />
      </Form.Group>
    </Form.Row>

    <Form.Row>
      <Form.Group as={Col} sm={6} controlId="formGridTel">
        <Form.Label>Telefono</Form.Label>
        <Form.Control placeholder="Telefono" />
      </Form.Group>
      <Form.Group as={Col} sm={6} controlId="formGridRag">
        <Form.Label>Ragione Sociale</Form.Label>
        <Form.Control placeholder="Privato/Azienda" />
      </Form.Group>
    </Form.Row>

    <Form.Row>
      <Form.Group as={Col} sm={6} controlId="formGridModel">
        <Form.Label>Modello</Form.Label>
        <Form.Control placeholder="Modello" />
      </Form.Group>
      <Form.Group as={Col} sm={6} controlId="formGridId">
        <Form.Label>Matricola</Form.Label>
        <Form.Control placeholder="Matricola" />
      </Form.Group>
      <Form.Group as={Col} sm={6} controlId="formGridBN">
        <Form.Label>Contatore Biano e Nero</Form.Label>
        <Form.Control placeholder="Contatore Bianco e Nero" />
      </Form.Group>
      <Form.Group as={Col} sm={6} controlId="formGridCol">
        <Form.Label>Contatore Colore</Form.Label>
        <Form.Control placeholder="Contatore Colore" />
      </Form.Group>
    </Form.Row>

    <Button variant="primary" type="submit">
      Invia
    </Button>
  </Form>
);

export const AssistenzaComputer = Contattaci;
