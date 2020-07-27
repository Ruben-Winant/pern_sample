import React, { FunctionComponent } from "react";
import { Col, Row, Image } from "react-bootstrap";
import ClampLines from "react-clamp-lines";
import News from "./News";

interface NaProps {
  news: News;
}

export const Newsarticle: FunctionComponent<NaProps> = ({ news }: NaProps) => {
  return (
    <Col style={{ borderLeft: "1px solid #2A2A2A" }} className="pt-3 pb-3">
      <Row
        xs={4}
        style={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Col
          xs={
            news.image_path == null ||
            news.image_path == "" ||
            typeof news.image_path == "undefined"
              ? 11
              : 8
          }
          className="ml-5"
        >
          <Row>
            <h3>{news.titel}</h3>
          </Row>
          <Row>
            <ClampLines
              id={news.titel}
              text={news.content}
              lines={4}
              ellipsis="..."
              innerElement="p"
              buttons={false}
            />
          </Row>
          <Row style={{ justifyContent: "space-between" }}>
            <p>Gepost op {news.plaatsDatum}</p>
            <a href="">Lees verder</a>
          </Row>
        </Col>
        {news.image_path == null ||
        news.image_path == "" ||
        typeof news.image_path == "undefined" ? null : (
          <Col xs={3} style={{}}>
            <Image fluid src={require("../../assets/" + news.image_path)} />
          </Col>
        )}
      </Row>
    </Col>
  );
};
