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

let sectionBgImg;

const ProjectParallax = ({ project }) => {
    const { bannerImg } = content.projects[project];
    // TODO: can't get section background dynamic this way
    // can I use a picture element in lieu but still
    // get the parallax effect?
    const renderBgSections = () => {
        return bannerImg.map((img, index) => {
            const { overLay, src } = img;

            sectionBgImg = `../../../${src}`;
            // const style = {
            //     backgroundImage: `url(../../../${src})`
            // };

            return (
                <Ssection key={index}>
                    <Soverlay>{overLay}</Soverlay>
                </Ssection>
            );
        });
    };

    return <Fragment>{renderBgSections()}</Fragment>;
};

export default ProjectParallax;

// ! Styles

const Ssection = styled(SsectionParallax)`
    height: 95vh;
    background-image: url(${sectionBgImg});
`;

const Soverlay = styled(SarticleMainHeading)`
    opacity: 0;
    &:hover {
        transition: all 1s ease-in;
        opacity: 1;
    }
    ${mediaMin.desktop` 
    margin: auto;
    text-align: center;`};
`;
