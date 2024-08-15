import React from "react";
import projectsData from "../Projects/projectsData";
import ProjectSingleView from "../Projects/ProjectSingleView";

const Home = () => {
    const featureIndex = 0;
    const project = projectsData[featureIndex];

    return (
        <div id="homeContainer">
            <section id="intro">
                <div id="banner">
                    <h1>Roy Tisdale</h1>
                    <h3>Front-End Engineer</h3>
                </div>
                <div id="about">
                    <h2>About Me</h2>
                    <p>I have been fascinated with computers since i was a child and built my first PC in my sophomore year of highschool. In 2022 I graduated from Texas State University with a B.A. in Psychology. After my daughter was born I made the decision to change career paths and started learning how to code through Codecademy.</p>
                        <br/>
                        <p>I am now experienced in front-end web development using tools such as Javascript, React, and Redux. I have plans to continue my education to become a full-stack developer and expand into other areas of programming.</p>
                </div>
            </section>
            <ProjectSingleView id="featuredProject" project={project} featured={true}/>
        </div>
    )
}

export default Home;