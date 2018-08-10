// ! External
import ArrowForward from "@material-ui/icons/ArrowForward";
import ArrowBack from "@material-ui/icons/ArrowBack";
import React from "react";
import styled from "styled-components";

// ! Internal
import { content } from "../../../Assets/Content";
import { mediaMin } from "../../../Theme";

let currentImg, currentImgIndex;

export function ProjectCarousel1({ project }) {
    const { banner } = content.projects[project];

    currentImg = `${banner[0]}`;
    console.log("currentImg", currentImg);
    currentImgIndex = 0;

    const forwardHandler = () => {
        if (currentImgIndex >= banner.length - 1) {
            currentImgIndex = 0;
            currentImg = `${banner[currentImgIndex]}`;
        } else {
            currentImg = `${banner[currentImgIndex + 1]}`;
        }
    };

    const backHandler = params => {};

    return (
        <Ssection>
            <Sarticle1>
                <picture>
                    <source
                        srcSet={require(`../../../${currentImg}`)}
                        // type="image/webp"
                    />
                    <Simg
                        src={require(`../../../${currentImg}`)}
                        // alt={img.alt}
                        // title={img.title}
                        // className="img-responsive lozad"
                    />
                </picture>
            </Sarticle1>
            <Sarticle2>
                <SarrowBack onClick={backHandler} />
                <SarrowForward onClick={forwardHandler} />
            </Sarticle2>
        </Ssection>
    );
}

export default ProjectCarousel1;

// ! Styles

const Ssection = styled.section`
    box-sizing: border-box;
    position: relative;
    /* background-color: ${props => props.theme.colorBgPrimary}; */
    height: 40vh;
    width: 100vw;
    ${mediaMin.tablet` height: 60vh;`};
    ${mediaMin.xlDesktop` height: 90vh;`};
   
`;

const Sarticle1 = styled.article`
    width: 100%;
    height: 100%;
`;
const Simg = styled.img`
    display: block;
    max-width: 100%;
    width: 100%;
    height: 100%;
    border: 0;
`;

const Sarticle2 = styled.article`
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const SarrowBack = styled(ArrowBack)`
    padding-left: 1rem;
    font-size: 4rem !important;
    cursor: pointer;
`;

const SarrowForward = styled(ArrowForward)`
    padding-right: 1rem;
    font-size: 4rem !important;
    cursor: pointer;
`;
