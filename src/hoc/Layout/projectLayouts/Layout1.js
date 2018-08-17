// ! External
import React from "react";

// ! Internal
import ProjectDescription from "../../../Components/Common/Project/ProjectDescription";
import ProjectTitle from "../../../Components/Common/Project/ProjectTitle";
import ProjectCarousel1 from "../../../Components/Common/Project/ProjectCarousel1";
import ProjectNav from "../../../Components/Common/Project/ProjectNav";
import ProjectImages from "../../../Components/Common/Project/ProjectImages";

// Todo create project img grid component & pass a grid prop to it based on
// project number that can be used to dynamically set the id={grid}
// pass same value to the ProjectNav component as gridNavHref
// so when grid icon clicked focus will go to the grid image component
export function Layout1({ project }) {
    return (
        <div>
            <ProjectTitle project={project} />
            <ProjectCarousel1 project={project} />
            <ProjectDescription project={project} />
            <ProjectImages project={project} />
            <ProjectNav project={project} gridNavHref={project} />
        </div>
    );
}

export default Layout1;
