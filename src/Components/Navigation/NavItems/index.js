import React, { Component } from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";

// ! Internal
import NavItem, { Sli, SnavLink } from "./NavItem";
import { mediaMin } from "../../../Theme";

export class NavItems extends Component {
    state = {
        showSubUl: false
    };

    subUlToggleHandler = () => {
        this.setState(prevState => {
            return { showSubUl: !prevState.showSubUl };
        });
    };

    render() {
        // const { theme } = this.props;

        const projectSubUl = this.state.showSubUl ? (
            <ul>
                <SsubLi>
                    <SnavItem to="/project1">100</SnavItem>
                </SsubLi>
                <SsubLi>
                    <SnavItem to="/project2">200</SnavItem>
                </SsubLi>
                <SsubLi>
                    <SnavItem to="/project3">300</SnavItem>
                </SsubLi>
                <SsubLi>
                    <SnavItem to="/project4">400</SnavItem>
                </SsubLi>
                <SsubLi>
                    <SnavItem to="/project5">500</SnavItem>
                </SsubLi>
                <SsubLi>
                    <SnavItem to="/project6">600</SnavItem>
                </SsubLi>
                <SsubLi>
                    <SnavItem to="/project7">700</SnavItem>
                </SsubLi>
                <SsubLi>
                    <SnavItem to="/project8">800</SnavItem>
                </SsubLi>
            </ul>
        ) : null;

        return (
            <Ul>
                <NavItem link="/" exact>
                    Portfolio
                </NavItem>
                <NavItem link="/about">About</NavItem>
                <SLi onClick={this.subUlToggleHandler}>
                    Project View
                    {projectSubUl}
                </SLi>
                <NavItem link="/contact">Say Hello</NavItem>
            </Ul>
        );
    }
}

NavItems.propTypes = {};

export default NavItems;

// ! Styles

const Ul = styled.ul`
    text-align: center;
    list-style-type: none;
    margin: 0;
    padding: 50px;
    padding-bottom: 100px;
    width: 100%;
    background-color: ${props => props.theme.colorBgPrimary};
    box-sizing: border-box;
    ${mediaMin.tablet` position: relative;
        top: 10%;
        background: transparent;`};
`;

const SnavItem = SnavLink.extend`
    ${mediaMin.tablet`font-size: 0.75rem;
        line-height: 0.5rem !important;`};
`;

const SsubLi = Sli.extend`
    padding: 3px 0;
    line-height: 1rem !important;
`;

const SLi = styled.li`
    position: relative;
    display: inline-block;
    background-color: ${props => props.theme.colorBgPrimary};
    margin-right: -5px;
    &:first-child {
        border-left: 0;
    }
    color: ${props => props.theme.colorFontPrimary};
    text-transform: uppercase;
    display: block;
    font-size: ${props => props.theme.fontSizeSmall};
    font-weight: normal;
    line-height: 21px;
    padding: 6px 0;
    text-shadow: none;
    transition: background-color 0.5s ease-out;
    &:hover {
        background-color: ${props => props.theme.colorAccentSecondary};
        text-decoration: none;
    }
    ${mediaMin.tablet`width: 75%;
        margin: 0 auto;
        background: transparent;
        color: ${props => props.theme.colorFontSecondary};
        text-transform: lowercase;
        font-size: ${props => props.theme.fontSizeSecondary};
        font-weight: 400;
        line-height: 2rem;
        letter-spacing: 0.125rem;
        &:hover {
            color: #ff2238 !important;
            background: transparent;
            text-decoration: none;
        }`};
`;
