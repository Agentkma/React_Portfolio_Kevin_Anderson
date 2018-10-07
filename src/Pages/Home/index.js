// ! External
import React from "react";
import { connect } from "react-redux";

// ! Internal
import IntroAbout from "./IntroAbout";
import WorksFilterPanel from "./WorksFilterPanel";
import ProjectItem from "./ProjectItem";
import { content } from "../../Assets/Content";
import ProjectsContainer from "../../hoc/ProjectsContainer";
import { FadeInPageContainer } from "../../Theme/animations";

const Home = props => {
    const { projects } = content.home.main;

    return (
        <FadeInPageContainer>
            {" "}
            <IntroAbout />
            {props.worksFilterShown ? <WorksFilterPanel /> : null}
            <ProjectsContainer>
                {projects.map(project => {
                    const { description, img, name } = project;

                    return (
                        <ProjectItem
                            key={name}
                            description={description}
                            name={name}
                            img={img}
                        />
                    );
                })}
            </ProjectsContainer>
        </FadeInPageContainer>
    );
};

const mapStateToProps = state => {
    const { worksFilterShown } = state.homeReducer;
    return {
        worksFilterShown: worksFilterShown
    };
};

export default connect(mapStateToProps)(Home);
