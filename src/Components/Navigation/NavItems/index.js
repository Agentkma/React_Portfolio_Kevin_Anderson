import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";

import NavItem from "./NavItem";

const Ul = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 50px;
    padding-bottom: 100px;
    width: 100%;
    background-color: #fff;
`;

export const NavItems = () => {
    return (
        <Ul>
            <NavItem link="/" exact>
                Portfolio
            </NavItem>
            <NavItem link="/about">About</NavItem>
            <NavItem link="/projects">
                Projects
                <span className="sub-collapser" />
                <ul>
                    <NavItem link="/project1">100</NavItem>
                    <NavItem link="/project2">200</NavItem>
                    <NavItem link="/project3">300</NavItem>
                    <NavItem link="/project4">400</NavItem>
                    <NavItem link="/project5">500</NavItem>
                    <NavItem link="/project6">600</NavItem>
                    <NavItem link="/project7">700</NavItem>
                    <NavItem link="/project8">800</NavItem>
                </ul>
            </NavItem>
            <NavItem link="/contact">Say Hello</NavItem>
        </Ul>
    );
};

NavItems.propTypes = {};

export default NavItems;
