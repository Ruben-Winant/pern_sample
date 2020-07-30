import React, { FunctionComponent } from "react";
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
      let imgSrc =
        article.image_path != null && article.image_path != ""
          ? article.image_path
          : "gang.jpg";
      carouselItems.push(
        <Carousel.Item style={{ height: 400, width: "100%" }}>
          <Image
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
            fluid
            src={require("../../assets/" + imgSrc)}
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
        <Col className="px-0">
          <Carousel>{carouselItems}</Carousel>
        </Col>
      </Row>
    </Col>
  );
};
