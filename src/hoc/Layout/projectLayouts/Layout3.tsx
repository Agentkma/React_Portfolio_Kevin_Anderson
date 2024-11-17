// ! External
import React from "react";

// ! Internal
import ProjectDescription from "../../../Components/Common/Project/ProjectDescription";
import ProjectTitle from "../../../Components/Common/Project/ProjectTitle";
import ProjectMasonry from "../../../Components/Common/Project/ProjectMasonry";
import ProjectNav from "../../../Components/Common/Project/ProjectNav";
import { SscrollContainer } from "../../../shared/StyledComponents";
import ProjectImages from "../../../Components/Common/Project/ProjectImages";

export function Layout3({ project }) {
    return (
        <SscrollContainer>
            <ProjectTitle project={project} />
            <ProjectMasonry project={project} />
            <ProjectDescription project={project} />
            <ProjectImages project={project} />
            <ProjectNav project={project} gridNavHref={project} />
        </SscrollContainer>
    );
}

export default Layout3;
