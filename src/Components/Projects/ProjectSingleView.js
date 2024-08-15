import React, { useEffect } from "react";
import projectsData from "./projectsData";

const ProjectSingleView = () => {
    const path = window.location.pathname;
    const index = path.split("-").slice(-1);
    const project = projectsData[index];

    return (
        <div className="contentContainer">
            <section id="singleView">
                <h2>{project.name}</h2>
                <img src={project.image}/>
                <p>{project.description}</p>
                <p>{project.tools}</p>
            </section>
        </div> 
    )
}

export default ProjectSingleView;
