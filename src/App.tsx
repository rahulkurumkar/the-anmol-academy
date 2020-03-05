import React from "react";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import FooterPage from "./components/FooterPage/FooterPage";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Courses from "./components/Courses/Courses";
import Testimonials from "./components/Testimonials/Testimonials";
import AboutUs from "./components/About/AboutUs";

export const App: React.FunctionComponent = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <>
                <MainPage />
              </>
            )}
          ></Route>
          <Route exact path="/aboutus" render={props => <AboutUs />}></Route>
          <Route exact path="/courses" component={Courses}></Route>
        </Switch>
        <Testimonials />
        <FooterPage />
      </BrowserRouter>
    </>
  );
};
