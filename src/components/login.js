import React from "react";
import "./css/login.css";
import Input from "./components/input";
import CheckBoxPix from "./components/checkbox";
import ButtonPix from "./components/button";
import TextBoxPix from "./components/textbox";

export default class Login extends React.Component {
  render() {
    return (
      <div className="main-container">
        <Input inpPlaceHolder="Email" />
        <Input inpPlaceHolder="Password" />
        <div style={{ flexDirection: "column" }}>
          <CheckBoxPix text="Subscribe to get the latest news & updates" />
        </div>
        <div className="btn-sign-up">
          <ButtonPix text="Sign Up" />
        </div>
        <div className="txt-bottom">
          <TextBoxPix
            color="#878787"
            text="By clicking I agree to the Motion Factory"
          />
          <TextBoxPix
            as="a"
            href="https://www.google.com"
            color="#878787"
            decoration={true}
            text="terms of use"
          />
        </div>
      </div>
    );
  }
}
