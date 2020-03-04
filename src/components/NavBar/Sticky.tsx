import React, { Component } from "react";
import NavBar from "./NavBar";

interface Props {}
interface State {
  scrollingLock?: boolean;
}

class Sticky extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      scrollingLock: false
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll() {
    if (window.scrollY > 100) {
      // console.log("should lock");
      this.setState({
        scrollingLock: true
      });
    } else if (window.scrollY < 100) {
      // console.log("not locked");
      this.setState({
        scrollingLock: false
      });
    }
  }
  render() {
    return (
      <div
        style={{
          width: "100%",
          top: 0,
          background: "#00004d",
          zIndex: 100,
          position: this.state.scrollingLock ? "fixed" : "relative"
        }}
      >
        <NavBar />
      </div>
    );
  }
}
export default Sticky;
