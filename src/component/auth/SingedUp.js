import React, { Component } from "react";

export class SingedUp extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };

  handleOnChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleOnSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleOnSubmit}>
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.handleOnChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleOnChange} />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleOnChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={this.handleOnChange}
            />
          </div>
          <div className="input-field">
            <button className="btn blue lighten-1 x-depth-0">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SingedUp;
