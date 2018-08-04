import React from "react";
import ProjectDescription from "../subComponent/ProjectDescription";

export function Layout1({ project }) {
    return (
        <div>
            <div>header</div>
            <ProjectDescription project={project} />
        </div>
    );
}

export default Layout1;
