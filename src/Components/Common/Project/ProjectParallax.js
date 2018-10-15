// ! External

import React, { Fragment } from "react";
import styled from "styled-components";

// ! Internal

import { content } from "../../../Assets/Content";
import { mediaMin } from "../../../Theme";
import {
    SsectionParallax,
    SarticleMainHeading,
    SdivValign
} from "../../../shared/StyledComponents";

const renderBgSections = bannerImg => {
    return bannerImg.map((img, index) => {
        const { overLay, src } = img;

        const style = {
            backgroundImage: "url(" + require(`../../../${src}`) + ")"
        };

        return (
            <Ssection key={index} style={style}>
                <Soverlay>
                    <SdivValign>
                        <Sh1>{overLay}</Sh1>
                    </SdivValign>
                </Soverlay>
            </Ssection>
        );
    });
};

const ProjectParallax = ({ project }) => {
    const { bannerImg } = content.projects[project];
    // TODO: can't get section background dynamic this way

    return <Fragment>{renderBgSections(bannerImg)}</Fragment>;
};

export default ProjectParallax;

// ! Styles

const Ssection = styled(SsectionParallax)`
    height: 95vh;

    background-image: url();
`;

const Soverlay = styled(SarticleMainHeading)`
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

const Sh1 = styled.h1`
    color: white;
    font-size: 3rem;
    margin-top: 0;
    margin-bottom: 0;
    line-height: 1.1;
    font-weight: 500;
`;
