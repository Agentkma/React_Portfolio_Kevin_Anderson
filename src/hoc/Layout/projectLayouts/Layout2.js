// ! External
import React from "react";

// ! Internal
import ProjectDescription from "../../../Components/Common/Project/ProjectDescription";
import ProjectTitle from "../../../Components/Common/Project/ProjectTitle";
import ProjectParallax from "../../../Components/Common/Project/ProjectParallax";
import ProjectNav from "../../../Components/Common/Project/ProjectNav";
import { SscrollContainer } from "../../../shared/StyledComponents";
import ProjectImages from "../../../Components/Common/Project/ProjectImages";

export function Layout2({ project }) {
    return (
        <SscrollContainer>
            <ProjectTitle project={project} />
            <ProjectParallax project={project} />
            <ProjectDescription project={project} />
            <ProjectImages project={project} />
            <ProjectNav project={project} gridNavHref={project} />
        </SscrollContainer>
    );
}

export default Layout2;
