import React from "react";
import projectsData from "./projectsData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div id="projectsContainer">
                {Object.values(projectsData).map((project) => <ProjectCard key={project.id} project={project}/>)}
            </div>
        </section>
    )
}

export default Projects;
