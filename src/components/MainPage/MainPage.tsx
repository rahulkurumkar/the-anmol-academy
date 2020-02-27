import * as React from "react";
import NavBar from "../NavBar/NavBar";
import Courses from "./Courses";

import Slider from "../Slider/Slider";
//import { Button } from "react-bootstrap";

export interface IMainPageProps {}

export default class MainPage extends React.Component<IMainPageProps> {
  public render() {
    return (
      <div>
        <div
          style={{
            width: "100%",
            height: "100%"
          }}
        >
          <div>
            <NavBar />
          </div>
          <div>
            <Slider />
          </div>

          <div
            style={{
              width: "100%",
              height: "100%"
            }}
          >
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="admissionDiv">
                  <h2>Admission Open 2020-2021</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="instr">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="instructionTxt">
                    <h2>Instruction for New Student</h2>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="instructionBtn">
                    <button className="btn btn-danger">Know More</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="courseHeading">
                  <h2>Our Courses</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className=" col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <div className="courseName">
                  <Courses />
                </div>
              </div>
              <div className=" col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <div className="courseName">
                  <Courses />
                </div>
              </div>
              <div className=" col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <div className="courseName">
                  <Courses />
                </div>
              </div>
              <div className=" col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <div className="courseName">
                  <Courses />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
