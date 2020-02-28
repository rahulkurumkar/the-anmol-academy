import React, { Component } from "react";
//import imgSlider from "./images/banner1.png";
import Carousel from "react-bootstrap/Carousel";
//import SliderImg from "./SliderImg";

export interface ISliderProps {}

class Slider extends Component<ISliderProps> {
  render() {
    const names = ["banner3", "banner2"];

    return (
      <div>
        <Carousel>
          <Carousel.Item>
            {names.map(image => (
              <img
                className="d-block w-100"
                src={String(require(`./images/${image}.jpg`))}
              />
            ))}
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Slider;
