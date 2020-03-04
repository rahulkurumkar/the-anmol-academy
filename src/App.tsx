import React from "react";
import { FontWeights } from "office-ui-fabric-react";
//import { Stack, Text, Link, FontWeights } from "office-ui-fabric-react";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import FooterPage from "./components/FooterPage/FooterPage";
import "./App.css";
import { BrowserRouter} from "react-router-dom";
import Courses from "./components/Courses/Courses";
import Testimonials from "./components/Testimonials/Testimonials";

export const App: React.FunctionComponent = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <MainPage />
        <Testimonials />
        <FooterPage />
      </BrowserRouter>
    </>
  );
};
