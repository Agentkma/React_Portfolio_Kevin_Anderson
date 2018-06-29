import React from "react";
import styled from "styled-components";

import { content } from "../../../Assets/Content";
import Container from "../../../Components/Common/Container";

export const WorksFilterPanel = () => {
    return (
        <StyledSection
            id="works-filter-panel"
            class="works-filter-panel signature-karl dark-bg"
        >
            <Container>
                <StyledUl className="font3">
                    <li>
                        <a id="all" href="#" data-filter="*" class="active">
                            <span>All</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" data-filter=".css-frameworks">
                            <span>CSS Framework</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" data-filter=".front-end">
                            <span>Front End</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" data-filter=".full-stack">
                            <span>Full Stack</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" data-filter=".SPA">
                            <span>Single Page Apps</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" data-filter=".pure-css">
                            <span>Pure CSS</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" data-filter=".mobile">
                            <span>Mobile</span>
                        </a>
                    </li>
                </StyledUl>
            </Container>
        </StyledSection>
    );
};

export default WorksFilterPanel;

const StyledSection = styled.section`
    display: none;
    width: 100%;
    z-index: 9999;
    position: relative;
    top: 0;
    left: 0;
    padding: 3.75rem 0;
    background-color: ${props => props.theme.colorBgSecondary};
    li a {
        color: ${props => props.theme.colorFontSecondary};
        &:hover {
            ${props => props.theme.colorFontHoverPrimary};
        }
    }
`;

const StyledUl = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: left;
    ${media.tablet`text-align: center`};
    li {
        display: inline-block;
        margin-left: 10px;
        margin-right: 10px;
        &:last-child:after {
            display: none;
        }

        a {
            font-size: 16px;
            line-height: 23px;
            color: ${props => props.theme.colorFontSecondary};
            &:hover {
                color: ${props => props.theme.colorFontHoverPrimary};
            }
        }
    }
`;
