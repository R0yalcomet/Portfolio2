import React from "react";
import RedditApp from "./projectImages/RedditApp.jpg";

/* 
    new project template:

    {
        id: "projectname",
        name: "Project Name",
        image: null,
        summary: "1-2 sentence description",
        goal: "~3 sentences about the intended end result",
        features: "what does the project do?",
        commentary: "additional info about particular challenges or the development of the project",
        tools: "list of technologies used ex: javascript, React, etc...",
        todo: "fixes, adjustments, or extra features not yet present in the project",
    }

*/

const projectsData = [
    {
        id: "redditapp",
        name: "Reddit-Lite",
        image: RedditApp,
        summary: "A web app that fetches data from Reddit.",
        goal: "The goal of this project was to create a web app that allows the user to view and browse posts by fetching data from Reddit's unofficial JSON API.",
        features: "The user is able to filter the displayed posts using a search term or selecting a subreddit from the list. The user may also click a chosen post to view the full post and the comments under the post.",
        commentary: "During the development of this project I encountered a challenge in relation to the API. I intended for the user to be able to use both the search function and subreddit filters concurrently, but one would always overwrite the other. While I believe my code for the API interactions should be able to make the proper requests for data matching both the search and filter constraints, the API continues to return data that only matches one of these constraints. Unfortunately I have yet to find a fix for this issue and the user is limited to choosing between the search function or the subreddit filters, but not both.",
        tools: "Javascript, CSS, React, React-Router, Redux, API",
        todo: ["improve styling", "hide empty/deleted comments", "screen-size responsive styling", "fix filter vs search API conflict"]
    },
    {
        id: "projectname2",
        name: "Project Name 2",
        image: null,
        summary: "",
        goal: "",
        features: "",
        commentary: "",
        tools: "List of technologies used ex: javascript, React, etc...",
        todo: "",
    },
    {
        id: "projectname3",
        name: "Project Name 3",
        image: null,
        summary: "",
        goal: "",
        features: "",
        commentary: "",
        tools: "List of technologies used ex: javascript, React, etc...",
        todo: "",
    },
    {
        id: "projectname4",
        name: "Project Name 4",
        image: null,
        summary: "",
        goal: "",
        features: "",
        commentary: "",
        tools: "List of technologies used ex: javascript, React, etc...",
        todo: "",
    }
];

export default projectsData;
