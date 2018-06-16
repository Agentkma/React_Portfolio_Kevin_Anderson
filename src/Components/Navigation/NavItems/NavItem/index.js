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
    -o-transition: background-color 0.5s ease-out;
    -moz-transition: background-color 0.5s ease-out;
    -webkit-transition: background-color 0.5s ease-out;
    &:hover {
    background-color: #eee;
    text-decoration: none;
`;

const NavItem = props => (
    <li>
        <NavLink to={props.link} exact={props.exact}>
            {props.children}
        </NavLink>
    </li>
);

export default NavItem;
