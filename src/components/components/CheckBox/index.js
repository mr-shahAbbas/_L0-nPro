import React from "react";
import "../css/login.css";

const Checkbox = props => <input type="checkbox" {...props} />;

export default class CheckBoxPix extends React.Component {
  state = { checked: false };
  handleCheckboxChange = event =>
    this.setState({ checked: event.target.checked });
  render() {
    return (
      <div>
        <label>
          <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
          />
          <span>Label Text</span>
        </label>
      </div>
    );
  }
}
