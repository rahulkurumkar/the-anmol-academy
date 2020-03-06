import React, { Component } from "react";
import Background from "./images/img.jpg";

var sectionStyle = {
  backgroundImage: `url( ${Background} )`
};

class News extends Component {
  public render() {
    return (
      <div style={sectionStyle}>
        <div className="row">
          <div className="col-md-12">
            <div className="titleDiv">
              <h2>Latest News</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {[
            { item: require("./images/img1.jpg") },
            { item: require("./images/img2.png") },
            { item: require("./images/img3.jpg") },
            { item: require("./images/img4.jpeg") }
          ].map(obj => (
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div className="newsImg">
                <img src={obj.item} className="img-responsive" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default News;
