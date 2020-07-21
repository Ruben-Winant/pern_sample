import React from "react";
import { Row, Col, Image } from "react-bootstrap";

export const LogoPause = () => {
  return (
    <Row>
      <Col></Col>
      <Col xs={2}>
        <hr />
      </Col>
      <Col xs={1}>
        <Image fluid src={require("../../assets/logo-solo-voor-drupal.png")} />
      </Col>
      <Col xs={2}>
        <hr />
      </Col>
      <Col></Col>
    </Row>
  );
};
