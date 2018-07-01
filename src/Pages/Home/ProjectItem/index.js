import React from "react";
import styled from "styled-components";

import { content } from "../../../Assets/Content";

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

            <a href="project02.html">
                <div className=" works-item-inner ContentB">
                    <p>
                        <span className="dark font3bold ">MacroPal</span>
                    </p>
                    <h3>
                        <span className="dark font3 ">{description}</span>
                    </h3>
                </div>
            </a>
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
