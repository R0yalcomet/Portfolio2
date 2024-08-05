import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
    return (
        <div>
            <header>
                <h1>Portfolio - Roy Tisdale</h1>
            </header>
            <Outlet/>
        </div>
    )
}

export default AppLayout;
