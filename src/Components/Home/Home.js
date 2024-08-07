import React from "react";
import projectsData from "../Projects/projectsData";

const Home = () => {
    const featureIndex = 0;
    const project = projectsData[featureIndex];

    return (
        <div>
            <section id="intro">
                <div id="banner">
                    <h1>Roy Tisdale</h1>
                    <h3>Front-End Engineer</h3>
                </div>
                <div id="about">
                    <h2>About Me</h2>
                    <p>Example text blah blah blah...</p>
                </div>
            </section>
            <section id="featured">
                <h2>Featured Project</h2>
                <div>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <p>{project.tools}</p>
                </div>
            </section>
        </div>
    )
}

export default Home;