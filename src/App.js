import React, { Component } from 'react'
import Welcome from "./components/Welcome/Welcome";
import Person from "./components/Person/Person";

export default class App extends Component {
  render() {
    return (
      <div>
        My App
        <Welcome />
        <Person firstName="Hou" lastName="Chia"/>
      </div>
    )
  }
}