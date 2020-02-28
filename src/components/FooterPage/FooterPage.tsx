import React, { Component } from "react";
import "./FooterPage.css";
interface Props {}
interface State {}

const LogoImg = require("../Logo/IMG_8847.JPG");

export default class FooterPage extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <div className="row footerContainer">
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <h4>ABOUT US </h4>
            <img src={String(LogoImg)} alt="Logo" className="fimg"></img>
            <p className="fQuote">
              The Anmol Academy is a leading Institue empowering the civil
              services aspirants to realise their dreams.
            </p>
          </div>
          <div className=" contactUs col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <h4>CONTACT US</h4>
            <div>
              Email : abc@gmail.com
              <br></br>
              Address : "abc abc nhj"
              <br></br>
              Contact : 10234556890
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <h4>QUICK LINKS</h4>
            <ul className="quickLinks">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Terms and conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="footerLine">
          @2020 THE ANMOL ACADEMY. ALL RIGHTS RESERVED
        </div>
      </>
    );
  }
}
