import React, { Component } from "react";
import "./About.css";
import { FaDiceD20 } from "react-icons/fa";
import { IoMdEye, IoIosTrendingUp, IoMdPeople } from "react-icons/io";

class AboutUs extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="titleDiv">
              <h2>About Us</h2>
            </div>
          </div>
        </div>
        <div className="aboutDiv">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div className="aboutImg">
                <FaDiceD20 />
              </div>
              <div className="aboutDescr">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div className="aboutImg">
                <IoMdEye />
              </div>
              <div className="aboutDescr">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div className="aboutImg">
                <IoIosTrendingUp />
              </div>
              <div className="aboutDescr">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div className="aboutImg">
                <IoMdPeople />
              </div>
              <div className="aboutDescr">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AboutUs;
