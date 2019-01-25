import React from "react";
import { Link } from "react-router-dom";
import ProjectSummary from "./ProjectSummary";

const ProjectList = ({ projects }) => {
  if (projects) {
    return (
      <div className="project-list section">
        {projects &&
          projects.map(project => {
            return (
              <Link to={"/project/" + project.id} key={project.id}>
                <ProjectSummary project={project} />
              </Link>
            );
          })}
      </div>
    );
  } else {
    return <div className="spinner" />;
  }
};

export default ProjectList;
