import React from "react";
import styled from "styled-components";



const bgMain = "#1D1D1D";
const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
const StyledCheckbox = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  transition: all 150ms;
  ${Icon} {
    visibility: ${props => (props.checked ? "visible" : "hidden")};
  }
`;

let blueColor = "#2D60EB";
const Icon = styled.svg`
  fill: none;
  stroke: ${blueColor};
  stroke-width: 3px;
`;
const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  background:${bgMain};
  border-radius:5px;
  width: 20px;
  height: 20px;
  
`;
//const Checkbox = props => <input type="checkbox" {...props} />;

const Checkbox = ({ className, checked, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);

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
          <span
            style={{
              color: "#878787",
              fontSize: 11,
              fontFamily: "Open Sans",
              paddingLeft: 8
            }}
          >
            {this.props.text}
          </span>
        </label>
      </div>
    );
  }
}
