import React, { Component } from 'react'
import "./Counter.css";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10,
      name: "Hou"
    }
  }

  render() {
    return (
      <div className="Counter-container">
        <h1>{this.state.name}'s Counter App</h1>
        <h2>{this.state.count}</h2>
      </div>
    )
  }
}
