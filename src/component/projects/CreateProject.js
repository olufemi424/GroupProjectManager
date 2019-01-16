import React, { Component } from "react";

export class CreateProject extends Component {
  state = {
    title: "",
    content: ""
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
          <h5 className="grey-text text-darken-3">Add Project</h5>
          <div className="input-field">
            <label htmlFor="title">Project Title</label>
            <input type="text" id="title" onChange={this.handleOnChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleOnChange}
            />
          </div>
          <div className="input-field">
            <button className="btn blue lighten-1 x-depth-0">
              Add Project
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateProject;
