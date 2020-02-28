import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { Button } from "react-bootstrap";
import { FaGoogle, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { MdCall } from "react-icons/md";
//import { Stack } from "office-ui-fabric-react";
import "./Header.css";
const LogoImg = require("../Logo/IMG_8847.JPG");

interface IHeaderProps {
  label: string;
}

const Header: React.FC<IHeaderProps> = ({ label, children }) => (
<<<<<<< Updated upstream
  <div className="row headerContainer">
    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
      <div className="imgDiv">
        <img src={String(LogoImg)} alt="Logo" className="himg"></img>
      </div>
    </div>
    <div className="quote col-xs-12 col-sm-12 col-md-6 col-lg-6">
=======
  <div
    style={{
      display: "inline-flex",
      width: "100%",
      height: "150px",
      backgroundColor: "#ffffe6"
    }}
    className="row"
  >
    <div
      style={{
        flex: 1,

        margin: "0 auto",
        padding: "40px"
      }}
      className="col-xs-12 col-sm-12 col-md-3 col-lg-3"
    >
      <img src="IMG_8847.JPG" alt="Logo"></img>
    </div>
    <div
      style={{
        flex: 2,
        display: "block",

        textAlign: "center",
        fontStyle: "italic",
        color: "#8c201c",
        margin: "0 auto",
        position: "relative",
        fontSize: "22px",
        padding: "40px"
      }}
      className="col-xs-12 col-sm-12 col-md-6 col-lg-6"
    >
>>>>>>> Stashed changes
      <p>
        To develop youth with global consciousness and competence.
        <br></br>To develop professionals with national character.
      </p>
    </div>
<<<<<<< Updated upstream
    <div className="divicons col-xs-12 col-sm-12 col-md-3 col-lg-3">
      <div>
=======
    <div
      style={{
        flex: 1,
        padding: "20px",
        fontSize: "30px",
        width: "50px",
        textAlign: "center",
        textDecoration: "none",
        color: "white"
      }}
      className="col-xs-12 col-sm-12 col-md-3 col-lg-3"
    >
      <div
        style={{
          margin: "0 auto",
          padding: "40px",
          color: "red",
          marginBottom: "100px"
        }}
      >
>>>>>>> Stashed changes
        <a href="#">
          <FaFacebookF />
        </a>
        <a href="#">
          <FaGoogle />
        </a>
        <a href="#">
          <FaWhatsapp />
        </a>
        <a href="#">
          <MdCall />
        </a>
      </div>
      <button className="btn btn-danger">Emergency</button>
    </div>
  </div>
);

export default Header;
