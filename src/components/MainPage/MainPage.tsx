import * as React from "react";
import FooterPage from "../FooterPage/FooterPage";
import NavBar from "../NavBar/NavBar";
export interface IMainPageProps {}

export default class MainPage extends React.Component<IMainPageProps> {
  public render() {
    return (
      <>
        <div
          style={{
            width: "100%",
            height: "100%"
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%"
            }}
          >
            <NavBar />
          </div>
        </div>{" "}
      </>
    );
  }
}
