import React from "react";
import { Link } from "react-router-dom";

interface ICourseProps {
  course?: string;
}

export default class Course extends React.Component<ICourseProps> {
  mainpageHandler = () => {
    console.log(this.props);
  };
  public render() {
    return (
      <>
        <div>
          <h3>{this.props.course}</h3>
          <p>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designsis dummy text used in
            laying out print, graphic or web designs.
          </p>
          <Link to="/courses">
            <button className="btn btn-success " onClick={this.mainpageHandler}>
              Read More
            </button>
          </Link>
        </div>
      </>
    );
  }
}
