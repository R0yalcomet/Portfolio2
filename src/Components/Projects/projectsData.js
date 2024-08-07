import React from "react";

const projectsData = [
    {
        id: "redditapp",
        name: "Reddit App",
        image: null,
        summary: "A web app that fetches data from Reddit.",
        description: <>
            The goal of this project was to create a web app that allows the user to view and browse posts by fetching data from Reddit's unofficial JSON API.
            <br/><br/>
            The user is able to filter the displayed posts using a search term or selecting a subreddit from the list. The user may also click a chosen post to view the full post and the comments under the post.
            <br/><br/> 
            The biggest challenge I encountered while working on this project was in relation to the API. I intended for the user to be able to use both the search function and subreddit filters concurrently, but one would always overwrite the other. While I believe my code for the API interactions should be able to make the proper requests for data matching both the search and filter constraints, the API continues to return data that only matches one of these constraints. Unfortunately I have yet to find a fix for this issue and the user is limited to choosing between the search function or the subreddit filters, but not both.
            <br/><br/>

        </>,
        tools: "List of technologies used ex: javascript, React, etc..."
    },
    {
        id: "projectname2",
        name: "Project Name 2",
        image: null,
        summary: "Brief description of what the project is.",
        description: "More detailed description of the project and its making.",
        tools: "List of technologies used ex: javascript, React, etc..."
    },
    {
        id: "projectname3",
        name: "Project Name 3",
        image: null,
        summary: "Brief description of what the project is.",
        description: "More detailed description of the project and its making.",
        tools: "List of technologies used ex: javascript, React, etc..."
    }
];

export default projectsData;
