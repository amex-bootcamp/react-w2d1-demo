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

  // when defining a method, use the arrow function syntax for proper `this` binding
  handleIncrement = () => {
    if(this.state.count < 20) {
      // update the count variable
      this.setState((currentState) => {
        const { count } = currentState;
        return {
          count: count + 1,
          name: currentState.name === "Hou" ? "Moe" : "Hou"
        }
      });
    } 
  }

  handleDecrement = () => {
    // check what the current count is, if it's greater than 0, then decrement the counter
    if(this.state.count > 0) {
      this.setState((currentState) => {
        return {
          count: currentState.count - 1
        }
      });
    } 
  }

  render() {
    // dynamically add a class to the count
    // const counterClass = this.state.count > 10 ? "Counter-active" : "";
    
    let counterClass;
    // if count is greater than 10, the count should be red
    if(this.state.count > 10) {
      counterClass = "Counter-active"
    } else if (this.state.count < 5) {
    // if count is less than 5, the count should be green
      counterClass = "Counter-green";
    }

    return (
      <div className="Counter-container">
        <h1>{this.state.name}'s Counter App</h1>
        <h2 className={counterClass}>{this.state.count}</h2>
        <button onClick={this.handleIncrement}>increment (+)</button>
        <button onClick={this.handleDecrement}>decrement (-)</button>
      </div>
    )
  }
}
