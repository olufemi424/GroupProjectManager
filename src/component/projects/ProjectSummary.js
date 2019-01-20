import React from "react";
import moment from "moment";
import pImg from "../../img/p.png";

const ProjectSummary = props => {
  const { project } = props;
  return (
    <div className="card z-depth-0 project-summary">
      <img src={pImg} alt="" className="post-image" />
      <div className="card-content">
        <span className="card-title">{project.title}</span>
        <p>
          Posted by{" "}
          {`${project.authorFirstName}${" "} ${project.authorLastName}`}
        </p>
        <p className="grey-text">
          {moment(project.createdAt.toDate()).calendar()}
        </p>
      </div>
    </div>
  );
};

export default ProjectSummary;
