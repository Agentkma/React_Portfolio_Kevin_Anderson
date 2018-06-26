import React, { Component } from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";

// ! Internal
import NavItem, { Li, StyledNavLink } from "./NavItem";

const Ul = styled.ul`
    text-align: center;
    list-style-type: none;
    margin: 0;
    padding: 50px;
    padding-bottom: 100px;
    width: 100%;
    background-color: #fff;
    box-sizing: border-box;
    @media (min-width: 768px) {
        position: relative;
        top: 10%;
        background: transparent;
    }
`;

const StyledNavItem = StyledNavLink.extend`
    @media (min-width: 768px) {
        font-size: 0.75rem;
        line-height: 0.5rem !important;
    }
`;

const StyledSubLi = Li.extend`
    padding: 3px 0;
    line-height: 1rem !important;
`;

const StyledLi = styled.li`
    position: relative;
    display: inline-block;
    background-color: #fff;
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
        background-color: #eee;
        text-decoration: none;
    }
    @media (min-width: 768px) {
        width: 75%;
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
        }
    }
`;
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
                <StyledSubLi>
                    <StyledNavItem to="/project1">100</StyledNavItem>
                </StyledSubLi>
                <StyledSubLi>
                    <StyledNavItem to="/project2">200</StyledNavItem>
                </StyledSubLi>
                <StyledSubLi>
                    <StyledNavItem to="/project3">300</StyledNavItem>
                </StyledSubLi>
                <StyledSubLi>
                    <StyledNavItem to="/project4">400</StyledNavItem>
                </StyledSubLi>
                <StyledSubLi>
                    <StyledNavItem to="/project5">500</StyledNavItem>
                </StyledSubLi>
                <StyledSubLi>
                    <StyledNavItem to="/project6">600</StyledNavItem>
                </StyledSubLi>
                <StyledSubLi>
                    <StyledNavItem to="/project7">700</StyledNavItem>
                </StyledSubLi>
                <StyledSubLi>
                    <StyledNavItem to="/project8">800</StyledNavItem>
                </StyledSubLi>
            </ul>
        ) : null;

        return (
            <Ul>
                <NavItem link="/" exact>
                    Portfolio
                </NavItem>
                <NavItem link="/about">About</NavItem>
                <StyledLi onClick={this.subUlToggleHandler}>
                    Project View
                    {projectSubUl}
                </StyledLi>
                <NavItem link="/contact">Say Hello</NavItem>
            </Ul>
        );
    }
}

NavItems.propTypes = {};

export default NavItems;
