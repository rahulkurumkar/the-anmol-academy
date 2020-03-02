import * as React from "react";
import NavBar from "../NavBar/NavBar";
import Courses from "../Courses/Courses";

export interface IMainPageProps {
  course?: string;
}

export default class MainPage extends React.Component<IMainPageProps> {
  public render() {
    return (
      <div
        style={{
          width: "100%",
          height: "100%"
        }}
      >
        <div className="row">
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
          </div>
        </div>
        
      </div>
    );
  }
}
