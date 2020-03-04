import React from "react";
import Courses from "./Courses";

interface ICourseProps {
  course?: string;
}

export default class Course extends React.Component<ICourseProps> {
  openPage = () => {
    return <Courses />;
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

          <button className="btn btn-success " onClick={this.openPage}>
            Read More
          </button>
        </div>
      </>
    );
  }
}
