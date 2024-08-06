import React from "react";
import projectsData from "./projectsData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div>
                {projectsData.map((project) => <ProjectCard project={project}/>)}
            </div>
        </section>
    )
}

export default Projects;
