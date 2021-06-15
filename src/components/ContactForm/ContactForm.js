import React, { Component } from 'react'

export default class ContactForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      firstName: "Hou",
      lastName: "Chia",
      email:"houchia@gmail.com",
      message: "message"     
    }
  }
  
  render() {
    return (
      <div>
        <h1>Hou's Contact Form</h1>
        <p>{this.state.firstName}</p>
        <p>{this.state.lastName}</p>
        <p>{this.state.email}</p>
        <p>{this.state.message}</p>
        <form>
        </form>
      </div>
    )
  }
}
