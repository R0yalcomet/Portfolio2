import React from "react";
import projectsData from "./projectsData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div id="projectsContainer">
                {projectsData.map((project, index) => <ProjectCard project={project} index={index}/>)}
            </div>
        </section>
    )
}

export default Projects;
