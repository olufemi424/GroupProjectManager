import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const ProjectDetails = props => {
  const { project } = props;
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
                {`${project.authorFirstname}${" "} ${project.authorLastName}`}
              </p>
              <h6>January 10, 2019</h6>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="contsiner center">
        <p>loading project...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
