import React from "react";
import Nav from "react-bootstrap/Nav";

interface NbLinkProps {
  displayName: string;
  bold: boolean;
  link: string;
  capitalize: boolean;
}

export const NbLink = ({
  displayName,
  bold,
  link,
  capitalize,
}: NbLinkProps) => {
  const capitalizedName = capitalize ? displayName.toUpperCase() : displayName;
  const boldName = bold ? <b>{capitalizedName}</b> : capitalizedName;
  return <Nav.Link href={link}>{boldName}</Nav.Link>;
};
