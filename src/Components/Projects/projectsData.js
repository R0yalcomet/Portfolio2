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
        link: "link to live page if possible",
        github: "link to project repository"
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
        commentary: "During the development of this project I encountered a challenge in relation to the API. I intended for the user to be able to use both the search function and subreddit filters concurrently, but one would always overwrite the other. While I believe my code for the API interactions should be able to make the proper requests for data matching both the search and filter constraints, the API continues to return data that only matches one of these constraints. Unfortunately I believe this may be a quirk of using the unofficial JSON API, but I will still try to find a solution in the future.",
        tools: "Javascript, CSS, React, React-Router, Redux, API",
        todo: ["add support for video/gif posts", "improve styling", "screen-size responsive styling", "fix filter vs search API conflict"],
        link: "https://r0yal-redditlite.netlify.app/",
        github: "https://github.com/R0yalcomet/RedditApp"
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
        todo: ["catch and handle errors", "add audio previews to displayed tracks", "add more advanced search options", "improve styling"],
        link: "https://r0yalcomet.github.io/SpotifyAPIProject/",
        github: "https://github.com/R0yalcomet/SpotifyAPIProject"
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
        link: "https://r0yalcomet.github.io/Portfolio/index.html",
        github: "https://github.com/R0yalcomet/Portfolio"
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
        todo: ["update with new projects", "continue to improve design and structure as I gain more experience and knowledge", "add image gallery to project pages?"],
        link: "https://tisdale-portfolio.netlify.app/",
        github: "https://github.com/R0yalcomet/Portfolio2"
    },
    mazeGame: {
        id: "mazeGame",
        name: "COMING SOON - Maze Game",
        image: null,
        summary: "Use data structures and a recursive dfs traversal method to create random, playable mazes.",
        goal: "The purpose of this project is to demonstrate knowledge of complex data structures and search algorithms by using these methods to create a simple game. This is also intended to introduce myself to working with the VUE.js framework.",
        features: "This project will include a single page where the user can prompt the application to create a random grid-based maze. The user will then be able to navigate the maze using directional inputs to move to the end space.",
        commentary: "I plan to recreate multiple games in a similar format (such as minesweeper, battleship, chess, etc.) to test and expand my knowledge. These additional games might be created as stand-alone projects or consolidated into a single \"game-hub\" project.",
        todo: ["finish page structure", "create nodes and grid data structure", "create a recursive dfs traversal method to determine paths and walls of maze", "handle user input and translate to maze navigation", "cleanup and polish final product", "deploy project"],
        link: null,
        github: null
    }
};

export default projectsData;
