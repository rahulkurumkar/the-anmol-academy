import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

export interface ISliderProps {}

class Slider extends Component<ISliderProps> {
  public render() {
    return (
      <>
      <Carousel>
        {[
          {
            item: require("./images/banner1.png"),
            h3Text: "First slide label",
            pText: "Nulla vitae elit libero, a pharetra augue mollis interdum."
          },
          {
            item: require("./images/banner1.png"),
            h3Text: "Second slide label",
            pText: "Nulla vitae elit libero, a pharetra augue mollis interdum."
          }
        ].map(obj => (
          <Carousel.Item>
            <img className="d-block w-100" src={String(obj.item)} />
            <Carousel.Caption>
              <h3>{obj.h3Text}</h3>
              <p>{obj.pText}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      </>
    );
  }
}

export default Slider;
