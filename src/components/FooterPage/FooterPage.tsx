import React, { Component } from "react";
//import logo from "../Logo/IMG_8847.JPG";

interface Props {}
interface State {}

export default class FooterPage extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <div
          style={{
            backgroundColor: "#ffb84d",
            width: "100%",
            height: "200px",
            display: "flex"
          }}
          className="row"
        >
          <div
            style={{
              flex: 1,
              textAlign: "center",
              marginTop: "10px"
            }}
            className="col-xs-12 col-sm-12 col-md-4 col-lg-4"
          >
            <h4>ABOUT US </h4>
            <img src="IMG_8847.JPG" alt="Logo"></img>
            <p
              style={{
                textAlign: "center",
                marginTop: "10px",
                fontSize: "14px"
              }}
            >
              The Anmol Academy is a leading Institue empowering the civil
              services aspirants to realise their dreams.
            </p>
          </div>
          <div
            style={{
              flex: 1
            }}
            className="col-xs-12 col-sm-12 col-md-4 col-lg-4"
          >
            <h4
              style={{
                textAlign: "center",
                marginTop: "10px"
              }}
            >
              CONTACT US
            </h4>
            <div
              style={{
                textAlign: "left",
                paddingLeft: "120px",
                borderLeft: "solid black 1px",
                height: "130px"
              }}
            >
              Email : abc@gmail.com
              <br></br>
              Address : "abc abc nhj"
              <br></br>
              Contact : 10234556890
            </div>
          </div>
          <div
            style={{
              flex: 1
            }}
            className="col-xs-12 col-sm-12 col-md-4 col-lg-4"
          >
            <h4
              style={{
                flex: 1,
                textAlign: "center",
                marginTop: "10px"
              }}
            >
              QUICK LINKS
            </h4>
            <ul
              style={{
                textAlign: "left",
                marginTop: "10px",
                paddingLeft: "130px",
                borderLeft: "solid black 1px",
                height: "130px"
              }}
            >
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Terms and conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "black",
            width: "100%",
            height: "40px",
            fontSize: "10px",
            color: "white",
            padding: "10px"
          }}
        >
          @2020 THE ANMOL ACADEMY. ALL RIGHTS RESERVED
        </div>
      </>
    );
  }
}
