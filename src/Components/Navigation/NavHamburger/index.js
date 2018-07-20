// ! External
import React from "react";
import { withRouter } from "react-router";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
import styled from "styled-components";

// ! Internal
import NavCodeIcon from "../NavCodeIcon";
import { mediaMin } from "../../../Theme";

const NavHamburger = function({ click, location }) {
    // TODO check this: using withRouter can set codeIcon to show only when route is /home
    const codeIcon =
        location.pathname === "/" ? (
            <div>
                <NavCodeIcon />
            </div>
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
    height: 2rem;
    background-repeat: repeat-x;
    color: #ffffff;
    margin-top: 0;
    cursor: pointer;
    font-size: 0.875rem;
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
    ${mediaMin.tablet` height: 2.5rem;
        padding: 7px 0.625rem;`};
`;

const HamburgerBar = styled.span`
    background-color: #000;
    border-radius: 1px 1px 1px 1px;
    display: block;
    height: 0.125rem;
    width: 1.5rem;

    @media (min-width: 768px) {
        width: 2rem;
        height: 0.25rem;
    }
`;
