import React from "react";
import { Outlet, Link } from "react-router-dom";

const AppLayout = () => {
    return (
        <html>
            <header>
                <h1>Portfolio - Roy Tisdale</h1>
                <nav>
                    <Link to={"/"}><h3>Home</h3></Link>
                    <Link to={"/projects"}><h3>Projects</h3></Link>
                    <Link to={"/contact"}><h3>Contact</h3></Link>
                </nav>
            </header>
            <Outlet/>
        </html>
    )
}

export default AppLayout;
