import React, { useEffect } from "react";
import projectsData from "./projectsData";


const ProjectSingleView = ({project = null, featured = false}) => {
    if (!project) {
        const path = window.location.pathname;
        const id = path.split("/").slice(-1);
        project = projectsData[id];
    }

    return (
        <section id="singleView">
            {featured ? <><h2>Featured Project</h2><h3>{project.name}</h3></> : <h2>{project.name}</h2>}
            <img src={project.image}/>
            <p>{project.tools}</p>
            <br/>
            <p className="hanging"><strong>Goal: </strong>{project.goal}</p>
            <br/>
            <p className="hanging"><strong>Features: </strong>{project.features}</p>
            <br/>
            <p>{project.commentary}</p>
            <br/>
            <p><strong>To Do: </strong></p>
            <ul>{project.todo ? project.todo.map((item, index) => <li key={index}>{item}</li>) : null}</ul>
        </section>
    )
}

export default ProjectSingleView;
