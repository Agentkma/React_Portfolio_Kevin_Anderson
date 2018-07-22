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

// const projectItems = () => {
//     const { projects } = content.home.main;

//     projects.map(project => {
//         const { description, img, name } = project;

//         return <ProjectItem description={description} name={name} img={img} />;
//     });
// };

const Home = props => {
    const { projects } = content.home.main;

    return (
        <Fragment>
            {" "}
            <IntroAbout />
            {props.worksFilterShown ? <WorksFilterPanel /> : null}
            {/* <ProjectsContainer>{items}</ProjectsContainer> */}
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
            })
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
