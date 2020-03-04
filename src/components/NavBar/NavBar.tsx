import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";

interface Props {}
interface State {}

export default class NavBar extends Component<Props, State> {
  state = {};
  render() {
    return (
      <Nav>
        {[
          { item: "Home", link: "/" },
          { item: "About Us", link: "/about" },
          { item: "Link", link: "/link" }
        ].map(obj => (
          <Nav.Item>
            <Nav.Link href="obj.link">{obj.item}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    );
  }
}
