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
  <div className="headerContainer">
    <div className="row ">
      <div className="col-xs-4 col-sm-4 col-md-3 col-lg-3">
        <div className="imgDiv">
          <img src={String(LogoImg)} alt="Logo" className="himg"></img>
        </div>
      </div>
      <div className=" col-xs-4 col-sm-4 col-md-6 col-lg-6">
        <div className="quote">
          <p>
            To develop youth with global consciousness and competence.
            <br></br>To develop professionals with national character.
          </p>
        </div>
      </div>
      <div className="divicons col-xs-4 col-sm-4 col-md-3 col-lg-3">
        <div className="">
          <div>
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
    </div>
  </div>
);

export default Header;
