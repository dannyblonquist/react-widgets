import React from "react";
import { Component } from "react";

export default class FontSize extends Component {
  constructor() {
    super();
    this.state = {
      fontSize: 20,
    };
  }
  handleFontUp = () => {
    this.setState((prevState) => ({
      fontSize: prevState.fontSize + 5,
    }));
  };

  handleFontDown = () => {
    this.setState((prevState) => ({
      fontSize: prevState.fontSize - 5,
    }));
  };
  render() {
    const { fontSize } = this.state;

    return (
      <>
        <h1 style={{ fontSize: `${fontSize}px` }}>text</h1>
        <button onClick={() => this.handleFontUp()}>Font Up</button>
        <button onClick={() => this.handleFontDown()}>Font Down</button>
      </>
    );
  }
}
