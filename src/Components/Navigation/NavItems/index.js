import React, { Component } from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";

// ! Internal

import NavItem, { Sli, SnavLink } from "./NavItem";
import { mediaMin } from "../../../Theme";
import { content } from "../../../Assets/Content";

export class NavItems extends Component {
    state = {
        showSubUl: false
    };

    subUlToggleHandler = () => {
        console.log("projects li clicked");
        this.setState(({ showSubUl }) => {
            return { showSubUl: !showSubUl };
        });
    };

    renderProjectSubul = () => {
        const { projects } = content;
        return projects.map((project, index) => {
            const { url, id } = project;

            return (
                <SsubLi key={index}>
                    <SnavItem to={`/${url}`} onClick={this.props.click}>
                        {id}
                    </SnavItem>
                </SsubLi>
            );
        });
    };

    render() {
        const projectSubUl = this.state.showSubUl ? (
            <ul>{this.renderProjectSubul()}</ul>
        ) : null;

        return (
            <Ul>
                <NavItem link="/" exact click={this.props.click}>
                    Portfolio
                </NavItem>
                <NavItem link="/about" click={this.props.click}>
                    About
                </NavItem>
                <SLi onClick={this.subUlToggleHandler}>
                    Project View
                    {projectSubUl}
                </SLi>
                <NavItem link="/contact" click={this.props.click}>
                    Say Hello
                </NavItem>
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

const SnavItem = styled(SnavLink)`
    ${mediaMin.tablet`font-size: 0.75rem;
        line-height: 0.5rem !important;`};
`;

const SsubLi = styled(Sli)`
    padding: 3px 0;
    line-height: 1rem !important;
`;

const SLi = styled.li`
    cursor: pointer;
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
