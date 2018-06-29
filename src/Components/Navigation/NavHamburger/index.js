import CodeIcon from "@material-ui/icons/Code";
import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";

const NavHamburger = ({ click, toggleShowWorksFilter }) => {
    return (
        <Container>
            <StyledCodeIcon onClick={toggleShowWorksFilter} />
            <HamburgerDiv onClick={click}>
                <HamburgerBar />
                <HamburgerBar />
                <HamburgerBar />
            </HamburgerDiv>
        </Container>
    );
};

NavHamburger.propTypes = {};

export default NavHamburger;

const Container = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    right: 8px;
    top: 0;
    height: 90%;
`;

const StyledCodeIcon = styled(CodeIcon)`
    cursor: pointer;
    width: auto !important;
    height: 1rem;
    padding: 7px 10px;
    margin: auto;
    &:hover,
    &:focus {
        background-image: none;
        background-color: #eee;
        color: #000;
    }
    @media (min-width: 768px) {
        height: 2rem;
    }
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
