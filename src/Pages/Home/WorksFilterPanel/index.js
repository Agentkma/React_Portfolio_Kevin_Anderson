import React from "react";
import styled from "styled-components";

import { content } from "../../../Assets/Content";
import Container from "../../../Components/Common/Container";
import { media } from "../../../Theme";
import { ScaleInVerTop } from "../../../Theme/animations";

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
        <ScaleInVerTop>
            <StyledSection
                id="works-filter-panel"
                className="works-filter-panel signature-karl dark-bg"
            >
                <Container>
                    <StyledUl className="font3">{items}</StyledUl>
                </Container>
            </StyledSection>
        </ScaleInVerTop>
    );
};

export default WorksFilterPanel;

const StyledSection = styled.section`
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
    display: flex;
    flex-wrap: wrap;
    ${media.tablet`text-align: center`};
    li {
        display: inline-block;
        margin-left: 0.625rem;
        margin-right: 0.625rem;
        &:last-child:after {
            display: none;
        }

        a {
            font-size: 1rem;
            line-height: 0.7rem;
            color: ${props => props.theme.colorFontSecondary};
            text-decoration: none !important;
            text-transform: capitalize;
            &:hover {
                color: ${props => props.theme.colorFontHoverPrimary};
            }
        }
    }
`;
