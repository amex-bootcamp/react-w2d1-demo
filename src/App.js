import React, { Component } from 'react'
import Welcome from "./components/Welcome/Welcome";
import Person from "./components/Person/Person";
import Counter from "./components/Counter/Counter";
import ContactForm from "./components/ContactForm/ContactForm";
// import Counter from "./components/Counter/Counter.js"; // this will work too
// import "./components/Counter/Counter.css"

export default class App extends Component {
  render() {
    return (
      <div>
        My App
        <Welcome />
        <Person firstName="Hou" lastName="Chia"/>
        <Counter count={9}/>
        <ContactForm />
      </div>
    )
  }
}