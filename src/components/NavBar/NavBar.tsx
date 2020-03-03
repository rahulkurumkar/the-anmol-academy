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
          <Nav.Link href="http://localhost:3000/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="http://localhost:3000/about">About Us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}
