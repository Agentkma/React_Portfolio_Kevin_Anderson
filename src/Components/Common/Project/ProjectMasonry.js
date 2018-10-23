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

const renderBgSections = bannerImgsArray => {
    return bannerImgsArray.map((img, index) => {
        const { alt, title, overLay, src, srcSet } = img;

        return (
            <Sarticle key={index}>
                <SresponsiveImg
                    src={require(`../../../${src}`)}
                    alt={alt}
                    title={title}
                    srcSet={require(`../../../${srcSet}`)}
                />
                <Soverlay> {overLay}</Soverlay>
            </Sarticle>
        );
    });
};

const ProjectMasonry = ({ project }) => {
    const { bannerImg: bannerImgsArray } = content.projects[project];

    return <Ssection>{renderBgSections(bannerImgsArray)}</Ssection>;
};

export default ProjectMasonry;

// ! Styles

const Sarticle = styled.article`
    margin: 0 !important;
    padding: 0 !important;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: block;
    border: 1px solid black;
`;

const Ssection = styled.section`
    height: 80vh;
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
        "four five five six"
        "four five five six";
    ${Sarticle}:nth-child(1) {
        grid-area: one;
    }
    ${Sarticle}:nth-child(2) {
        grid-area: two;
    }
    ${Sarticle}:nth-child(3) {
        grid-area: three;
    }
    ${Sarticle}:nth-child(4) {
        grid-area: six;
    }
    ${Sarticle}:nth-child(5) {
        grid-area: five;
    }
    ${Sarticle}:nth-child(6) {
        grid-area: four;
    }
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
