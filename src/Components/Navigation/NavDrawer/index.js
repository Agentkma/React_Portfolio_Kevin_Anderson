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
        height: 640px;
        width: 100%;
        position: fixed;
        top: 0px;
        right: 0;
        padding: 5rem;
        z-index: 999;
        text-align: center;
        background-image: url(${drawerBgImg});
        background-size: cover;
        background-position: center center;
    }
`;

const StyledCloseIcon = styled(CloseIcon)`
    position: absolute;
    top: 10%;
    right: 15%;
    height: 1.5rem;
    width: 1rem;
    font-size: 4rem;
    color: #ffffff;
    visibility: hidden @media (min-width: 768px) {
        visibility: visible;
    }
    &:hover {
        cursor: pointer;
    }
`;

export const NavDrawer = props => {
    return (
        <Nav role="navigation">
            <StyledCloseIcon onClick={props.click} />
            <NavItems />
        </Nav>
    );
};

// index.propTypes = {};
//theme={theme}
export default NavDrawer;
