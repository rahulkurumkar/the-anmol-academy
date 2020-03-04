import * as React from "react";

export default class Courses extends React.Component {
  public render() {
    return (
      <>
        <h1>All COURCES ARE AVAILABLE HERE</h1>
        <div>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link" href="#">
                MPSC
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                UPSC
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Banking
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                SSC
              </a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
