import React, { useEffect } from "react";
import projectsData from "./projectsData";


const ProjectSingleView = ({project = null, featured = false}) => {
    if (!project) {
        const path = window.location.pathname;
        const index = path.split("-").slice(-1);
        project = projectsData[index];
    }

    return (
        <section id="singleView">
            {featured ? <><h2>Featured Project</h2><h3>{project.name}</h3></> : <h2>{project.name}</h2>}
            <img src={project.image}/>
            <p>{project.tools}</p>
            <br/>
            <p>{project.goal}</p>
            <br/>
            <p>{project.features}</p>
            <br/>
            <p>{project.commentary}</p>
            <br/>
            <p>{project.todo}</p>
        </section>
    )
}

export default ProjectSingleView;
