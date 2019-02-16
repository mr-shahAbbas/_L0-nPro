import React from "react";
import styled from "styled-components";

const btnBgColor = "#1E5BFF";

const Button = styled.button`
  width: 79px;
  height: 27px;
  text-align:center;
  font-size:11px;
  font-family:"Open Sans";
  color: #fff;
  background-color: ${btnBgColor};
  outline: none;
  border: 0px solid ${btnBgColor};
  border-radius: 14px;
  ::after{
    border:none;
      background: ${btnBgColor};
  }
  :hover{
      border: 2px solid ${btnBgColor};
      background: none;
  };
`;

export default class ButtonPix extends React.Component {
  render() {
    return (
      <div>
        <Button>
              {this.props.text}
        </Button>
      </div>
    );
  }
}
