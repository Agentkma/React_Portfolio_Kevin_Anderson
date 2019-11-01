// ! External

import React, { useState, useEffect, useRef } from "react";
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
    const [showSkillAnimation, setShowSkillAnimation] = useState(false);
    const [animatedCount, setAnimatedCount] = useState({ educationPoints: 0, projects: 0, skills: 0, degreesCerts: 0 })
    const [count, setCount] = useState(0);

    // ! Misc

    const statsRef = useRef(null);

    // ! Effects

    useEffect(() => {
        // getLinkedInSkills();
        getGitHubProjects();
        getTreehousePoints();
    }, []);

    useEffect(() => {

        window.addEventListener('scroll', listener)

        return () => {
            window.removeEventListener('scroll', listener)
        };
    }, []);

    const useInterval = (callback, delay) => {
        const savedCallback = useRef();

        // Remember the latest callback.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        // Set up the interval.
        useEffect(() => {
            function tick() {
                savedCallback.current();
            }
            if (delay !== null || count > animatedCount.educationPoints && count > animatedCount.projects && count > animatedCount.skills && count > animatedCount.degreesCerts) {
                let id = setInterval(tick, delay);
                return () => clearInterval(id);
            }
        }, [delay]);
    }

    useInterval(() => {
        if (showSkillAnimation) {
            // Your custom logic here

            let eduCount = getCount({ state: educationPoints, type: 'educationPoints' });
            let projectCount = getCount({ state: projects, type: 'projects' });
            let skillsCount = getCount({ state: skills, type: 'skills' });
            let degreesCount = getCount({ state: degreesCerts, type: 'degreesCerts' });

            setAnimatedCount({ educationPoints: eduCount, projects: projectCount, skills: skillsCount, degreesCerts: degreesCount });
            setCount(count + 1);
        }
    }, 5);


    // ! Methods

    const listener =
        e => {
            const _window = window;
            const scrollPos = _window.scrollY;
            const sectionPosition = parseInt(statsRef.current.offsetTop) - 400;

            if (scrollPos > sectionPosition && !showSkillAnimation) {

                setShowSkillAnimation(true)

            } else if (scrollPos < sectionPosition && showSkillAnimation) {
                console.log('inside else')
                // user has scrolled back to header's territory, 
                // it's optional here for you to remove the element 
                setShowSkillAnimation(false)
            }
        }

    const getCount = ({ state, type }) => {
        return count < state ? count + 1 : animatedCount[type];
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
    const getPointsPath = (title = '') => {
        let count;
        switch (title) {
            case "Education Pts": count = animatedCount.educationPoints;
                break;
            case "Projects": count = animatedCount.projects;
                break;
            case "Skills": count = animatedCount.skills;
                break;
            default: count = animatedCount.degreesCerts;
        }
        return count;
    }


    const renderLi = () => {

        return stats.map((s, i) => {
            const { title } = s;
            return (
                <Sli key={`${i}-${title}`}>
                    <SdivNumber>{getPointsPath(title)}</SdivNumber>
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
