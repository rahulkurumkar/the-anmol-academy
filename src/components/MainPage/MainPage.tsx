import * as React from "react";
import Courses from "../Courses/Courses";
import "./MainPage.css";
import Slider from "../Slider/Slider";
import Video from "../Video/Video";
import Sticky from "../NavBar/Sticky";
import AboutUs from "../About/AboutUs";

export interface IMainPageProps {
  course?: string;
}

export default class MainPage extends React.Component<IMainPageProps> {
  public render() {
    return (
      <>
        <div>
          <Slider />
        </div>
        <div>
          <AboutUs />
        </div>
        <div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="admissionDiv">
                <h2>Admission Open 2020-2021</h2>
              </div>
            </div>
          </div>
          <div className="row">
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
          <div className="videoDiv">
            <div className="row">
              <div className="col-md-12">
                <div className="titleDiv">
                  <h2>Anmol Academy</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div>
                  <Video />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <h4>What is Lorem Ipsum</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <button className="btn btn-success">Read More</button>
              </div>
            </div>
          </div>
          <div className="courseDiv">
            <div className="row">
              <div className="col-md-12">
                <Courses />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
