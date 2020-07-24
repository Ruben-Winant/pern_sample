import React from "react";
import { Row, Col, Image } from "react-bootstrap";

interface MenuItemProps {
  imagePath: string;
  menuLabel: string;
}

export const MenuItem = ({ imagePath, menuLabel }: MenuItemProps) => {
  return (
    <Col onClick={() => alert("redirect naar " + menuLabel)} className="mb-3">
      <Row className="mb-2">
        <Col xs={6} className="mx-auto">
          <Image fluid src={imagePath} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h6>{menuLabel}</h6>
        </Col>
      </Row>
    </Col>
  );
};
