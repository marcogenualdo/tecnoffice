import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";

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

const Contattaci = () => {
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

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contattaci", ...fields }),
      })
        .then(() => alert("Email inviata con successo!"))
        .catch(error => alert(error));

      event.preventDefault();
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
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

      <Form.Group controlId="note">
        <Form.Label>Note</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="notes"
          placeholder="Note..."
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Invia
      </Button>
    </Form>
  );
};

export default Contattaci;
