import React from "react";
import styled from "styled-components";
import { content } from "../../../Assets/Content";
import { media } from "../../../Theme";

export const ProjectItem = ({ name }) => {
    const { projects } = content.home.main;

    let project = projects.filter(p => p.name === name);

    const { description, img } = project[0];

    return (
        <StyledDiv className="works-item signature-karl ImageWrapper ContentWrapperB chrome-fix works-item-one-half info css-frameworks front-end ui">
            <picture>
                <source
                    srcSet={require(`../../../${img.srcSet[0]}`)}
                    type="image/webp"
                />
                <StyledImg
                    src={require(`../../../${img.src}`)}
                    alt={img.alt}
                    title={img.title}
                    className="img-responsive lozad"
                />
            </picture>

            <StyledA href="project02.html">
                <StyledDivProjectItem className=" works-item-inner ContentB">
                    <p>
                        <StyledSpan className="dark font3bold ">
                            {name}
                        </StyledSpan>
                    </p>
                    <h3>
                        <StyledH3Span className="dark font3 ">
                            {description}
                        </StyledH3Span>
                    </h3>
                </StyledDivProjectItem>
            </StyledA>
        </StyledDiv>
    );
};

export default ProjectItem;

const StyledDiv = styled.div`
    /* position: absolute;
    left: 0px;
    top: 0px; */
    margin: 0 !important;
    padding: 0 !important;
    /* width: 50% !important; */
    min-height: fit-content;
    overflow: hidden;
    display: block;
    box-sizing: border-box;
`;

const StyledImg = styled.img`
    display: block;
    width: 100% !important;
    max-width: 100%;
    height: auto;
    border: 0;
    transition: all 0.4s ease-in-out;
    &:hover {
        transform: translateY(100%);
    }
`;

const StyledA = styled.a`
    box-sizing: border-box;
    opacity: 0;
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 100;
    text-align: center;
    text-decoration: none !important;
    transition: all 0.4s ease-in-out;
    color: #121212;
    background-color: transparent;
    &:hover {
        text-decoration: none !important;
        opacity: 1;
        transition: all 0.4s ease-in-out;
        cursor: require("../../../Assets/Images/zoom.png") 40 40, crosshair;
    }
`;

const StyledDivProjectItem = styled.div`
    text-align: left;
    padding: 100px 120px;
    position: absolute;
    background: #ffffff;
    opacity: 0;
    visibility: hidden;
    width: 100%;
    height: 100%;
    display: block;
    top: -100%;
    left: 0;
    transition: all 0.3s ease 0s;
    &:hover {
        opacity: 1;
        visibility: visible;
        top: 0;
    }
}`;

const StyledSpan = styled.span`
    font-size: 1.125rem;
    line-height: 1.5625rem;
    letter-spacing: normal;
    margin-top: 0;
    border-bottom: solid 5px;
    padding-bottom: 5px;
    text-transform: none;
    color: ${props => props.theme.colorFontQuaternary};
    ${media.desktop`font-size: 0.875rem;
    line-height: 1.3125rem;`};
`;

const StyledH3Span = styled.span`
    border-color: #ff2238;
    letter-spacing: normal;
    font-size: 1.125rem;
    line-height: 1.5625rem;
    text-transform: none;
    margin-bottom: 5px;
    border-bottom: solid 2px;
    font-weight: 200;
    color: ${props => props.theme.colorFontQuaternary};
    ${media.desktop`font-size: 0.875rem;
    line-height: 1.3125rem;`};
`;
