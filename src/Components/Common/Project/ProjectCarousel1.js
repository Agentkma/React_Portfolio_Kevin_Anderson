// ! External
import ArrowForward from "@material-ui/icons/ArrowForward";
import ArrowBack from "@material-ui/icons/ArrowBack";
import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-styled-carousel";
import styled from "styled-components";

// ! Internal
import { content } from "../../../Assets/Content";
import { mediaMin } from "../../../Theme";

let currentImg, currentImgIndex;
const responsive = [
    { breakPoint: 1280, cardsToShow: 4 }, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
    { breakPoint: 760, cardsToShow: 2 }
];

export function ProjectCarousel1({ project }) {
    const { bannerImg } = content.projects[project];

    // currentImg = bannerImg[0];

    // currentImgIndex = 0;

    return (
        <Ssection>
            {/* <Sarticle1> */}
            <Slider
                showArrows
                showDots={false}
                cardsToShow={1}
                infinite={false}
                padding="0 0"
                RightArrow={<SrightArrow />}
                LeftArrow={<SleftArrow />}
            >
                {bannerImg.map(img => {
                    const { alt, src, srcSet, title } = img;

                    return (
                        <picture>
                            <source
                                srcSet={require(`../../../${srcSet[0]}`)}
                                type="image/png"
                            />
                            <Simg
                                src={require(`../../../${src}`)}
                                alt={alt}
                                title={title}
                            />
                        </picture>
                    );
                })}
            </Slider>
        </Ssection>
    );
}

export default ProjectCarousel1;

// ! Styles

const Ssection = styled.section`
    box-sizing: border-box;
    display: block;
    padding-bottom: 6rem;
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
const SleftArrow = styled(ArrowBack)`
    padding-left: 1rem;
    font-size: 4rem !important;
    cursor: pointer;
    position: absolute;
    left: 0;
    top: calc(50% - 5px);
    z-index: 1;
`;

const SrightArrow = styled(ArrowForward)`
    padding-right: 1rem;
    font-size: 4rem !important;
    cursor: pointer;
    position: absolute;
    right: 0;
    top: calc(50% - 5px);
    z-index: 1;
`;
