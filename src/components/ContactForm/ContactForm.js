import React, { Component } from "react";

export default class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
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

  handleSubmit = (event) => {
    event.preventDefault();
    // update the submitted state to true
    this.setState({
      submitted: true,
    });
  };

  handleReset = () => {
    this.setState({
      submitted: false,
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  render() {
    const { submitted, message, firstName, lastName, email } = this.state;

    // check whether or not message is empty
    if (submitted && message === "") {
      return (
        <section>
          <p>Hey {firstName}, the message field cannot be empty</p>
        </section>
      );
    }

    if (submitted) {
      return (
        <section>
          <p>
            Thank you, {firstName}, for submitting the form with the following
            message: {message}
          </p>
          <button onClick={this.handleReset}>Reset Form</button>
        </section>
      );
    }

    return (
      <div>
        <h1>{`${firstName} ${lastName}`}</h1>
        <form onSubmit={this.handleSubmit}>
          <ul>
            <li>
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={this.handleChange}
              />
            </li>
            <li>
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={this.handleChange}
              />
            </li>
            <li>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </li>
            <li>
              <label htmlFor="message">Message:</label>
              <input
                type="text"
                id="message"
                name="message"
                value={message}
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
