import * as React from "react";
import { FaGoogle, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import "./Header.css";

const LogoImg = require("../Logo/IMG_8847.JPG");

const Header: React.FC = () => (
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
        <div>
          {[
            { iconName: FaFacebookF, link: "#" },
            { iconName: FaGoogle, link: "#" },
            { iconName: FaWhatsapp, link: "#" },
            { iconName: MdCall, link: "#" }
          ].map(obj => (
            <a href="obj.link">
              <obj.iconName />
            </a>
          ))}
        </div>
        <button className="btn btn-danger">Emergency</button>
      </div>
    </div>
  </div>
);

export default Header;
