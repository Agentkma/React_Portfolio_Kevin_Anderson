// ! External
import React, { Fragment } from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";

// ! Internal
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

const Home = props => {
    return (
        <Fragment>
            {" "}
            <IntroAbout />
            {props.worksFilterShown ? <WorksFilterPanel /> : null}
            <ProjectsContainer>{projectItems}</ProjectsContainer>
        </Fragment>
    );
};

// Home.propTypes = {};

const mapStateToProps = state => {
    const { worksFilterShown } = state.homeReducer;
    return {
        worksFilterShown: worksFilterShown
    };
};

export default connect(mapStateToProps)(Home);
