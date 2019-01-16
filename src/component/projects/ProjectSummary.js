import React from "react";
import { Link } from "react-router-dom";

const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content text-darken">
        <span className="card-title">
          <Link to="/project/:id">{project.title}</Link>
        </span>
        <p>Posted by Olufemi AF</p>
        <p className="grey-text">3rd September, 2am</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
