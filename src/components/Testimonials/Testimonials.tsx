import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const Img1 = require("./images/images.jpg");
const Img2 = require("./images/Img2.jpg");
const Img3 = require("./images/unnamed.jpg");

export default class Testimonials extends React.Component {
  public render() {
    return (
      <div className="bimg">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={20}
          totalSlides={3}
        >
          <Slider>
            <Slide index={0}>
              <img className="img-responsive" src={String(Img3)} alt="3"></img>
            </Slide>
            <Slide index={1}>
              <img className="img-responsive" src={String(Img2)} alt="2"></img>
            </Slide>
            <Slide index={2}>
              <img className="img-responsive " src={String(Img1)} alt="1"></img>
            </Slide>
          </Slider>
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
      </div>
    );
  }
}
