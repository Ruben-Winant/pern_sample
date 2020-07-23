import React, { FunctionComponent } from "react";
import { Col, Row, Image } from "react-bootstrap";

interface NaProps {
  titel: string;
  content: string;
  image_path: string;
}

export const Newsarticle: FunctionComponent<NaProps> = ({
  titel,
  content,
  image_path,
}: NaProps) => {
  return (
    <Col>
      <Row>
        <Col>
          <Row>
            <h3>{titel}</h3>
          </Row>
          <Row>
            <p>{content}</p>
          </Row>
          <Row>
            <a href="">Lees verder</a>
          </Row>
        </Col>
        <Col>
          <Image src={require("../../assets/" + image_path)} />
        </Col>
      </Row>
    </Col>
  );
};
