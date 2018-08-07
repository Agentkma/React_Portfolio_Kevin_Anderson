import React from "react";
import ProjectDescription from "../../../Components/Common/Project/ProjectDescription";
import ProjectTitle from "../../../Components/Common/Project/ProjectTitle";
import ProjectCarousel1 from "../../../Components/Common/Project/ProjectCarousel1";

export function Layout1({ project }) {
    return (
        <div>
            <ProjectTitle project={project} />
            <ProjectCarousel1 project={project} />
            <ProjectDescription project={project} />
        </div>
    );
}

export default Layout1;
