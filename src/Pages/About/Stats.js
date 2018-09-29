// ! External

import React from "react";
import styled from "styled-components";

// ! Internal

import {
    Scontainer,
    SdivLine,
    Srow,
    SsectionGrid,
    SdivValign
} from "../../shared/StyledComponents";
import StatsBgImg from "../../Assets/Images/about/about-stats1.jpg";

const Stats = () => {
    return (
        <Ssection>
            <Srow>
                <article class="text-center col-md-12">
                    <ul class="elements-counter-wrap signature-karl">
                        <li
                            data-delay="100"
                            class="elements-counter signature-karl"
                        >
                            <div class="number font3bold white ">35+</div>
                            <div class="subject font3 dark-bg white">
                                Projects
                            </div>
                        </li>

                        <li
                            data-delay="300"
                            class="elements-counter signature-karl"
                        >
                            <div id="pointCount" class="number font3bold white">
                                24453
                            </div>
                            <div class="subject font3 color-bg white">
                                Education Pts
                            </div>
                        </li>

                        <li
                            data-delay="500"
                            class="elements-counter signature-karl"
                        >
                            <div class="number font3bold white">45</div>
                            <div class="subject font3 dark-bg white">
                                Tech Skills
                            </div>
                        </li>

                        <li
                            data-delay="700"
                            class="elements-counter signature-karl"
                        >
                            <div class="number font3bold white">5</div>
                            <div class="subject font3 color-bg white">
                                Degrees & Certs
                            </div>
                        </li>
                    </ul>
                </article>
            </Srow>
        </Ssection>
    );
};

export default Stats;

// ! Styles

const Ssection = styled.section`
    height: 50vh;
    position: relative;
    background-image: url(${StatsBgImg});
    background-position: 0px -113.5px;
    width: 100%;
    background-attachment: fixed;
    background-size: cover;
`;
