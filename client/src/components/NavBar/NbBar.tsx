import React, { FunctionComponent } from "react";
import { Nav, Navbar } from "react-bootstrap";

interface NbBarProps {}

export const NbBar: FunctionComponent<NbBarProps> = (props) => {
  return (
    <Navbar expand="sm">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">{props.children}</Navbar.Collapse>
    </Navbar>
  );
};
