// ! External
import React from "react";
import styled from "styled-components";

// ! Internal
import { content } from "../../../Assets/Content";
import Container from "../../../Components/Common/Container";
import { media } from "../../../Theme";
import { ScaleInVerTop } from "../../../Theme/animations";
//* misc

export const WorksFilterPanel = ({ click }) => {
    const items = content.home.main.worksFilter.map((category, index) => {
        return (
            <li key={index} onClick={e => click(e)}>
                {category}
            </li>
        );
    });

    return (
        <ScaleInVerTop id="works-filter-panel">
            <Ssection>
                <Container>
                    <Sul>{items}</Sul>
                </Container>
            </Ssection>
        </ScaleInVerTop>
    );
};

export default WorksFilterPanel;

// ! Styles

const Ssection = styled.section`
    width: 100%;
    z-index: 9999;
    position: relative;
    top: 9vh;
    left: 0;
    padding: 2.5rem 0;
    background-color: ${props => props.theme.colorBgSecondary};
`;

const Sul = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    ${media.tablet`text-align: center`};
    li {
        display: inline-block;
        margin: 1rem;
        &:last-child:after {
            display: none;
        }
        font-size: 1.5rem;
        line-height: 1rem;
        color: ${props => props.theme.colorFontSecondary};
        text-decoration: none !important;
        text-transform: capitalize;
        &:hover {
            color: ${props => props.theme.colorFontHoverPrimary};
        }
        &:hover {
            cursor: pointer;
        }
    }
`;
