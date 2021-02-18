import React, { createContext, useState } from "react";
import { Button, Col, Form } from "react-bootstrap";

const fieldNameMap = {
  name: "Nome",
  email: "email",
  phone: "Telefono",
  entity: "Ragione Sociale",
  model: "Modello",
  productId: "Matricola",
  tonerColor: "Colore Toner",
  counterBW: "Contatore Bianco e Nero",
  counterColor: "Contatore Colore",
  notes: "Note",
};

export const MandatoryField = () => (
  <Form.Control.Feedback type="invalid">
    Campo Obbligatorio.
  </Form.Control.Feedback>
);

export const FormContext = createContext({ fields: {} });

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const makeMail = (fields, formTitle) => {
  const subject = `${fields.name} di ${fields.entity} ha compilato il form ${formTitle}.`;

  // excluding subject and body fields from email body entries
  const bodyFields = {};
  for (let key in fields) {
    if (key !== "" && key !== "subject" && key !== "body") {
      bodyFields[key] = fields[key];
    }
  }

  // composing email body
  const body = Object.keys(bodyFields)
    .map(key => `<h4>${fieldNameMap[key]}</h4><p>${fields[key]}</p>`)
    .join("<br>");

  return { subject, body };
};

export const MailForm = ({ formTitle, children }) => {
  const [validated, setValidated] = useState(false);
  const [fields, setFields] = useState({});

  const handleChange = event => {
    setFields({ ...fields, [event.target.name]: event.target.value });
    setValidated(false);
  };

  const formCtx = { fields, handleChange };

  const clearAll = () => {
    let newFields = {};
    for (let key in fields) {
      newFields[key] = "";
    }
    setFields(newFields);
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
      const { subject, body } = makeMail(fields, formTitle);

      console.log(`Sending mail\nSubject: ${subject}\nBody: ${body}`);

      fetch("/contattaci", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contattaci", ...fields, subject, body }),
      })
        .then(resp => {
          if (!resp.ok) throw new Error(`Returned status code ${resp.status}`);
        })
        .then(() => alert("Email inviata con successo!"))
        .catch(error => {
          console.error(error);
          alert(
            "Siamo spiacenti, si è verificato un errore nell'invio dell'email, ti preghiamo di contattarci direttamente all'indirizzo indicato in fondo a questa pagina."
          );
        });

      // clearing fields
      clearAll();
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
      <Form.Row style={{ display: "none" }}>
        <Form.Group as={Col} sm={6} controlId="formGridSubject">
          <Form.Control
            type="text"
            name="subject"
            placeholder="Subject"
            value={fields.subject}
          />
        </Form.Group>
        <Form.Group as={Col} sm={6} controlId="formGridBody">
          <Form.Control
            type="text"
            name="body"
            placeholder="Body"
            value={fields.body}
          />
        </Form.Group>
      </Form.Row>

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
        <Form.Group as={Col} sm={6} controlId="formGridRag">
          <Form.Label>Ragione Sociale</Form.Label>
          <Form.Control
            type="text"
            name="entity"
            placeholder="Privato/Azienda"
            required
            onChange={handleChange}
            value={fields.entity}
          />
          <MandatoryField />
        </Form.Group>

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
      </Form.Row>

      <FormContext.Provider value={formCtx}>{children}</FormContext.Provider>

      <Button variant="primary" type="submit">
        Invia
      </Button>
    </Form>
  );
};
