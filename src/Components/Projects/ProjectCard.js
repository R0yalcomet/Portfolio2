import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
    return (
        <div id="projectsCard">
            <h3>{project.name}</h3>
            <img alt="project preview image" src={project.image}/>
            <p>{project.summary}</p>
            <Link to={`${project.id}`}>
                <button>View Details</button>
            </Link>
        </div>
    )
}

export default ProjectCard;
