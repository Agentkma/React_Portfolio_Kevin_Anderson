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

    return (
        <Ssection>
            {images}
            {/* <article class="col-md-6 text-left no-pad">
                        <a
                            class="venobox"
                            data-gall="portfolio-gallery100"
                            href="images/project/project01/gEats1-1200x700.png"
                        >
                            <img
                                data-no-retina
                                alt=
                                title=
                                class="img-responsive lozad"
                                data-src="images/project/project01/gEats1-1200x700.png"
                            />
                        </a>
                    </article>
                    <article class="col-md-6 text-left no-pad">
                        <a
                            class="venobox"
                            data-gall="portfolio-gallery100"
                            href="images/project/project01/gEats2-1200x700.png"
                        >
                            <img
                                data-no-retina
                                alt="order sent message screen shot"
                                title="order sent message"
                                class="img-responsive lozad"
                                data-src="images/project/project01/gEats2-1200x700.png"
                            />
                        </a>
                    </article>
                    <article class="col-md-6 text-left no-pad">
                        <a
                            class="venobox"
                            data-gall="portfolio-gallery100"
                            href="images/project/project01/gEats3-1200x700.png"
                        >
                            <img
                                data-no-retina
                                alt="galvanize eats info boxes"
                                title="info boxes"
                                class="img-responsive lozad"
                                data-src="images/project/project01/gEats3-1200x700.png"
                            />
                        </a>
                    </article>
                    <article class="col-md-6 text-left no-pad">
                        <a
                            class="venobox"
                            data-gall="portfolio-gallery100"
                            href="images/project/project01/gEats4-1200x700.png"
                        >
                            <img
                                data-no-retina
                                alt="galvanize eats mobile phone view"
                                title="mobile phone view"
                                class="img-responsive lozad"
                                data-src="images/project/project01/gEats4-1200x700.png"
                            />
                        </a>
                    </article>
                    <article class="col-md-6 text-left no-pad">
                        <a
                            class="venobox"
                            data-gall="portfolio-gallery100"
                            href="images/project/project01/gEats5-1200x700.png"
                        >
                            <img
                                data-no-retina
                                alt="galvanize eats table view"
                                title="tablet view"
                                class="img-responsive lozad"
                                data-src="images/project/project01/gEats5-1200x700.png"
                            />
                        </a>
                    </article> */}
        </Ssection>
    );
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
