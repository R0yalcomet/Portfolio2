import React from "react";
import RedditApp from "./projectImages/RedditApp.jpg";
import Jammming from "./projectImages/Jammming.jpg";
import OldPortfolio from "./projectImages/OldPortfolio.jpg";
import Portfolio from "./projectImages/Portfolio.jpg";

/* 
    new project template:

    projectname: {
        id: "projectname",
        name: "Project Name",
        image: null,
        summary: "1-2 sentence description",
        goal: "~3 sentences about the intended end result",
        features: "what does the project do?",
        commentary: "additional info about particular challenges or the development of the project",
        tools: "list of technologies used ex: javascript, React, etc...",
        todo: ["fixes, adjustments, or extra features not yet present in the project"],
    }

*/

const projectsData = {
    redditApp: {
        id: "redditApp",
        name: "Reddit-Lite",
        image: RedditApp,
        summary: "Fetch and display posts from Reddit for user to view.",
        goal: "This project's goal was to create a web app that allows the user to view and browse posts by fetching data from Reddit's unofficial JSON API.",
        features: "The user is able to filter the displayed posts using a search term or selecting a subreddit from the list. The user may also click a chosen post to view the full post and the comments under the post.",
        commentary: "During the development of this project I encountered a challenge in relation to the API. I intended for the user to be able to use both the search function and subreddit filters concurrently, but one would always overwrite the other. While I believe my code for the API interactions should be able to make the proper requests for data matching both the search and filter constraints, the API continues to return data that only matches one of these constraints. Unfortunately I have not yet fixed this issue and the user is limited to choosing between the search function or the subreddit filters, but not both.",
        tools: "Javascript, CSS, React, React-Router, Redux, API",
        todo: ["improve styling", "hide empty/deleted comments", "screen-size responsive styling", "fix filter vs search API conflict"]
    },
    jammming: {
        id: "jammming",
        name: "Jammming",
        image: Jammming,
        summary: "Create and save playlists to user's Spotify account.",
        goal: "This project was created to use Spotify's API to allow a user to create a custom playlist and save the playlist to their personal account.",
        features: "The user may sign in with their spotify account. Once signed in, the user can find songs using the search function and add chosen songs to a custom playlist which can then be saved to the user's account. ",
        commentary: "When I started this project I had very little experience using external API's and had difficulty setting up the API request and authentication process. I was able to create working code for the API communication with the assistance of resources provided Github user Sypher122333.",
        tools: "Javascript, CSS, React, API",
        todo: ["catch and handle errors", "add audio previews to displayed tracks", "add more advanced search options", "improve styling", "display default tracks when a search term is not given"],
    },
    portfolioOld: {
        id: "portfolioOld",
        name: "Personal Portfolio - OLD",
        image: OldPortfolio,
        summary: "Portfolio created early in my coding journey. Included to highlight my coding growth.",
        goal: "This project was created as a platform to showcase my coding projects.",
        features: "The project includes a Home page which displays information about myself, a list of projects which can be viewed, and a featured project. The project also includes a Contact page which displays my contact details.",
        commentary: "Only a single project is displayed on repeat do display the list structure and project layout. This project was created early on in my coding journey when I had only a basic understanding of front-end development. As such the web page is somewhat rudimentary and has a variety of small issues.",
        tools: "HTML, CSS, Javascript",
        todo: ["N/A - see updated Portfolio"],
        link: "https://r0yalcomet.github.io/Portfolio/index.html"
    },
    portfolioNew: {
        id: "portfolioNew",
        name: "Personal Portfolio - CURRENT",
        image: Portfolio,
        summary: "Updated Personal Portfolio using more advanced tools and techniques.",
        goal: "This is a recreation of my Personal Portfolio using more advanced techniques and tools to better display my projects and coding skills.",
        features: "The project includes a Home page, a Projects page, and a Contact page. The Home page displays information about myself and a featured project. The Projects page displays a list of projects which can be viewed in detail. The Contact page displays my contact details.",
        commentary: "This project was created as an updated alternative to my original Portfolio to demonstrate improvement of skill and knowledge following my completion of Codecademy's Front-End Engineer career course.",
        tools: "Javascript, CSS, React, React Router",
        todo: ["screen-size responsive design", "clean up code", "update with new projects", "continue to improve design and structure as I gain more experience and knowledge"],
    }
};

export default projectsData;
