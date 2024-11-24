import  { useState, useEffect, useRef, FC } from "react";
import CountUp from 'react-countup';
import styled from "styled-components";

import { content } from "../../Assets/Content";
import StatsBgImg from "../../Assets/Images/about/about-stats1.jpg";
import { Srow } from "../../shared/StyledComponents";
import { mediaMin } from "../../Theme";

const { stats } = content.about.main;

const Stats:FC =()=> {

    const [educationPoints, setEducationPoints] = useState(0);
    const [projects, setProjects] = useState(0);
    const [skills] = useState(45);
    const degreesCerts = 5
    const [showSkillAnimation, setShowSkillAnimation] = useState(false);

    const statsRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        // getLinkedInSkills();
        getGitHubProjects();
        getTreehousePoints();

        window.addEventListener("scroll", listener);

        return () => {
            window.removeEventListener("scroll", listener);
        };
    }, []);

    
    const listener = () => {
        const _window = window;
        const scrollPos = _window.scrollY;
        const sectionPosition = statsRef.current ? parseInt(statsRef.current?.offsetTop.toString()) - 400 : 0;

        
        if (scrollPos > sectionPosition && !showSkillAnimation) {
            setShowSkillAnimation(true);
            return 
        } 
        
         if (scrollPos < sectionPosition && showSkillAnimation) {
          
            setShowSkillAnimation(false);
        }
    };


    const getGitHubProjects = async () => {
        const response = await fetch(
            "https://api.github.com/users/Agentkma/repos"
        );
        const myJson = await response.json();
        setProjects(myJson.length);
    };
    // Todo: set up LI JS SDK
    // //https://developer.linkedin.com/docs/getting-started-js-sdk
    // const getLinkedInSkills = async () => {
    //     const response = await fetch(
    //         "https://api.linkedin.com/v2/skills?locale.language=en&locale.country=US"
    //     );
    //     const myJson = await response.json();
    //     setSkills(myJson.elements.length);
    // };

    const getTreehousePoints = async () => {
        const response = await fetch(
            "https://teamtreehouse.com/kevinanderson6.json"
        );
        const myJson = await response.json();
        setEducationPoints(myJson.points.total);
    };
    const getPoints = (title = "") => {
        let count;
        switch (title) {
            case "Education Pts":
                count = educationPoints;
                break;
            case "Projects":
                count =projects;
                break;
            case "Skills":
                count = skills;
                break;
            default:
                count = degreesCerts;
        }
        return count;
    };

    const renderLi = () => {
       
        return stats.map(({ title }, i) => {
         
            const points =getPoints(title)
            return (
                <Sli key={`${i}-${title}`}>
                    <SdivNumber>
                    < CountUp start={0} end={points} duration={3}/>
                   </SdivNumber>
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
