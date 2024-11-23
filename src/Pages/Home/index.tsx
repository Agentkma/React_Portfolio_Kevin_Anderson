import { useContext, useState } from "react";

import IntroAbout from "./IntroAbout";
import ProjectItem from "./ProjectItem";
import { content } from "../../Assets/Content";
import ProjectsContainer from "../../hoc/projectsContainer";
import { FadeInPageContainer } from "../../Theme/animations";
import { SscrollContainer } from "../../shared/StyledComponents";
import { WorksFilterContext } from "../../context";
const { projects } = content.home.main;

interface Project {
    description: string;
    img: {
        alt: string;
        title: string;
        srcSet: string[];
        src: string;
    };
    name: string;
    worksFilter: string[];
}

const renderProjects = (filterSelection: string): JSX.Element[] => {
    return projects
        .filter((p: Project) => {
            return p.worksFilter.includes(filterSelection);
        })
        .map((project: Project) => {
            const { description, img, name } = project;

            return (
                <ProjectItem
                    key={name}
                    name={name}
                   
                />
            );
        });
};

export default function Home() {
    const { showWorksFilter } = useContext(WorksFilterContext);
    const [filterSelection, setFilterSelection] = useState("all");

    return (
        <FadeInPageContainer>
            <SscrollContainer>
                <IntroAbout />

                {showWorksFilter ? (
                    <div>
                        <button onClick={() => setFilterSelection("all")}>All</button>
                        <button onClick={() => setFilterSelection("css-frameworks")}>
                            CSS Frameworks
                        </button>
                        {/* Add more filter buttons as needed */}
                    </div>
                ) : null}
                <ProjectsContainer>
                    {renderProjects(filterSelection)}
                </ProjectsContainer>
            </SscrollContainer>
        </FadeInPageContainer>
    );
}
