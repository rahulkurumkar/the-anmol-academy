import React, { Component } from "react";
//import imgSlider from "./images/banner1.png";
import Carousel from "react-bootstrap/Carousel";
export interface ISliderImgProps {}
const imgSlider = require("./images/banner1.png");

class SliderImg extends Component<ISliderImgProps> {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={String(imgSlider)} />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={String(imgSlider)} />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default SliderImg;
