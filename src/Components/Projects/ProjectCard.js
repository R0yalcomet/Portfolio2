import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
    return (
        <div id="projectsCard">
            <h3>{project.name}</h3>
            {project.image ? <img alt="project preview" src={project.image}/> : <img alt="placeholder" src="https://picsum.photos/id/96/500/300.jpg?blur=5"/>}
            <p>{project.summary}</p>
            <Link to={`${project.id}`}>
                <button>View Details</button>
            </Link>
        </div>
    )
}

export default ProjectCard;
