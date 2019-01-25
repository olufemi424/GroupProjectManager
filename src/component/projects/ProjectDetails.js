import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { deleteProject } from "../../store/actions/projectActions";
import moment from "moment";

class ProjectDetails extends Component {
  handleDelete = () => {
    let id = this.props.match.params.id;
    this.props.deleteProject(id);
    this.props.history.push("/"); //redirect link
  };

  render() {
    const { project, auth } = this.props;

    if (!auth.uid) return <Redirect to="/login" />;
    if (project) {
      return (
        <div className="container section project-details">
          <div className="card z-depth-0">
            <div className="card-content">
              <h4 className="card-title">{project.title}</h4>
              <p>{project.content}</p>
              <div className="card-action grey lighten-4 grey-text">
                <p>
                  Posted by{" "}
                  {`${project.authorFirstName}${" "} ${project.authorLastName}`}
                </p>
                <h6>{moment(project.createdAt.toDate()).calendar()}</h6>
              </div>
            </div>
          </div>
          {project.authEmail === auth.email && (
            <button
              className="btn red lighten-1 x-depth-0"
              onClick={this.handleDelete}
            >
              Delete Project
            </button>
          )}
        </div>
      );
    } else {
      return <div className="spinner" />;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteProject: id => dispatch(deleteProject(id))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
