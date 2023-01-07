import React from "react";
import IntroMessage from "./IntroMessage";
import ProjectCards from "./ProjectCard";

function ProjectLibrary() {
  return (
    <React.Fragment>
      <IntroMessage />
      <ProjectCards />
    </React.Fragment>
  );
}

export default ProjectLibrary;
