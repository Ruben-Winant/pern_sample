import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./domain/App/App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Nav, NavDropdown } from "react-bootstrap";
import { NbBar } from "./components/NavBar/NbBar";
import { NbLink } from "./components/NavBar/NbLink";
import { MenuItem } from "./components/Menu/MenuItem";
import { Header } from "./components/Heading/Header";
import { LogoPause } from "./components/Heading/LogoPause";
import { Footer } from "./components/Footer/Footer";

ReactDOM.render(
  <Container style={{ color: "#2A2A2A" }}>
    {/* navbar */}
    <Row>
      <Col>
        <br />
        <NbBar>
          <Nav className="mr-auto">
            <NbLink
              bold={false}
              capitalize={false}
              displayName="Home"
              link="#"
            />
            <NbLink
              bold={false}
              capitalize={false}
              displayName="Wie zijn we"
              link="#"
            />
            <NbLink
              bold={true}
              capitalize={false}
              displayName="Tarieven"
              link="#"
            />
          </Nav>
          <Nav>
            <NbLink
              bold={false}
              capitalize={false}
              displayName="Pers"
              link="#"
            />
            <NbLink
              bold={false}
              capitalize={false}
              displayName="Contact"
              link="#"
            />
            <b>
              <NavDropdown title="Taal" id="basic-nav-dropdown">
                <NavDropdown.Item href="#nl">NL</NavDropdown.Item>
                <NavDropdown.Item href="#en">EN</NavDropdown.Item>
                <NavDropdown.Item href="#fr">FR</NavDropdown.Item>
              </NavDropdown>
            </b>
          </Nav>
        </NbBar>
        <hr />
      </Col>
    </Row>
    {/* header */}
    <Row>
      <Col>
        <Header />
        <hr />
      </Col>
    </Row>
    {/* Menu moet nog responsive gemaakt worden*/}
    <Row className="text-center">
      <Col>
        <MenuItem
          imagePath={require("./assets/museum.png")}
          menuLabel="Tentoonstelling"
        />
      </Col>
      <Col>
        <MenuItem
          imagePath={require("./assets/museum.png")}
          menuLabel="Over het museum"
        />
      </Col>
      <Col>
        <MenuItem
          imagePath={require("./assets/museum.png")}
          menuLabel="Collecties"
        />
      </Col>
      <Col>
        <MenuItem
          imagePath={require("./assets/museum.png")}
          menuLabel="WHI sites"
        />
      </Col>
      <Col>
        <MenuItem
          imagePath={require("./assets/museum.png")}
          menuLabel="Uw bezoek"
        />
      </Col>
    </Row>
    {/* Sign to be used a decorative middle piece */}
    <LogoPause />

    <App />
    <Footer />
    {/* Footer */}
  </Container>,

  document.getElementById("root")
);
