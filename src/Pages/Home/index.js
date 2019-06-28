// ! External
import React, { useState, Component } from "react";
import { connect } from "react-redux";

// ! Internal
import IntroAbout from "./IntroAbout";
import WorksFilterPanel from "./WorksFilterPanel";
import ProjectItem from "./ProjectItem";
import { content } from "../../Assets/Content";
import ProjectsContainer from "../../Hoc/ProjectsContainer";
import { FadeInPageContainer } from "../../Theme/animations";
import { SscrollContainer } from "../../shared/StyledComponents";

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
        <FadeInPageContainer>
            {" "}
            <SscrollContainer>
                <IntroAbout />

                {worksFilterVisibility ? (
                    <WorksFilterPanel
                        click={e => setFilterSelection(e.target.textContent)}
                    />
                ) : null}
                <ProjectsContainer>
                    {this.renderProjects(filterSelection)}
                </ProjectsContainer>
            </SscrollContainer>
        </FadeInPageContainer>
    );
}
