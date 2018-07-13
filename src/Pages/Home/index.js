import React, { Fragment } from "react";
// import PropTypes from "prop-types";

import IntroAbout from "./IntroAbout";
import WorksFilterPanel from "./WorksFilterPanel";
import ProjectItem from "./ProjectItem";
import { content } from "../../Assets/Content";
import ProjectsContainer from "../../hoc/ProjectsContainer";

const projectItems = params => {
    const { projects } = content.home.main;

    projects.map(project => {
        return <ProjectItem />;
    });
};

const Home = () => {
    return (
        <Fragment>
            {" "}
            <IntroAbout />
            <WorksFilterPanel />
            <ProjectsContainer>{projectItems}</ProjectsContainer>
        </Fragment>
    );
};

// Home.propTypes = {};

export default Home;
