import React from "react";
import { Col, Row, InputGroup, FormControl, Button } from "react-bootstrap";
import { FaTwitter, FaFacebookSquare, FaYoutube } from "react-icons/fa";

export const Follow = () => {
  return (
    <Col className="m-1" style={{ textAlign: "center" }}>
      <Row style={{ justifyContent: "center" }}>
        <h4>
          <b>Volg ons op</b>
        </h4>
      </Row>
      <br />
      <Row>
        <Col>
          <FaTwitter onClick={() => alert("twitter")} size={55} />
        </Col>
        <Col>
          <FaFacebookSquare onClick={() => alert("facebook")} size={55} />
        </Col>
        <Col>
          <FaYoutube onClick={() => alert("youtube")} size={55} />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Row style={{ justifyContent: "center" }}>
            abboneer u op onze nieuwsbrief
          </Row>
          <Row>
            <InputGroup className="mb-2">
              <FormControl
                placeholder="Email"
                aria-label="Email"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Row>
          <Row style={{ justifyContent: "center" }}>
            <Button variant="primary">Bevestig</Button>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};
