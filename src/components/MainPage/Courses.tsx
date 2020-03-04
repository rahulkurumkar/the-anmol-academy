import * as React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Course from "../Courses/Courses";

export default class Courses extends React.Component {
  public render() {
    return (
      <>
        <h2>All Courses are available here...</h2>
        <nav className="navbar bg-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link 1
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link 2
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link 3
              </a>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}
