import React from "react";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import FooterPage from "./components/FooterPage/FooterPage";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Courses from "./components/Courses/Courses";
import Testimonials from "./components/Testimonials/Testimonials";
import AboutUs from "./components/About/AboutUs";
import Ssc from "./components/Courses/Ssc";
import Mpsc from "./components/Courses/Mpsc";
import Upsc from "./components/Courses/Upsc";
import Banking from "./components/Courses/Banking";

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
          <Route exact path="/courses/ssc" component={Ssc}></Route>
          <Route exact path="/courses/mpsc" component={Mpsc}></Route>
          <Route exact path="/courses/upsc" component={Upsc}></Route>
          <Route exact path="/courses/banking" component={Banking}></Route>
        </Switch>
        <Testimonials />
        <FooterPage />
      </BrowserRouter>
    </>
  );
};
