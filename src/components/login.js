import React from "react";
import "./css/login.css";
import Input from "./components/Input";

export default class Login extends React.Component {
  render() {
    return (
      <div className="main-container">
        <Input inpPlaceHolder="Email" />
        <Input inpPlaceHolder="Password" />
        <div style={{ flexDirection: "column" }} />
      </div>
    );
  }
}
