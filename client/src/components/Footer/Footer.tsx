import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Openinghours } from "./Openinghours";
import { LogoPause } from "../Heading/LogoPause";
import { Contact } from "./Contact";
import { Follow } from "./Follow";
import { FaHeart } from "react-icons/fa";

export const Footer = () => {
  return (
    <Container
      className="p-3"
      style={{ backgroundColor: "#2A2A2A", color: "white" }}
    >
      <Row className="p-4">
        <Openinghours />
        <Follow />
        <Contact />
      </Row>
      <Row>
        <Col></Col>
        <Col style={{ textAlign: "center" }}>
          <p>
            Made with <FaHeart /> by Ruben Winant
          </p>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};
