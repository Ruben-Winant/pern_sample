import React, { useState } from "react";
import { Col, Row, Button, Form } from "react-bootstrap";
import { FaTwitter, FaFacebookSquare, FaYoutube } from "react-icons/fa";

export const Follow = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const SubmitHandler = (e: Event) => {
    e.preventDefault();
    alert(formData.email);
  };

  return (
    <Col className="m-1" style={{ textAlign: "center" }}>
      <Form>
        <Form.Group as={Row} style={{ justifyContent: "center" }}>
          <Form.Label column sm={10}>
            <h4>
              <b>Volg ons op</b>
            </h4>
          </Form.Label>
        </Form.Group>
        <Form.Group
          inline
          as={Row}
          controlId="newsFormImageFile"
          style={{ justifyContent: "center" }}
        >
          <Col>
            <FaTwitter onClick={() => alert("twitter")} size={55} />
          </Col>
          <Col>
            <FaFacebookSquare onClick={() => alert("facebook")} size={55} />
          </Col>
          <Col>
            <FaYoutube onClick={() => alert("youtube")} size={55} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} style={{ justifyContent: "center" }}>
          abboneer u op onze nieuwsbrief
        </Form.Group>

        <Form.Group
          as={Row}
          controlId="newsFormTitle"
          style={{ justifyContent: "center" }}
        >
          <Form.Control
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="E-mail"
            aria-label="Email"
          />
        </Form.Group>
        <Form.Group as={Row} style={{ justifyContent: "center" }}>
          <Button
            name="email"
            onClick={(e: any) => SubmitHandler(e)}
            type="submit"
            variant="primary"
          >
            Bevestig
          </Button>
        </Form.Group>
      </Form>
    </Col>
  );
};
