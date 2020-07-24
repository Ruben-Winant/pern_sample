import React, { useState } from "react";
import { Col, Row, Form, Button, Badge } from "react-bootstrap";

export const CreateArticleForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image_path: "",
    placedDate: (
      new Date().getDate() +
      "-" +
      (new Date().getMonth() + 1) +
      "-" +
      new Date().getFullYear()
    ).toString(),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const SubmitHandler = (e: Event) => {
    e.preventDefault();
    alert(formData.title);
    alert(formData.content);
    alert(formData.placedDate);
    alert(formData.image_path);
  };

  return (
    <Col>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm={10}>
            <h2>
              Artikel aanmaken <Badge variant="danger">Admin only</Badge>
            </h2>
            <p>
              Vul onderstaande gegevens in om een nieuw artikel aan te maken.
              <br />
              verplichte velden aangeduid met *
            </p>
          </Form.Label>
        </Form.Group>
        <Form.Group as={Row} controlId="newsFormTitle">
          <Form.Label column sm={2}>
            Titel *
          </Form.Label>
          <Col sm={10}>
            <Form.Control onChange={handleChange} name="title" type="text" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="newsFormContent">
          <Form.Label column sm={2}>
            Inhoud *
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              onChange={handleChange}
              name="content"
              as="textarea"
            />
          </Col>
        </Form.Group>
        <Form.Group inline as={Row} controlId="newsFormImageFile">
          <Form.Label column sm={2}>
            Afbeelding
          </Form.Label>
          <Col sm={6}>
            <Form.File
              onChange={handleChange}
              name="image_path"
              id="newsFormImageFileId"
            />
          </Col>
          <Col style={{ textAlign: "right" }}>
            <Button
              type="submit"
              onClick={(e: any) => {
                SubmitHandler(e);
              }}
            >
              Aanmaken
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </Col>
  );
};
