import React, { useContext } from "react";
import { Col, Form } from "react-bootstrap";
import { MailForm, MandatoryField, FormContext } from "./form-lib";

export const FormContattaci = () => {
  const AdditionalFields = () => {
    const { fields, handleChange } = useContext(FormContext);

    return (
      <Form.Group controlId="note">
        <Form.Label>Note</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="notes"
          placeholder="Note..."
          onChange={handleChange}
          value={fields.notes}
        />
      </Form.Group>
    );
  };

  return (
    <MailForm>
      <AdditionalFields />
    </MailForm>
  );
};

export const RichiestaAssistenza = () => {
  const AdditionalFields = () => {
    const { fields, handleChange } = useContext(FormContext);

    return (
      <>
        <Form.Row>
          <Form.Group as={Col} sm={6} controlId="formGridModel">
            <Form.Label>Modello</Form.Label>
            <Form.Control
              placeholder="Modello"
              required
              name="model"
              onChange={handleChange}
              value={fields.model}
            />
            <MandatoryField />
          </Form.Group>
          <Form.Group as={Col} sm={6} controlId="formGridId">
            <Form.Label>Matricola</Form.Label>
            <Form.Control
              placeholder="Matricola"
              required
              onChange={handleChange}
              name="productId"
              value={fields.productId}
            />
            <MandatoryField />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="notes">
          <Form.Label>Note</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="notes"
            placeholder="Note..."
            onChange={handleChange}
            value={fields.notes}
          />
        </Form.Group>
      </>
    );
  };

  return (
    <MailForm>
      <AdditionalFields />
    </MailForm>
  );
};

export const RichiestaToner = () => {
  const AdditionalFields = () => {
    const { fields, handleChange } = useContext(FormContext);

    return (
      <>
        <Form.Row>
          <Form.Group as={Col} sm={4} controlId="formGridModel">
            <Form.Label>Modello</Form.Label>
            <Form.Control
              placeholder="Modello"
              required
              name="model"
              onChange={handleChange}
              value={fields.model}
            />
            <MandatoryField />
          </Form.Group>
          <Form.Group as={Col} sm={4} controlId="formGridId">
            <Form.Label>Matricola</Form.Label>
            <Form.Control
              placeholder="Matricola"
              required
              onChange={handleChange}
              name="productId"
              value={fields.productId}
            />
            <MandatoryField />
          </Form.Group>

          <Form.Group as={Col} sm={4} controlId="formControlSelect1">
            <Form.Label>Colore Toner</Form.Label>
            <Form.Control
              as="select"
              required
              onChange={handleChange}
              name="tonerColor"
              value={fields.tonerColor}
            >
              <option>Nero</option>
              <option>Ciano</option>
              <option>Magenta</option>
              <option>Giallo</option>
            </Form.Control>
            <MandatoryField />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="notes">
          <Form.Label>Note</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="notes"
            placeholder="Note..."
            onChange={handleChange}
            value={fields.notes}
          />
        </Form.Group>
      </>
    );
  };

  return (
    <MailForm>
      <AdditionalFields />
    </MailForm>
  );
};

export const RichiestaContatori = () => {
  const AdditionalFields = () => {
    const { fields, handleChange } = useContext(FormContext);

    return (
      <>
        <Form.Row>
          <Form.Group as={Col} sm={6} controlId="formGridModel">
            <Form.Label>Modello</Form.Label>
            <Form.Control
              placeholder="Modello"
              required
              onChange={handleChange}
              name="model"
              value={fields.model}
            />
            <MandatoryField />
          </Form.Group>
          <Form.Group as={Col} sm={6} controlId="formGridId">
            <Form.Label>Matricola</Form.Label>
            <Form.Control
              placeholder="Matricola"
              required
              onChange={handleChange}
              name="productId"
              value={fields.productId}
            />
            <MandatoryField />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} sm={6} controlId="formGridBN">
            <Form.Label>Contatore Biano e Nero</Form.Label>
            <Form.Control
              placeholder="Contatore Bianco e Nero"
              required
              onChange={handleChange}
              name="counterBW"
              value={fields.counterBW}
            />
            <MandatoryField />
          </Form.Group>
          <Form.Group as={Col} sm={6} controlId="formGridCol">
            <Form.Label>Contatore Colore</Form.Label>
            <Form.Control
              placeholder="Contatore Colore"
              required
              onChange={handleChange}
              name="counterColor"
              value={fields.counterColor}
            />
            <MandatoryField />
          </Form.Group>
        </Form.Row>
      </>
    );
  };

  return (
    <MailForm>
      <AdditionalFields />
    </MailForm>
  );
};

export const AssistenzaComputer = FormContattaci;
