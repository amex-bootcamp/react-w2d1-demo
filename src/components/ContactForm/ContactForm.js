import React, { Component } from "react";

export default class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    };
  }

  // handleFirstNameChange = (event) => {
  //   this.setState({
  //     firstName: event.target.value, // grab the value from the first name input field
  //   });
  // };

  // handleLastNameChange = (event) => {
  //   this.setState({
  //     lastName: event.target.value, // grab the value from the lastfirst name input field
  //   });
  // };

  // handleEmailChange = (event) => {
  //   this.setState({
  //     email: event.target.value, // grab the value from the email input field
  //   });
  // };

  // handleMessageChange = (event) => {
  //   this.setState({
  //     message: event.target.value, // grab the value from the message input field
  //   });
  // };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h1>{`${this.state.firstName} ${this.state.lastName}`}</h1>
        <form>
          <ul>
            <li>
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            </li>
            <li>
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </li>
            <li>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </li>
            <li>
              <label htmlFor="message">Message:</label>
              <input
                type="text"
                id="message"
                name="message"
                value={this.state.message}
                onChange={this.handleChange}
              />
            </li>
            <button>Send contact form</button>
          </ul>
        </form>
      </div>
    );
  }
}
