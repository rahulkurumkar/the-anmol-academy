import * as React from "react";
import FooterPage from "../FooterPage/FooterPage";
import NavBar from "../NavBar/NavBar";
<<<<<<< Updated upstream
export interface IMainPageProps {}
=======
import Courses from "../Cources/Courses";
//import { Button } from "react-bootstrap";

export interface IMainPageProps {
  course?: string;
}
>>>>>>> Stashed changes

export default class MainPage extends React.Component<IMainPageProps> {
  public render() {
    return (
<<<<<<< Updated upstream
      <>
=======
      <div
        style={{
          width: "100%",
          height: "100%"
        }}
      >
        <div className="row">
          <NavBar />
        </div>

>>>>>>> Stashed changes
        <div
          style={{
            width: "100%",
            height: "100%"
          }}
        >
<<<<<<< Updated upstream
          <div
            style={{
              width: "100%",
              height: "100%"
            }}
          >
            <NavBar />
=======
          <div className="row">
            <div className="col-md-12">
              <div className="courseHeading">
                <h2>Our Courses</h2>
              </div>
            </div>
          </div>

          <div className="courses">
            <div className="courseName">
              <Courses course="MPSC" />
            </div>

            <div className="courseName">
              <Courses course="UPSC" />
            </div>
            <div className="courseName">
              <Courses course="BANKING" />
            </div>
            <div className="courseName">
              <Courses course="SSC" />
            </div>
>>>>>>> Stashed changes
          </div>
        </div>{" "}
      </>
    );
  }
}
