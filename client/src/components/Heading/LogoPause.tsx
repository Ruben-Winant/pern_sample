import React from "react";
import { Row, Col, Image } from "react-bootstrap";

export const LogoPause = () => {
  return (
    <Row style={{ alignItems: "center" }}>
      <Col></Col>
      <Col>
        <hr />
      </Col>
      <Col xs={1}>
        <Image fluid src={require("../../assets/logo-solo-voor-drupal.png")} />
      </Col>
      <Col>
        <hr />
      </Col>
      <Col></Col>
    </Row>
  );
};
