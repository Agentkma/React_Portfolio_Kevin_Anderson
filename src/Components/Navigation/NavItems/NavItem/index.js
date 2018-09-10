import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// ! Internal
import { mediaMin } from "../../../../Theme";

export const NavItem = props => (
    <Sli>
        <SnavLink to={props.link} exact={props.exact} onClick={props.click}>
            {props.children}
        </SnavLink>
    </Sli>
);

export default NavItem;

// ! Styles

export const Sli = styled.li`
    position: relative;
    display: inline-block;
    background-color: ${props => props.theme.colorBgPrimary};
    margin-right: -5px;
    &:first-child {
        border-left: 0;
    }
    &:last-child {
        margin-right: 0;
    }
    display: block;
    font-weight: normal;
    padding: 6px 0;
    text-shadow: none;
    transition: background-color 0.5s ease-out;
    &:hover {
        background-color: ${props => props.theme.colorAccentSecondary};
        text-decoration: none;
    }
    ${mediaMin.tablet`
        width: 75%;
        margin: 0 auto;
        background: transparent;
        &:last-child {
            margin: 0 auto;
        }
        &:hover {
            background: transparent;
            text-decoration: none;
        }`};
`;

export const SnavLink = styled(NavLink)`
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 2px;
    color: ${props => props.theme.colorFontPrimary};
    font-size: ${props => props.theme.fontSizeSmall};
    font-weight: normal;
    ${mediaMin.tablet`
        text-transform: lowercase;
        color: ${props => props.theme.colorFontSecondary};
        font-size: ${props => props.theme.fontSizeSecondary};
        font-weight: 400;
        line-height: 2rem;
        letter-spacing: 0.125rem;
        &:hover {
            color: ${props => props.theme.colorFontHoverPrimary};
        }`};
`;
