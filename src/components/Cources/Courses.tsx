import * as React from "react";

interface ICourseProps {
  course?: string;
}

export default class Courses extends React.Component<ICourseProps> {
  public render() {
    return (
      <div>
        <div className="upsc">
          <h3>{this.props.course}</h3>
          <p className="courseContent">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designsis dummy text used in
            laying out print, graphic or web designs.
          </p>

          <button className="btn btn-success " >Read More</button>

         
        </div>
      </div>
    );
  }
}
