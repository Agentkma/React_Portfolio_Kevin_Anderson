// ! External
import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";

// ! Internal
import NavItems from "../NavItems";
import drawerBgImg from "../../../Assets/Images/bg/about-bg-1920x1080.jpg";

const Nav = styled.nav`
    display: block !important;
    position: absolute;
    top: 7.75vh;
    width: 100%;
    z-index: 101;
    box-sizing: border-box;
    @media (min-width: 768px) {
        display: block;
        height: 100vh;
        position: fixed;
        top: 0px;
        right: 0;
        width: 100%;
        padding: 5rem;
        z-index: 999;
        text-align: center;
        background-image: url(${drawerBgImg});
    }
`;

export const NavDrawer = () => {
    return (
        <Nav role="navigation">
            <NavItems />
        </Nav>
    );
};

// index.propTypes = {};

export default NavDrawer;
