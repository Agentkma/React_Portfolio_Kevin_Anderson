// ! External
import React, { Component } from "react";
import { connect } from "react-redux";

// ! Internal
import IntroAbout from "./IntroAbout";
import WorksFilterPanel from "./WorksFilterPanel";
import ProjectItem from "./ProjectItem";
import { content } from "../../Assets/Content";
import ProjectsContainer from "../../Hoc/ProjectsContainer";
import { FadeInPageContainer } from "../../Theme/animations";

const { projects } = content.home.main;

class Home extends Component {
    state = {
        filter: "all"
    };

    handleFilter = event => {
        this.setState({ filter: event.target.textContent });
    };

    renderProjects = () => {
        return projects
            .filter(p => {
                return p.worksFilter.includes(this.state.filter);
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

    render() {
        return (
            <FadeInPageContainer>
                {" "}
                <IntroAbout />
                {this.props.worksFilterShown ? (
                    <WorksFilterPanel click={this.handleFilter} />
                ) : null}
                <ProjectsContainer>{this.renderProjects()}</ProjectsContainer>
            </FadeInPageContainer>
        );
    }
}

const mapStateToProps = state => {
    const { worksFilterShown } = state.homeReducer;
    return {
        worksFilterShown: worksFilterShown
    };
};

export default connect(mapStateToProps)(Home);
