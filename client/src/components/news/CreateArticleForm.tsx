import React, { FormEvent, useState } from "react";
import { Col, Row, Form, Badge, Button, Modal } from "react-bootstrap";
import * as yup from "yup";
import { useFormik } from "formik";

export const CreateArticleForm = () => {
  const [res, setResponse] = useState({
    statusCode: 0,
    statusMessage: "",
  });
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

        setResponse({
          ...res,
          statusCode: response.status,
          statusMessage: response.statusText,
        });

        setShow(true);
      } catch (err) {
        setShow(true);
        console.error(err.message);
      }
    },
  });

  return (
    <Col>
      <Form
        id="createArticleFormId"
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
        <Modal.Header
          style={
            res.statusCode === 200
              ? { backgroundColor: "#2ECC71", color: "white" }
              : { backgroundColor: "#FF6868", color: "white" }
          }
        >
          <Modal.Title id="contained-modal-title-vcenter">
            {res.statusCode === 200
              ? "Article succesvol toegevoegd!"
              : "Er is een probleem opgetreden."}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {res.statusCode === 200 ? (
            <>
              <Row>
                <Col>
                  <h5>{"Titel: "}</h5>
                </Col>
                <Col>
                  <p>{values.title}</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h5>{"Inhoud: "}</h5>
                </Col>
                <Col>
                  <p>{values.content}</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h5>{"Afbeelding: "}</h5>
                </Col>
                <Col>
                  <p>
                    {values.image_path
                      ? values.image_path.replace(/^.*[\\\/]/, "")
                      : "niet meegegeven"}
                  </p>
                </Col>
              </Row>
            </>
          ) : (
            <>
              <Row>
                <Col>
                  <h5>{"Error: " + res.statusCode}</h5>
                </Col>
                <Col>
                  <p>{res.statusMessage}</p>
                </Col>
              </Row>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          {res.statusCode === 200 ? (
            <Button variant="info" onClick={() => setShow(false)}>
              Bewerken
            </Button>
          ) : null}
          <Button onClick={() => setShow(false)}>Sluiten</Button>
        </Modal.Footer>
      </Modal>
    </Col>
  );
};
