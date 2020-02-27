import React from "react";
import { Stack, Text, Link, FontWeights } from "office-ui-fabric-react";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import FooterPage from "./components/FooterPage/FooterPage";
import "./App.css";

const boldStyle = { root: { fontWeight: FontWeights.semibold } };

export const App: React.FunctionComponent = () => {
  return (
    <>
      <Header label="Header">
        <div>Rahul</div>
      </Header>
      <MainPage />
      <FooterPage />
    </>
  );
};
