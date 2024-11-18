import ProjectDescription from "../../../Components/Common/Project/ProjectDescription";
import ProjectTitle from "../../../Components/Common/Project/ProjectTitle";
import ProjectCarousel1 from "../../../Components/Common/Project/ProjectCarousel1";
import ProjectNav from "../../../Components/Common/Project/ProjectNav";
import { SscrollContainer } from "../../../shared/StyledComponents";
import ProjectImages from "../../../Components/Common/Project/ProjectImages";

export function Layout1({ project }:{project:string}) {
    return (
        <SscrollContainer>
            <ProjectTitle project={project} />
            <ProjectCarousel1 project={project} />
            <ProjectDescription project={project} />
            <ProjectImages project={project} />
            <ProjectNav gridNavHref={project} />
        </SscrollContainer>
    );
}

export default Layout1;
