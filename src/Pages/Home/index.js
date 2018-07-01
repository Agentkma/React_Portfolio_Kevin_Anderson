import React, { Fragment } from "react";
// import PropTypes from "prop-types";

import IntroAbout from "./IntroAbout";
import WorksFilterPanel from "./WorksFilterPanel";
import ProjectItem from "./ProjectItem";
import { content } from "../../Assets/Content";
import projectsContainer from "../../hoc/projectsContainer";

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
            <projectsContainer>{projectItems}</projectsContainer>
        </Fragment>
    );
};

// Home.propTypes = {};

export default Home;
