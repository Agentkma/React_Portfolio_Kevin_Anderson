// ! External

import React, { Component } from "react";
import styled from "styled-components";

// ! Internal
import { mediaMin } from "../../../Theme";
import { content } from "../../../Assets/Content";
import ProjectImagesOverlaySlider from "./ProjectImageOverlaySlider";

class ProjectImages extends Component {
    state = {
        showImageOverlaySlider: false,
        currentImg: null,
        imgCount: content.projects[this.props.project].imgContainer.length
    };

    overlaySliderToggleHandler = index => {
        index++;
        this.setState(({ showImageOverlaySlider }) => {
            return {
                showImageOverlaySlider: !showImageOverlaySlider,
                imgCount: index
            };
        });
    };

    render() {
        const { project } = this.props;
        const { currentImg, showImageOverlaySlider, imgCount } = this.state;

        const { imgContainer } = content.projects[project];
        const images = imgContainer.map((img, index) => {
            return (
                <article key={index} onClick={this.overlaySliderToggleHandler}>
                    <Simg
                        alt={img.alt}
                        title={img.title}
                        src={require(`../../../${img.src}`)}
                    />
                </article>
            );
        });

        return (
            <Ssection>
                {" "}
                {showImageOverlaySlider ? (
                    <ProjectImagesOverlaySlider
                        click={this.overlaySliderToggleHandler}
                        currentImg={currentImg}
                        imgCount={imgCount}
                        project={project}
                    />
                ) : null}
                {images}
            </Ssection>
        );
    }
}

export default ProjectImages;

// ! Styles

const Ssection = styled.section`
    box-sizing: border-box;
    height: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 0.5em;
    ${mediaMin.desktop` grid-template-columns:repeat(auto-fill, minmax(500px, 1fr));`};
`;

const Simg = styled.img`
    display: block;
    width: 100% !important;
    max-width: 100%;
    height: 100%;
    border: 0;
    &:hover {
        cursor: crosshair;
    }
`;
