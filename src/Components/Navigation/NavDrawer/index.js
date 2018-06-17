// ! External
import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";

// ! Internal
import NavItems from "../NavItems";

const Nav = styled.nav`
    display: block !important;
    display: none;
    position: absolute;
    top: 2rem;
    width: 100%;
    z-index: 101;
    box-sizing: border-box;
    @media (max-width: 768px) {
        display: block;
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
