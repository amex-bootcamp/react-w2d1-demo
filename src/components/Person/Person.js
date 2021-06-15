import React, { Component } from "react";

export default class Person extends Component {
  render() {
    return (
      <div>
        Hello, {this.props.firstName} {this.props.lastName}
      </div>
    );
  }
}
