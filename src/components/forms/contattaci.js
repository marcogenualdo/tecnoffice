import React from "react";
import { Button, Col, Form } from "react-bootstrap";

const Contattaci = () => (
  <Form>
    <Form.Row>
      <Form.Group as={Col} sm={6} controlId="formGridPassword">
        <Form.Label>Nome</Form.Label>
        <Form.Control type="text" placeholder="Nome" />
      </Form.Group>

      <Form.Group as={Col} sm={6} controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="email@example.it" />
      </Form.Group>
    </Form.Row>

    <Form.Row>
      <Form.Group as={Col} sm={6} controlId="formGridState">
        <Form.Label>Telefono</Form.Label>
        <Form.Control placeholder="Telefono" />
      </Form.Group>
      <Form.Group as={Col} sm={6} controlId="formGridAddress1">
        <Form.Label>Ragione Sociale</Form.Label>
        <Form.Control placeholder="Privato/Azienda" />
      </Form.Group>
    </Form.Row>

    <Form.Group id="formGridCheckbox">
      <Form.Label>Note</Form.Label>
      <Form.Control as="textarea" rows={3} placeholder="Note..." />
    </Form.Group>

    <Button variant="primary" type="submit">
      Invia
    </Button>
  </Form>
);

export default Contattaci;
