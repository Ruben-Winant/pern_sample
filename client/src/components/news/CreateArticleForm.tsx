import React, { FormEvent, useState } from "react";
import { Col, Row, Form, Badge, Button, Modal } from "react-bootstrap";
import * as yup from "yup";
import { useFormik } from "formik";

export const CreateArticleForm = () => {
  const [response, setResponse] = useState([]);
  const [show, setShow] = useState(false);

  const validationSchema = yup.object().shape({
    title: yup.string().required("Titel mag niet leeg zijn."),

    content: yup.string().required("Inhoud mag niet leeg zijn."),

    image_path: yup.string().notRequired(),
  });

  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      title: "",
      content: "",
      image_path: "",
    },
    validationSchema,
    async onSubmit(values) {
      const title = values.title;
      const content = values.content;
      const image_path = values.image_path.replace(/^.*[\\\/]/, "");
      const body = { title, content, image_path };

      try {
        const response = await fetch("http://localhost:5000/news/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });

        setResponse(response); //! set response as state to show modal when worked with

        setShow(true);
      } catch (err) {
        console.error(err.message);
      }
    },
  });

  return (
    <Col>
      <Form
        noValidate
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
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
            <Form.Control
              value={values.title}
              onChange={handleChange}
              name="title"
              type="text"
              isInvalid={!!errors.title}
              isValid={touched.title && !errors.title}
            />
            <Form.Control.Feedback type="invalid">
              {errors.title}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="newsFormContent">
          <Form.Label column sm={2}>
            Inhoud *
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              value={values.content}
              onChange={handleChange}
              name="content"
              as="textarea"
              isInvalid={!!errors.content}
              isValid={touched.content && !errors.content}
            />
            <Form.Control.Feedback type="invalid">
              {errors.content}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>
        <Form.Group inline as={Row} controlId="newsFormImageFile">
          <Form.Label column sm={2}>
            Afbeelding
          </Form.Label>
          <Col sm={6}>
            <Form.File
              value={values.image_path}
              onChange={handleChange}
              name="image_path"
              id="newsFormImageFileId"
              accept="image/*"
            />
          </Col>
          <Col style={{ textAlign: "right" }}>
            <Button type="submit">Aanmaken</Button>
          </Col>
        </Form.Group>
      </Form>

      <Modal
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Col>
  );
};
