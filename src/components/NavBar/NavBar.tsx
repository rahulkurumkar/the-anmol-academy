import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";

interface Props {}
interface State {}

export default class NavBar extends Component<Props, State> {
  state = {};

  render() {
    return (
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Admission</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Courses</Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}
