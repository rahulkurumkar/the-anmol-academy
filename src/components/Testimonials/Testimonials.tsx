import React from "react";
import "./Testimonials.css";
import Carousel from "react-bootstrap/Carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default class Testimonials extends React.Component {
  public render() {
    return (
      <>
        <Carousel>
          {[
            {
              bgImg: require("./images/banner3.jpg"),
              studentImg: require("./images/P 1 .png"),
              h4Text: "Rahul",
              year: 2008,
              pText:
                "I was a student, Karyakarta and faculty of ChanakyMandal pariwar for six years. Those were six mostenriching years of my life.."
            },
            {
              bgImg: require("./images/banner3.jpg"),
              studentImg: require("./images/P 1 .png"),
              h4Text: "Mayur",
              year: 2010,
              pText:
                "I was a student, Karyakarta and faculty of ChanakyaMandal pariwar for six years.Those were six most enriching years of my life.."
            }
          ].map(obj => (
            <Carousel.Item>
              <div>
                <img
                  src={String(obj.bgImg)}
                  className="img-responsive"
                  alt="backgroung"
                />
                <Carousel.Caption>
                  <div className="col-md-3 offset-md-3">
                    <div className="testimonialImg">
                      <img
                        src={String(obj.studentImg)}
                        alt="Students"
                      ></img>
                      <div className="testimonialText">
                        <h4>{obj.h4Text} </h4>
                        <span>{obj.year}</span>
                        <p>{obj.pText}</p>
                      </div>
                    </div>
                  </div>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </>
    );
  }
}
