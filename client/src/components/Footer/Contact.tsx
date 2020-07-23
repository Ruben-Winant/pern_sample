import React from "react";
import { Col } from "react-bootstrap";

export const Contact = () => {
  return (
    <Col className="m-1">
      <address style={{ textAlign: "right" }}>
        <b>Contact</b>
        <br />
        <br />
        <b>Adres</b>
        <br />
        Jubelpark 3
        <br />
        1000 Brussel
        <br />
        <br />
        <b>Telefoon</b>
        <br />
        00-32-(0)2 737 78 33 (onthaal)
        <br />
        00-32-(0)2 737 78 11 (centrale)
        <br />
        <br />
        <b>E-mail</b>
        <br />
        bezoeken.klm@warheritage.be
      </address>
    </Col>
  );
};
