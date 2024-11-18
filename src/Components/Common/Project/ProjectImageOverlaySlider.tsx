// ! External
import ArrowForward from "@mui/icons-material/ArrowForward";
import ArrowBack from "@mui/icons-material/ArrowBack";
import Picture from "@mui/icons-material/PictureInPicture";
import { ScloseIcon } from "../../../shared/StyledComponents";
import React from "react";
import Slider from "react-styled-carousel";
import styled from "styled-components";

// ! Internal
import { content } from "../../../Assets/Content";
import { FadeInPageContainer } from "../../../Theme/animations";
interface ProjectImageOverlaySliderProps {
    click: () => void;
    counterPlus: () => void;
    counterMinus: () => void;
    project: string;
}
export function ProjectImageOverlaySlider({
    click,
    counterPlus,
    counterMinus,
    project
}:ProjectImageOverlaySliderProps) {
    const { imgContainer } = content.projects[Number(project)];

    return (
        <FadeInPageContainer>
            <Ssection>
                <ScloseIconMod onClick={click} />
                <Sslider
                    autoSlide={false}
                    cardsToShow={1}
                    infinite={false}
                    padding="0 0"
                    showArrows
                    showDots
                    Dot={<Picture />}
                    DotsWrapper={() => <Sdots />}
                    RightArrow={<SrightArrow onClick={counterPlus} />}
                    LeftArrow={<SleftArrow onClick={counterMinus} />}
                >
                    {imgContainer.map((img, index) => {
                        const { alt, src, title } = img;

                        return (
                            <picture key={index}>
                                <Simg
                                    src={require(`../../../${src}`)}
                                    alt={alt}
                                    title={title}
                                />
                            </picture>
                        );
                    })}
                </Sslider>
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
        right: 0;
        z-index: 999;
        position: fixed;
        height: 92.75vh;
    }
`;

const Sslider = styled(Slider)`
    position: relative;
`;

const Sdots = styled.ul`
    position: absolute;
    top: 10%;
    left: 2.5%;
    height: 2rem !important;
    width: 2rem !important ;
    font-size: 2rem;
    color: ${props => props.theme.colorFontQuaternary};
    z-index: 1000;
`;

const Simg = styled.img`
    box-sizing: border-box;
    padding: 10% 20%;
    background-color: ${props => props.theme.colorBgPrimary};
    display: block;
    max-width: 100%;
    width: 100%;
    height: 92.75vh;
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
    position: absolute;
    top: 7.75vh;
    right: 2.5%;
    height: 2rem !important;
    width: 2rem !important ;
    font-size: 2rem;
    color: ${props => props.theme.colorFontQuaternary};
    z-index: 1000;
`;
