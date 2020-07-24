import React, { Component, FunctionComponent } from "react";
import { Col, Row, Carousel, Image } from "react-bootstrap";
import News from "./News";
import ClampLines from "react-clamp-lines";

interface NacProps {
  articles: News[];
}

export const NewsCarousel: FunctionComponent<NacProps> = ({
  articles,
}: NacProps) => {
  {
    var carouselItems: any = [];

    articles.forEach((article) => {
      carouselItems.push(
        <Carousel.Item>
          <Image
            style={{
              maxHeight: 400,
              width: "100%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            fluid
            src={require("../../assets/" + article.image_path)}
          />
          <Carousel.Caption>
            <h3>{article.titel}</h3>
            <ClampLines
              id={article.titel}
              text={article.content}
              lines={2}
              ellipsis="..."
              innerElement="p"
              buttons={false}
            />
          </Carousel.Caption>
        </Carousel.Item>
      );
    });
  }

  return (
    <Col>
      <Row>
        <Carousel>{carouselItems}</Carousel>
      </Row>
    </Col>
  );
};
