import React, { Component } from 'react'
import Welcome from "./components/Welcome/Welcome";

export default class App extends Component {
  render() {
    return (
      <div>
        My App
        <Welcome />
      </div>
    )
  }
}
