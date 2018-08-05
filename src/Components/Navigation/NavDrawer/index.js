// ! External
import CloseIcon from "@material-ui/icons/Close";
// import { withStyles } from "@material-ui/core/styles";
import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";

// ! Internal
import NavItems from "../NavItems";
import drawerBgImg from "../../../Assets/Images/bg/about-bg-1920x1080.jpg";
import { SlideDown } from "../../../Theme/animations";

export const NavDrawer = props => {
    return (
        <SlideDownNavDiv>
            <Nav role="navigation">
                <ScloseIcon onClick={props.click} />
                <NavItems />
            </Nav>
        </SlideDownNavDiv>
    );
};

export default NavDrawer;

// ! Styles

const SlideDownNavDiv = SlideDown.extend`
    display: block !important;
    position: absolute;
    width: 100%;
    top: 7.75vh;
    z-index: 101;
    @media (min-width: 768px) {
        top: 0;
        right: 0;
        z-index: 999;
        position: fixed;
        height: 100vh;
    }
`;

const Nav = styled.nav`
    @media (min-width: 768px) {
        height: 100%;
        padding: 5rem;
        text-align: center;
        background-image: url(${drawerBgImg});
        background-size: cover;
        background-position: center center;
    }
`;

const ScloseIcon = styled(CloseIcon)`
    position: absolute;
    top: 15%;
    right: 5%;
    height: 2rem !important;
    width: 2rem !important ;
    font-size: 4rem;
    color: ${props => props.theme.colorBgPrimary};
    visibility: hidden;
    @media (min-width: 768px) {
        visibility: visible;
    }
    &:hover {
        cursor: pointer;
    }
`;
