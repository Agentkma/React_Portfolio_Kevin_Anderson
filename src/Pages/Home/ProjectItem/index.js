import React from "react";
import styled from "styled-components";

import { content } from "../../../Assets/Content";
import { media } from "../../../Theme";

export const ProjectItem = ({ description, img, name }) => {
    return (
        <div className="works-item signature-karl ImageWrapper ContentWrapperB chrome-fix works-item-one-half info css-frameworks front-end ui">
            <picture>
                <source srcset={img.srcSet[0]} type="image/webp" />
                <StyledImg
                    src={img.src}
                    alt={img.alt}
                    title={img.title}
                    className="img-responsive lozad"
                />
            </picture>

            <StyledA href="project02.html">
                <div className=" works-item-inner ContentB">
                    <p>
                        <StyledSpan className="dark font3bold ">
                            MacroPal
                        </StyledSpan>
                    </p>
                    <h3>
                        <StyledH3Span className="dark font3 ">
                            {description}
                        </StyledH3Span>
                    </h3>
                </div>
            </StyledA>
        </div>
    );
};

export default ProjectItem;

const StyledImg = styled.img`
    display: block;
    width: 100% !important;
    max-width: 100%;
    height: auto;
`;

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

const StyledA = styled.a`
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
    &:hover {
        opacity: 1;
        transition: all 0.4s ease-in-out;
        cursor: require('../../../Assets/Images/zoom.png') 40 40, crosshair;
}
    }
`;
