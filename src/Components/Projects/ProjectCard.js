import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project, index }) => {
    return (
        <div id="projectsCard">
            <h3>{project.name}</h3>
            <img src={project.image}/>
            <p>{project.summary}</p>
            <Link to={`/${project.id}-${index}`}>
                <button>View Details</button>
            </Link>
        </div>
    )
}

export default ProjectCard;
