import React, { Component } from "react";
import { Newsarticle } from "../../components/news/Newsarticle";
import { Col, Row } from "react-bootstrap";

export default class NewsPage extends Component {
  componentDidMount() {
    //fetch all articles
  }

  render() {
    return (
      <Col>
        {/* {this.state.articles.forEach((article) => {
          <Row>

          </Row>;
        })} */}
      </Col>
    );
  }
}
