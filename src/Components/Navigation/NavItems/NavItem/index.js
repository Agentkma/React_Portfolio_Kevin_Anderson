import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Li = styled.li`
    position: relative;
    display: inline-block;
    background-color: #fff;
    margin-right: -5px;
    &:first-child {
        border-left: 0;
    }
    &:last-child {
        margin-right: 0;
    }
    color: #666;
    display: block;
    font-size: 14px;
    font-weight: normal;
    line-height: 21px;
    padding: 6px 0;
    text-shadow: none;
    transition: background-color 0.5s ease-out;
    &:hover {
        background-color: #eee;
        text-decoration: none;
    }
    @media (min-width: 768px) {
        width: 75%;
        margin: 0 auto;
        background: transparent;
        color: black;
        &:last-child {
            margin: 0 auto;
        }
        &:hover {
            background: transparent;
            text-decoration: none;
        }
    }
`;

const StyledNavLink = styled(NavLink)`
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 2px;
    color: #666;
    font-weight: normal;
    @media (min-width: 768px) {
        text-transform: lowercase;
        color: white;
        font-size: 1.5rem;
        font-weight: 400;
        line-height: 2rem;
        letter-spacing: 0.125rem;
        &:hover {
            color: #ff2238 !important;
        }
    }
`;
export const NavItem = props => (
    <Li>
        <StyledNavLink to={props.link} exact={props.exact}>
            {props.children}
        </StyledNavLink>
    </Li>
);

export default NavItem;
