import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

const AppLayout = () => {
    let location = useLocation();

    return (
        <div>
            <header>
                <h1>Portfolio - Roy Tisdale</h1>
                <nav>
                    <Link className={location.pathname === "/" ? "currentPage navButton" : "navButton"} to={"/"}><h3>Home</h3></Link>
                    <Link className={location.pathname === "/projects" ? "currentPage navButton" : "navButton"} to={"/projects"}><h3>Projects</h3></Link>
                    <Link className={location.pathname === "/contact" ? "currentPage navButton" : "navButton"} to={"/contact"}><h3>Contact</h3></Link>
                </nav>
            </header>
            <Outlet/>
        </div>
    )
}

export default AppLayout;
