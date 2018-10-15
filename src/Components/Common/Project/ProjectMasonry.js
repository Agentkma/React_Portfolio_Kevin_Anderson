// ! External

import React, { Fragment } from "react";
import styled from "styled-components";

// ! Internal

import { content } from "../../../Assets/Content";
import { mediaMin } from "../../../Theme";
import {
    SsectionParallax,
    SarticleMainHeading,
    SdivValign,
    SresponsiveImg
} from "../../../shared/StyledComponents";

const renderBgSections = bannerImg => {
    return bannerImg.map((img, index) => {
        const { overLay, src } = img;

        return (
            <Ssection key={index}>
                <Sarticle>
                    <SresponsiveImg />
                    <Soverlay> {overLay}</Soverlay>
                </Sarticle>
            </Ssection>
        );
    });
};

const ProjectMasonry = ({ project }) => {
    const { bannerImg } = content.projects[project];

    return <Fragment>{renderBgSections(bannerImg)}</Fragment>;
};

export default ProjectMasonry;

// ! Styles

const Ssection = styled.section`
    height: 95vh;
    background-color: ${props => props.theme.colorBgSecondary};
    margin: 0px !important;
    padding: 0;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 18.75vh);
    grid-template-areas:
        "one two three three"
        "one two three three"
        "four five three three"
        "four five six seven";
`;

const Sarticle = styled.article`
    margin: 0 !important;
    padding: 0 !important;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: block;
    border: 1px solid black;
`;

const Soverlay = styled.div`
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.4s linear;
    background-color: rgba(0, 0, 0, 0.8);
    ${Ssection}:hover & {
        opacity: 1;
    }
    ${mediaMin.desktop`
    margin: auto;
    text-align: center;`};
`;

// const Sh1 = styled.h1`
//     color: white;
//     font-size: 3rem;
//     margin-top: 0;
//     margin-bottom: 0;
//     line-height: 1.1;
//     font-weight: 500;
// `;
