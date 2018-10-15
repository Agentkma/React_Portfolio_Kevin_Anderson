// ! External

import React, { Fragment } from "react";
import styled from "styled-components";

// ! Internal

import { content } from "../../../Assets/Content";
import { mediaMin } from "../../../Theme";
import {
    SsectionParallax,
    SarticleMainHeading
} from "../../../shared/StyledComponents";

const renderBgSections = bannerImg => {
    return bannerImg.map((img, index) => {
        const { overLay, src } = img;

        const style = {
            backgroundImage: "url(" + require(`../../../${src}`) + ")"
        };

        return (
            <Ssection key={index} style={style}>
                <Soverlay>{overLay}</Soverlay>
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
    opacity: 0;
    transition: all 1s ease-in;
    ${Ssection}:hover & {
        opacity: 1;
    }
    ${mediaMin.desktop`
    margin: auto;
    text-align: center;`};
`;
