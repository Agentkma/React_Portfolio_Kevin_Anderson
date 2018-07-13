import React from "react";
import styled from "styled-components";

import { content } from "../../../Assets/Content";
import Container from "../../../Components/Common/Container";
import { media } from "../../../Theme";

const items = content.home.main.worksFilter.map((category, index) => {
    if (index === 0) {
        return (
            <li key={category}>
                {" "}
                <a className="active" href="/">
                    {" "}
                    {category}
                </a>
            </li>
        );
    }
    return (
        <li key={category}>
            <a href="/"> {category}</a>
        </li>
    );
});

export const WorksFilterPanel = () => {
    return (
        <StyledSection
            id="works-filter-panel"
            className="works-filter-panel signature-karl dark-bg"
        >
            <Container>
                <StyledUl className="font3">{items}</StyledUl>
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
