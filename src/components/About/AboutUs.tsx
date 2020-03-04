import React, { Component } from "react";
import "./About.css";
import { FaDiceD20 } from "react-icons/fa";
import { IoMdEye, IoIosTrendingUp, IoMdPeople } from "react-icons/io";

class AboutUs extends Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col-md-12">
            <div className="titleDiv">
              <h2>About Us</h2>
            </div>
          </div>
        </div>
        <div className="aboutDiv">
          <div className="row">
            {[
              {
                icon: <FaDiceD20 />,
                heading: "The Anmol Academy",
                description:
                  " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              },
              {
                icon: <IoMdEye />,
                heading: "Our Vision",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              },
              {
                icon: <IoIosTrendingUp />,
                heading: "Our Mission",
                description:
                  " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              },
              {
                icon: <IoMdPeople />,
                heading: "Why Anmol Academy",
                description:
                  " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              }
            ].map(obj => (
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <div className="aboutImg"> {obj.icon} </div>
                <div className="about">
                  <h5>{obj.heading}</h5>
                </div>
                <div className="aboutDescr">
                  <p> {obj.description} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}
export default AboutUs;
