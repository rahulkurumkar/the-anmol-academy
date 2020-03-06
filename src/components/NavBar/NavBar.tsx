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
          { item: "About Us", link: "/aboutus" },
          { item: "Contact", link: "/Contact" },
          { item: "Addmissions", link: "/Addmissions" },
          { item: "Result", link: "/Result" },
          { item: "Course", link: "/Addmissions" }
        ].map(obj => (
          <Nav.Item>
            <Nav.Link href={obj.link}>{obj.item}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    );
  }
}
