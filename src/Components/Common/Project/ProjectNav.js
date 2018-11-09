// ! External
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// ! Internal
import { content } from "../../../Assets/Content";
import { Scontainer, Srow } from "../../../shared/StyledComponents";

function ProjectNav({ gridNavHref }) {
    let currentProject = window.location.pathname.split("/").join("");

    let currentIndex = content.projects.findIndex(
        project => project.url === currentProject
    );

    const prevProject = () => {
        let prevIndex =
            (currentIndex - 1 + content.projects.length) %
            content.projects.length;

        return content.projects[prevIndex].url;
    };
    const nextProject = () => {
        let nextIndex = (currentIndex + 1) % content.projects.length;
        return content.projects[nextIndex].url;
    };

    return (
        <Ssection>
            <Scontainer>
                <Srow>
                    <Sarticle>
                        <Sul>
                            <Sli>
                                <Link to={prevProject(currentProject)}>
                                    <Simg
                                        alt="left arrow"
                                        title="left arrow button"
                                        src={require("../../../Assets/Images/prev.svg")}
                                    />
                                </Link>
                            </Sli>
                            <Sli>
                                <a href={`#${gridNavHref}`}>
                                    <Simg
                                        alt="image grid icon"
                                        title="image grid icon"
                                        src={require("../../../Assets/Images/grid.svg")}
                                    />
                                </a>
                            </Sli>
                            <Sli>
                                <Link to={nextProject(currentProject)}>
                                    <Simg
                                        alt="right arrow"
                                        title="right arrow button"
                                        src={require("../../../Assets/Images/next.svg")}
                                    />
                                </Link>
                            </Sli>
                        </Sul>
                    </Sarticle>
                </Srow>
            </Scontainer>
        </Ssection>
    );
}

export default ProjectNav;

// ! Styles

const Ssection = styled.section`
    margin-top: 3rem;
    background-color: ${props => props.theme.colorBgTertiary};
`;

const Sarticle = styled.article`
    padding-top: 0 !important;
    padding-left: 0 !important;
    padding-bottom: 0 !important;
    padding-right: 0 !important;
`;

const Sul = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 2.5rem 0;
    text-align: center;
`;

const Sli = styled.li`
    display: inline-block;
    margin: 5px;
    background-color: ${props => props.theme.colorBgPrimary};
    padding: 1.5rem;
    border-radius: 50%;
    list-style-type: none;
    cursor: pointer;
    &:hover {
        transition: all 0.5s ease-in;
        background-color: ${props => props.theme.colorFontHoverPrimary};
    }
`;

const Simg = styled.img`
    width: 1.5rem;
`;
