import React, { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NbLink } from "../../components/NavBar/NbLink";
import { NbBar } from "../../components/NavBar/NbBar";
import { Container, Nav, NavDropdown, Row, Col } from "react-bootstrap";
import { Header } from "../../components/Heading/Header";
import { MenuItem } from "../../components/Menu/MenuItem";
import { LogoPause } from "../../components/Heading/LogoPause";
import { Openinghours } from "../../components/Footer/Openinghours";

function App() {
  return (
    <Container>
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
            imagePath={require("../../assets/museum.png")}
            menuLabel="Tentoonstelling"
          />
        </Col>
        <Col>
          <MenuItem
            imagePath={require("../../assets/museum.png")}
            menuLabel="Over het museum"
          />
        </Col>
        <Col>
          <MenuItem
            imagePath={require("../../assets/museum.png")}
            menuLabel="Collecties"
          />
        </Col>
        <Col>
          <MenuItem
            imagePath={require("../../assets/museum.png")}
            menuLabel="WHI sites"
          />
        </Col>
        <Col>
          <MenuItem
            imagePath={require("../../assets/museum.png")}
            menuLabel="Uw bezoek"
          />
        </Col>
      </Row>
      {/* Sign to be used a decorative middle piece */}
      <LogoPause />
      {/* Footer */}

      <Row>
        <Openinghours />
      </Row>
    </Container>
  );
}

export default App;
