import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";

export const Header = () => {
  return (
    <Container>
      <Row>
        <Col xs={3}>
          <Image
            fluid
            src={require("../../assets/logo-solo-voor-drupal.png")}
          />
        </Col>
        <Col className="d-flex align-content-center flex-wrap">
          <h1>Koninklijk Museum van het Leger en de Krijgsgeschiedenis</h1>
        </Col>
      </Row>
    </Container>
  );
};
