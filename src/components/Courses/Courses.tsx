import React from "react";
import { Link } from "react-router-dom";
import "./Courses.css";

export default class Courses extends React.Component {
  public render() {
    return (
      <>
        <div>
          <br />
          <span>
            <h1 style={{ paddingLeft: "80px" }}>Courses </h1>
          </span>
          <div className="line">
            <span></span>
          </div>
          <ul className="nav">
            <li className="nav-item">
              <Link to="/courses/mpsc">
                <a className="nav-link" href="#">
                  <img
                    width="255"
                    height="300"
                    src="https://theuniqueacademy.com/wp-content/uploads/2017/10/MPSC-02.png"
                    alt=""
                    className="coursesHover"
                  />
                  <h3 style={{ textAlign: "center", paddingTop: "20px" }}>
                    MPSC
                  </h3>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/courses/upsc">
                <a className="nav-link" href="#">
                  <img
                    width="255"
                    height="300"
                    src="https://theuniqueacademy.com/wp-content/uploads/2017/10/UPSC.png"
                    alt=""
                    className="coursesHover"
                  />
                  <h3 style={{ textAlign: "center", paddingTop: "20px" }}>
                    UPSC
                  </h3>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/courses/banking">
                <a className="nav-link" href="#">
                  <img
                    width="255"
                    height="300"
                    src="https://theuniqueacademy.com/wp-content/uploads/2017/10/Banking-Courses.png"
                    alt=""
                    className="coursesHover"
                  />
                  <h3 style={{ textAlign: "center", paddingTop: "20px" }}>
                    BANKING
                  </h3>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/courses/ssc">
                <a className="nav-link " href="#">
                  <img
                    width="255"
                    height="300"
                    src="https://theuniqueacademy.com/wp-content/uploads/2017/10/SSC-Courses.png"
                    alt=""
                    className="coursesHover"
                  />
                  <h3 style={{ textAlign: "center", paddingTop: "20px" }}>
                    SSC
                  </h3>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
