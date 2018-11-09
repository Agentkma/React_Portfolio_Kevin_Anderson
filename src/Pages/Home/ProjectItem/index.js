// ! External
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// ! Internal
import { content } from "../../../Assets/Content";
import cursor from "../../../Assets/Images/plus@2x.png";
import { media } from "../../../Theme";

export const ProjectItem = ({ name }) => {
    const { projects } = content.home.main;

    let project = projects.filter(p => p.name === name);

    const { description, img, to } = project[0];

    return (
        <Sdiv>
            <SDiv2>
                <picture>
                    <source
                        srcSet={require(`../../../${img.srcSet[0]}`)}
                        type="image/webp"
                    />
                    <Simg
                        src={require(`../../../${img.src}`)}
                        alt={img.alt}
                        title={img.title}
                    />
                </picture>

                <Slink to={to}>
                    <SdivProjectItem>
                        <Sp>{name}</Sp>

                        <Sh3>{description}</Sh3>
                    </SdivProjectItem>
                </Slink>
            </SDiv2>
        </Sdiv>
    );
};

export default ProjectItem;

// ! Styles

const Sdiv = styled.div`
    position: relative;
    display: block;
    box-sizing: border-box;
`;

const SDiv2 = styled.div`
    /* position: absolute;
    left: 0;
    top: 0; */
    margin: 0 !important;
    padding: 0 !important;
    min-height: fit-content;
    overflow: hidden;
    display: block;
    box-sizing: border-box;
`;

const Simg = styled.img`
    display: block;
    width: 100% !important;
    max-width: 100%;
    height: 100%;
    border: 0;
    /* transition: all 0.4s ease-in-out;
    transform: translateY(0);
    ${Slink}:hover & {
        transform: translateY(100%);
    } */
`;

const Slink = styled(Link)`
    box-sizing: border-box;
    opacity: 0;
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 100000000;

    text-decoration: none !important;
    transition: all 0.4s ease-in-out;
    color: ${props => props.theme.colorFontTertiary};
    background-color: white;
    &:hover {
        opacity: 1;
        cursor: url(${cursor}) 40 40, crosshair;
    }
`;

const SdivProjectItem = styled.div`
    text-align: left;
    padding: 100px 120px;
    width: auto;
    height: auto;
    display: block;

}`;

const Sp = styled.p`
    font-size: 1.125rem;
    line-height: 1.5625rem;
    letter-spacing: normal;
    margin-top: 0;
    border-bottom: solid 5px;
    padding-bottom: 5px;
    text-transform: none;
    width: fit-content;
    color: ${props => props.theme.colorFontQuaternary};
    ${media.desktop`font-size: 0.875rem;
    line-height: 1.3125rem;`};
`;

const Sh3 = styled.h3`
    border-color: ${props => props.theme.colorAccentPrimary};
    letter-spacing: normal;
    font-size: 1.125rem;
    line-height: 1.5625rem;
    text-transform: none;
    padding-bottom: 5px;
    border-bottom: solid 2px;
    font-weight: 200;
    color: ${props => props.theme.colorFontQuaternary};
    width: fit-content;
    ${media.desktop`font-size: 0.875rem;
    line-height: 1.3125rem;`};
`;
