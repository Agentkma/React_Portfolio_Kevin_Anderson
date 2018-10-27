// ! External

import React from "react";
import styled from "styled-components";

// ! Internal
import NavItems from "../NavItems";
import drawerBgImg from "../../../Assets/Images/bg/about-bg-1920x1080.jpg";
import { SlideDown } from "../../../Theme/animations";
import { ScloseIcon } from "../../../shared/StyledComponents";

export const NavDrawer = ({ click }) => {
    return (
        <SlideDownNavDiv>
            <Nav role="navigation">
                <ScloseIconMod onClick={click} />
                <NavItems click={click} />
            </Nav>
        </SlideDownNavDiv>
    );
};

export default NavDrawer;

// ! Styles

const SlideDownNavDiv = styled(SlideDown)`
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

const ScloseIconMod = styled(ScloseIcon)`
    visibility: hidden;
    @media (min-width: 768px) {
        visibility: visible;
    }
`;
