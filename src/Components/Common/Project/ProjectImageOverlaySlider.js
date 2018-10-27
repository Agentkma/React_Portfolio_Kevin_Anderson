// ! External
import ArrowForward from "@material-ui/icons/ArrowForward";
import ArrowBack from "@material-ui/icons/ArrowBack";
import { ScloseIcon } from "../../../shared/StyledComponents";
import React from "react";
import Slider from "react-styled-carousel";
import styled from "styled-components";

// ! Internal
import { content } from "../../../Assets/Content";
import { FadeInPageContainer } from "../../../Theme/animations";

export function ProjectImageOverlaySlider({ click, project }) {
    const { bannerImg } = content.projects[project];

    return (
        <FadeInPageContainer>
            <Ssection>
                <ScloseIconMod onClick={click} />
                <Slider
                    autoSlide={false}
                    cardsToShow={1}
                    infinite={false}
                    padding="0 0"
                    showArrows
                    showDots={false}
                    RightArrow={<SrightArrow />}
                    LeftArrow={<SleftArrow />}
                >
                    {bannerImg.map((img, index) => {
                        const { alt, src, srcSet, title } = img;
                        const counterCurrent = index + 1;
                        const counterTotal = bannerImg.length;

                        return (
                            <picture key={index}>
                                <source
                                    srcSet={require(`../../../${srcSet[0]}`)}
                                    type="image/png"
                                />
                                <Scounter
                                >{`${counterCurrent}/${counterTotal}`}</Scounter>
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
        </FadeInPageContainer>
    );
}

export default ProjectImageOverlaySlider;

// ! Styles

const Ssection = styled.section`
    display: block !important;
    position: absolute;
    width: 100%;
    top: 7.75vh;
    z-index: 101;
    @media (min-width: 768px) {
        top: 0;
        right: 0;
        z-index: 999;
        position: fixed;
        height: 100vh;
    }
`;

const Scounter = styled.article`
    position: absolute;
    top: 0%;
    left: 0%;
    height: 2rem !important;
    width: 2rem !important ;
    font-size: 4rem;
    color: ${props => props.theme.colorBgPrimary};
`;

const Simg = styled.img`
    display: block;
    max-width: 100%;
    width: 100%;
    height: 100%;
    border: 0;
`;

const SleftArrow = styled(ArrowBack)`
    padding-left: 1rem;
    font-size: 4rem !important;
    cursor: pointer;
    position: absolute;
    left: 0;
    top: calc(50% - 5px);
    z-index: 1;
    &:hover {
        transition: all 0.5s ease-in-out;
        transform: scale(1.2);
    }
`;

const SrightArrow = styled(ArrowForward)`
    padding-right: 1rem;
    font-size: 4rem !important;
    cursor: pointer;
    position: absolute;
    right: 0;
    top: calc(50% - 5px);
    z-index: 1;
    &:hover {
        transition: all 0.5s ease-in-out;
        transform: scale(1.2);
    }
`;

const ScloseIconMod = styled(ScloseIcon)`
    top: 0%;
    right: 0%;
`;
