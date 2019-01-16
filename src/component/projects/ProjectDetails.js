import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <h4 className="card-title">Project Title - {id}</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            reprehenderit at obcaecati perspiciatis delectus sequi perferendis
            consequatur numquam neque excepturi in totam, magni eius asperiores
            dignissimos ea molestias omnis voluptatem distinctio iusto natus nam
            non. Odit tempora in omnis? Architecto illo asperiores odio tempora
            atque minus ratione nihil accusantium ipsam.
          </p>
          <div className="card-action grey lighten-4 grey-text">
            <p>Posted by Olufemi Af</p>
            <h6>January 10, 2019</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
