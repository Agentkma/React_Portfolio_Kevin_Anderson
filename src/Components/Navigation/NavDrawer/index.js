// ! External
import CloseIcon from "@material-ui/icons/Close";
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

const StyledCloseIcon = styled(CloseIcon)`
    position: absolute;
    top: 10%;
    right: 15%;
    font-size: 2rem;
    color: #ffffff;
    visibility: hidden @media (min-width: 768px) {
        visibility: visible;
    }
`;

export const NavDrawer = props => {
    return (
        <Nav role="navigation">
            <StyledCloseIcon />
            <NavItems />
        </Nav>
    );
};

// index.propTypes = {};
//theme={theme}
export default NavDrawer;
