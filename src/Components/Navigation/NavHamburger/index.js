import React from "react";
import { withRouter } from "react-router";

// import PropTypes from "prop-types";
import styled from "styled-components";

import NavCodeIcon from "./NavCodeIcon";

const NavHamburger = ({ click, toggleShowWorksFilter, location }) => {
    // ! check this: using withRouter can set codeIcon to show only when route is /home
    const codeIcon =
        location.pathname === "/" ? (
            <StyledCodeIcon onClick={toggleShowWorksFilter} />
        ) : null;

    return (
        <Container>
            {codeIcon}
            <HamburgerDiv onClick={click}>
                <HamburgerBar />
                <HamburgerBar />
                <HamburgerBar />
            </HamburgerDiv>
        </Container>
    );
};

NavHamburger.propTypes = {};

export default withRouter(NavHamburger);

const Container = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    right: 8px;
    top: 0;
    height: 90%;
`;

const HamburgerDiv = styled.div`
    width: auto !important;
    height: 1rem;
    background-repeat: repeat-x;
    color: #ffffff;
    margin: auto;
    cursor: pointer;
    font-size: 14px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    &:hover,
    &:focus {
        background-image: none;
        background-color: #eee;
        color: #000;
    }
    @media (min-width: 768px) {
        height: 2rem;
        padding: 7px 10px;
    }
`;

const HamburgerBar = styled.span`
    background-color: #000;
    border-radius: 1px 1px 1px 1px;
    display: block;
    height: 2px;
    width: 1.2rem;
    margin: 2px 0;
    @media (min-width: 768px) {
        width: 1.5rem;
        height: 3px;
        margin: 3px 0;
    }
`;
