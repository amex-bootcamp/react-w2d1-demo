import React, { Component } from 'react'
import "./Counter.css";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10,
      name: "Hou"
    }
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement () {
    console.log("hello world");
    // update the count variable
    this.setState((currentState) => {
      console.log(currentState);
    })
  }

  render() {
    return (
      <div className="Counter-container">
        <h1>{this.state.name}'s Counter App</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleIncrement}>increment (+)</button>
      </div>
    )
  }
}
