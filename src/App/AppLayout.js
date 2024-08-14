import React from "react";
import { Outlet, Link } from "react-router-dom";

const AppLayout = () => {
    return (
        <div>
            <header>
                <h1>Portfolio - Roy Tisdale</h1>
                <nav>
                    <Link className="navButton" to={"/"}><h3>Home</h3></Link>
                    <Link className="navButton" to={"/projects"}><h3>Projects</h3></Link>
                    <Link className="navButton" to={"/contact"}><h3>Contact</h3></Link>
                </nav>
            </header>
            <Outlet/>
        </div>
    )
}

export default AppLayout;
