import * as React from "react";
//import FooterPage from "../FooterPage/FooterPage";
import NavBar from "../NavBar/NavBar";
import Courses from "./Courses";
//import { Button } from "react-bootstrap";

export interface IMainPageProps {}

export default class MainPage extends React.Component<IMainPageProps> {
  public render() {
    return (
      <div
        style={{
          width: "100%",
          height: "100%"
        }}
      >
        <div>
          <NavBar />
        </div>

        <div
          style={{
            width: "100%",
            height: "100%"
          }}
        >
          <div className="row">
            <div className="col-md-12">
              <div className="courseHeading">
                <h2>Our Courses</h2>
              </div>
            </div>
          </div>
          <div className="courses">
            <div className="courseName">
              <Courses />
            </div>
            <div className="courseName">
              <Courses />
            </div>
            <div className="courseName">
              <Courses />
            </div>
            <div className="courseName">
              <Courses />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
