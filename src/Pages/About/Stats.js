// ! External

import React, { Component } from "react";
import styled from "styled-components";

// ! Internal

import { content } from "../../Assets/Content";
import StatsBgImg from "../../Assets/Images/about/about-stats1.jpg";
import { Srow } from "../../shared/StyledComponents";
import { mediaMin } from "../../Theme";

const { stats } = content.about.main;

class Stats extends Component {
    state = {
        educationPoints: 0,
        projects: 0,
        skills: 0
    };

    // ! Lifecylec Methods

    componentDidMount() {
        this.getLinkedInSkills();
        this.getGitHubProjects();
        this.getTreehousePoints();
    }

    // ! Methods

    getGitHubProjects = () => {
        fetch("https://api.github.com/users/Agentkma/repos")
            .then(response => response.json())
            .then(myJson => this.setState({ projects: myJson.length }));
    };
    // Todo: set up LI JS SDK
    //https://developer.linkedin.com/docs/getting-started-js-sdk
    getLinkedInSkills = () => {
        fetch(
            "https://api.linkedin.com/v2/skills?locale.language=en&locale.country=US"
        )
            .then(response => response.json())
            .then(myJson => this.setState({ skills: myJson.elements.length }));
    };

    getTreehousePoints = () => {
        fetch("https://teamtreehouse.com/kevinanderson6.json")
            .then(response => response.json())
            .then(myJson =>
                this.setState({ educationPoints: myJson.points.total })
            );
    };

    renderLi = () => {
        return stats.map((s, i) => {
            const { title, value } = s;
            if (title === "Education Pts") {
                return (
                    <Sli key={i}>
                        <SdivNumber>{this.state.educationPoints}</SdivNumber>
                        <SdivSubject>{title}</SdivSubject>
                    </Sli>
                );
            } else if (title === "Projects") {
                return (
                    <Sli key={i}>
                        <SdivNumber>{this.state.projects}</SdivNumber>
                        <SdivSubject>{title}</SdivSubject>
                    </Sli>
                );
            } else if (title === "Skills") {
                return (
                    <Sli key={i}>
                        <SdivNumber>{this.state.skills}</SdivNumber>
                        <SdivSubject>{title}</SdivSubject>
                    </Sli>
                );
            }

            return (
                <Sli key={i}>
                    <SdivNumber>{value}</SdivNumber>
                    <SdivSubject>{title}</SdivSubject>
                </Sli>
            );
        });
    };

    render() {
        return (
            <Ssection>
                <Srow>
                    <Sarticle>
                        <Sul>
                            {this.renderLi()}
                            {/* <Sli>
                                <SdivNumber>35+</SdivNumber>
                                <SdivSubject>Projects</SdivSubject>
                            </Sli>

                            <Sli>
                                <SdivNumber>
                                    {this.state.educationPoints}
                                </SdivNumber>
                                <SdivSubjectRed>Education Pts</SdivSubjectRed>
                            </Sli>

                            <Sli>
                                <SdivNumber>45</SdivNumber>
                                <SdivSubject>Tech Skills</SdivSubject>
                            </Sli>

                            <Sli>
                                <SdivNumber>5</SdivNumber>
                                <SdivSubjectRed>Degrees & Certs</SdivSubjectRed>
                            </Sli> */}
                        </Sul>
                    </Sarticle>
                </Srow>
            </Ssection>
        );
    }
}

export default Stats;

// ! Styles

export const Ssection = styled.section`
    height: auto;
    position: relative;
    background-image: url(${StatsBgImg});
    background-position: 0px -113.5px;
    width: 100%;
    background-attachment: fixed;
    background-size: cover;
    box-sizing: border-box;
    padding: 10%;
`;

export const Sarticle = styled.article`
    text-align: center;
`;

export const Sul = styled.ul`
    width: 100%;
    padding: 0;
`;

export const Sli = styled.li`
    width: 100%;
    display: block;
    margin-bottom: 1.25rem;
    text-align: center;
    list-style: none;
    ${mediaMin.desktop` display: inline-block; width: 25%`};
`;

const SdivNumber = styled.div`
    font-size: ${props => props.theme.fontSizeSecondary};
    line-height: 1.9375rem;
    display: block;
    margin-bottom: 0.25rem;
    color: ${props => props.theme.colorAccentTertiary};
    font-family: ${props => props.theme.fontFamilyPrimary};
    ${mediaMin.desktop`  font-size: 64px;
    line-height: 64px;`};
`;

const SdivSubject = styled.div`
    padding: 6px 3px;
    margin-top: 30px;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1px;
    font-family: ${props => props.theme.fontFamilyPrimary};
    background-color: ${props => props.theme.colorBgSecondary};
    color: ${props => props.theme.colorFontSecondary};
`;

const SdivSubjectRed = styled(SdivSubject)`
    background-color: ${props => props.theme.colorAccentPrimary};
`;
