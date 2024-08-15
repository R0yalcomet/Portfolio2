import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

const AppLayout = () => {
    let location = useLocation();

    return (
        <div>
            <header>
                <h1>Portfolio - Roy Tisdale</h1>
                <nav>
                    <Link className={location.pathname === "/" ? "currentPage navButton" : "navButton"} to={"/"}><p>Home</p></Link>
                    <Link className={location.pathname === "/projects" ? "currentPage navButton" : "navButton"} to={"/projects"}><p>Projects</p></Link>
                    <Link className={location.pathname === "/contact" ? "currentPage navButton" : "navButton"} to={"/contact"}><p>Contact</p></Link>
                </nav>
            </header>
            <Outlet/>
        </div>
    )
}

export default AppLayout;
