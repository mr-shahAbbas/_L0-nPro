import React from "react";
import "../../css/login.css";

export default class Input extends React.Component {
  render() {
    // Here we define our variables
    let inpPlaceHolder;
    let inpType;

    // Here we check our variables
    this.props.inpPlaceHolder
      ? (inpPlaceHolder = this.props.inpPlaceHolder)
      : (inpPlaceHolder = "Input");

    this.props.inpType ? (inpType = this.props.inpType) : (inpType = "input");

    // Here we return an input that we have made
    return (
      <input
        type={inpType}
        className="inp-login-page"
        placeholder={inpPlaceHolder}
      />
    );
  }
}
