// ! External
import React, { useState } from "react";

// ! Internal
import IntroAbout from "./IntroAbout";
import WorksFilterPanel from "./WorksFilterPanel";
import ProjectItem from "./ProjectItem";
import { content } from "../../Assets/Content";
import ProjectsContainer from "../../Hoc/ProjectsContainer";
import { FadeInPageContainer } from "../../Theme/animations";
import { SscrollContainer } from "../../shared/StyledComponents";
import { WorksFilterContext } from "../../Hoc/Layout/context";
const { projects } = content.home.main;

const renderProjects = filterSelection => {
    return projects
        .filter(p => {
            return p.worksFilter.includes(filterSelection);
        })
        .map(project => {
            const { description, img, name } = project;

            return (
                <ProjectItem
                    key={name}
                    description={description}
                    name={name}
                    img={img}
                />
            );
        });
};

export default function Home() {
    // Declare a new state variable, which we'll call "count"

    const [filterSelection, setFilterSelection] = useState("all");
    return (
        <WorksFilterContext.Consumer>
            {({ showWorksFilter }) => (
                <FadeInPageContainer>
                    {" "}
                    <SscrollContainer>
                        <IntroAbout />

                        {showWorksFilter ? (
                            <WorksFilterPanel
                                click={e =>
                                    setFilterSelection(e.target.textContent)
                                }
                            />
                        ) : null}
                        <ProjectsContainer>
                            {renderProjects(filterSelection)}
                        </ProjectsContainer>
                    </SscrollContainer>
                </FadeInPageContainer>
            )}
        </WorksFilterContext.Consumer>
    );
}
