// ! External

import React from "react";
import styled from "styled-components";

// ! Internal
import { mediaMin } from "../../../Theme";
import { content } from "../../../Assets/Content";

export function ProjectImages({ project }) {
    const { imgContainer } = content.projects[project];

    const images = imgContainer.map((img, index) => {
        return (
            <article key={index}>
                <a href="images/project/project01/gEats6-1200x700.png">
                    <Simg
                        alt={img.alt}
                        title={img.title}
                        src={require(`../../../${img.src}`)}
                    />
                </a>
            </article>
        );
    });

    return <Ssection>{images}</Ssection>;
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
`;
