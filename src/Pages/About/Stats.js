// ! External

import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import styled from "styled-components";

// ! Internal

import { content } from "../../Assets/Content";
import StatsBgImg from "../../Assets/Images/about/about-stats1.jpg";
import { Srow } from "../../shared/StyledComponents";
import { mediaMin } from "../../Theme";

const { stats } = content.about.main;




function Stats() {

    // ! State

    const [educationPoints, setEducationPoints] = useState(0);
    const [projects, setProjects] = useState(0);
    const [skills, setSkills] = useState(45);
    const [degreesCerts, setDegreesCerts] = useState(5);
    const [showSkillAnimation, setVhowSkillAnimation] = useState(false);
    const [animatedCount, setAnimatedCount] = useState({ educationPoints: 0, projects: 0, skills: 0, degreesCerts: 0 })

    // ! Misc

    const statsRef = useRef(null);

    // ! Effects

    useEffect(() => {
        // getLinkedInSkills();
        getGitHubProjects();
        getTreehousePoints();


    }, []);

    useLayoutEffect(() => {
        const section = parseInt(statsRef.current.offsetHeight);
        window.addEventListener('scroll', calcScroll(section));

        return () => {
            window.removeEventListener('scroll', calcScroll)
        };
    });

    useEffect(() => {
        if (showSkillAnimation) {
            animateNumbers()
        }
    }, [showSkillAnimation])




    // ! Methods

    const getCount = (currentCount, type) => {
        return currentCount <= animatedCount[type] ? currentCount + 1 : animatedCount[type];
    }


    const animateNumbers = () => {
        // count from 0 to number every 100 ms
        let count = 0;

        let eduCount = getCount(count, educationPoints);
        let projectCount = getCount(count, projects);
        let skillsCount = getCount(count, skills);
        let degreesCount = getCount(count, degreesCerts);

        const timeoutId = setTimeout(() => {
            count += 1;
            setAnimatedCount({ educationPoints: eduCount, projects: projectCount, skills: skillsCount, degreesCerts: degreesCount })
        }
            , 100);


        clearTimeout(timeoutId);

    }


    const calcScroll = (section) => {
        const _window = window;
        const heightDiff = parseInt(section);
        const scrollPos = _window.scrollY;
        if (scrollPos > heightDiff) {
            // user has scrolled past Skills Section, 
            // rerender by setting State 
            setVhowSkillAnimation(true)

        } else {
            // user has scrolled back to header's territory, 
            // it's optional here for you to remove the element 
            setVhowSkillAnimation(false)
        }
    }

    const getGitHubProjects = async () => {
        const response = await fetch("https://api.github.com/users/Agentkma/repos");
        const myJson = await response.json();
        setProjects(myJson.length);
    };
    // Todo: set up LI JS SDK
    //https://developer.linkedin.com/docs/getting-started-js-sdk
    const getLinkedInSkills = async () => {
        const response = await fetch(
            "https://api.linkedin.com/v2/skills?locale.language=en&locale.country=US"
        )
        const myJson = await response.json();
        setSkills(myJson.elements.length);
    };

    const getTreehousePoints = async () => {
        const response = await fetch("https://teamtreehouse.com/kevinanderson6.json");
        const myJson = await response.json();
        setEducationPoints(myJson.points.total);

    };

    const renderLi = () => {

        return stats.map((s, i) => {
            const { title } = s;
            if (title === "Education Pts") {
                return (
                    <Sli key={i}>
                        <SdivNumber>{animatedCount.educationPoints}</SdivNumber>
                        <SdivSubjectRed>{title}</SdivSubjectRed>
                    </Sli>
                );
            } else if (title === "Projects") {
                return (
                    <Sli key={i}>
                        <SdivNumber>{animatedCount.projects}</SdivNumber>
                        <SdivSubject>{title}</SdivSubject>
                    </Sli>
                );
            } else if (title === "Skills") {
                return (
                    <Sli key={i}>

                        <SdivNumber>{animatedCount.skills}</SdivNumber>
                        <SdivSubject>{title}</SdivSubject>
                    </Sli>
                );
            }




            return (
                <Sli key={i}>
                    <SdivNumber>{animatedCount.degreesCerts}</SdivNumber>
                    <SdivSubjectRed>{title}</SdivSubjectRed>
                </Sli>
            );
        });
    };


    return (
        <Ssection ref={statsRef}>
            <Srow>
                <Sarticle>
                    <Sul>{showSkillAnimation ? renderLi() : null}</Sul>
                </Sarticle>
            </Srow>
        </Ssection>
    );
}


export default Stats



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
