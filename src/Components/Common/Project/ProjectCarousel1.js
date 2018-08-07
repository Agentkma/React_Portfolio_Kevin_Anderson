// ! External
import ArrowForward from "@material-ui/icons/ArrowForward";
import ArrowBack from "@material-ui/icons/ArrowBack";
import React from "react";
import styled from "styled-components";

// ! Internal
import { content } from "../../../Assets/Content";

let currentImg, currentImgIndex;

export function ProjectCarousel1({ project }) {
    const { banner } = content.projects[project];

    currentImg = `../../../${banner[0]}`;
    console.log("currentImg", currentImg);
    currentImgIndex = 0;

    const forwardHandler = () => {
        if (currentImgIndex >= banner.length - 1) {
            currentImgIndex = 0;
            currentImg = `../../../${banner[currentImgIndex]}`;
        } else {
            currentImg = `../../../${banner[currentImgIndex + 1]}`;
        }
    };

    const backHandler = params => {};

    return (
        <Ssection>
            <ArrowBack onClick={backHandler} />
            <ArrowForward onClick={forwardHandler} />
        </Ssection>
    );
}

export default ProjectCarousel1;

// ! Styles

const Ssection = styled.section`
    box-sizing: border-box;
    /* background-color: ${props => props.theme.colorBgPrimary}; */
    background: require('${currentImg}') cover center no-repeat;
    height: 90vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
