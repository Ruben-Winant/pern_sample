import React from "react";
import { Col, ListGroup } from "react-bootstrap";

export const Openinghours = () => {
  return (
    <Col xs={3}>
      <h6>Openingsuren</h6>
      <ListGroup variant="flush">
        <ListGroup.Item>Ma | Gesloten</ListGroup.Item>
        <ListGroup.Item>Di | Gesloten</ListGroup.Item>
        <ListGroup.Item>Wo | 10:00 - 16:00</ListGroup.Item>
        <ListGroup.Item>Do | 10:00 - 16:00</ListGroup.Item>
        <ListGroup.Item>Vr | 10:00 - 16:00</ListGroup.Item>
        <ListGroup.Item>Za | 10:00 - 16:00</ListGroup.Item>
        <ListGroup.Item>Zo | 10:00 - 16:00</ListGroup.Item>
      </ListGroup>
      <p>Ook gesloten op 1 januari, 1 mei, 1 november en 25 december</p>
    </Col>
  );
};
