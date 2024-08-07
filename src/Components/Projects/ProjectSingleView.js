import React, { useEffect } from "react";
import projectsData from "./projectsData";

const ProjectSingleView = () => {
    const path = window.location.pathname;
    const index = path.split("-").slice(-1);
    const project = projectsData[index];

    return (
        <section>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p>{project.tools}</p>
        </section>
    )
}

export default ProjectSingleView;
