// ! External

import React from "react";
import styled from "styled-components";

// ! Internal

import { content } from "../../../Assets/Content";
import { mediaMin } from "../../../Theme";
import { SresponsiveImg } from "../../../shared/StyledComponents";

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
                <Soverlay>
                    <Sh3>{overLay}</Sh3>
                </Soverlay>
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
    position: relative;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1000;
    position: absolute;
    top: 0;
    left: 0;
    transform: rotate(-0.25turn);
    transition: all 0.25s linear;
    &:hover {
        opacity: 1;
        transform: rotate(0turn);
    }
    ${mediaMin.desktop`
    margin: auto;
    text-align: center;`};
`;

const Sh3 = styled.h3`
    color: white;
    font-size: 2rem;
    margin-top: 0;
    margin-bottom: 0;
    line-height: 1.1;
    font-weight: 500;
`;
