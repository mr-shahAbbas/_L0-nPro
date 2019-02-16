import React from "react";
import styled from "styled-components";

const TextBox = styled.p.attrs(({ color, decoration, as }) => ({
  fontColor: color || "#FFF",
  de: decoration ? "underline" : null,
  as: as ? "pointer" : null
}))`
  margin-top: -10px;
  font-family: "Open Sans";
  color: ${props => props.fontColor};
  font-size: 11px;
  text-decoration: ${props => props.de};
  cursor: ${props => props.as};
`;

export default class TextBoxPix extends React.Component {
  render() {
    return (
      <TextBox
        as={this.props.as}
        href={this.props.href}
        color={this.props.color}
        decoration={this.props.decoration}
      >
        {this.props.text}
      </TextBox>
    );
  }
}
