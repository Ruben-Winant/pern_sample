import React, { FormEvent } from "react";
import { Col, Row, Form, Badge, Button } from "react-bootstrap";
import * as yup from "yup";
import { useFormik } from "formik";
import * as path from "path";

export const CreateArticleForm = () => {
  const validationSchema = yup.object().shape({
    title: yup.string().required(),

    content: yup.string().required(),

    image_path: yup.string().notRequired(),
  });

  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: {
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
    },
    validationSchema,
    onSubmit(values) {
      var fileName = path.basename(values.image_path);
      console.log(fileName);
    },
  });

  return (
    <Col>
      <Form
        noValidate
        onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}
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
    </Col>
  );
};
