import React, { Component } from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
import NavItem from "./NavItem";

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

const Li = styled.li`
    position: relative;
    display: inline-block;
    background-color: #fff;
    margin-right: -5px;
    &:first-child {
        border-left: 0;
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
        color: white;
        text-transform: lowercase;
        color: white;
        font-size: 1.5rem;
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

const ProjectSubUl = styled.ul``;

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
        const projectSubUl = this.state.showSubUl ? (
            <ProjectSubUl>
                <NavItem link="/project1">100</NavItem>
                <NavItem link="/project2">200</NavItem>
                <NavItem link="/project3">300</NavItem>
                <NavItem link="/project4">400</NavItem>
                <NavItem link="/project5">500</NavItem>
                <NavItem link="/project6">600</NavItem>
                <NavItem link="/project7">700</NavItem>
                <NavItem link="/project8">800</NavItem>
            </ProjectSubUl>
        ) : null;

        return (
            <Ul>
                <NavItem link="/" exact>
                    Portfolio
                </NavItem>
                <NavItem link="/about">About</NavItem>
                <Li link="/projects" onClick={this.subUlToggleHandler}>
                    Projects
                    {projectSubUl}
                </Li>
                <NavItem link="/contact">Say Hello</NavItem>
            </Ul>
        );
    }
}

NavItems.propTypes = {};

export default NavItems;
