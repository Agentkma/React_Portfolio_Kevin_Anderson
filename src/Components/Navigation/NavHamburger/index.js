import CodeIcon from "@material-ui/icons/Code";
import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    position: absolute;
    right: 8px;
    top: 0;
`;

const StyledCodeIcon = styled(CodeIcon)`
    cursor: pointer;
    width: 40px !important;
    padding: 7px 10px;
    position: relative;
    text-align: center;
    &hover,
    &focus {
        background-image: none;
        background-color: #eee;
        color: #000;
    }
`;

const HamburgerDiv = styled.div`
    width: 40px;
    background-repeat: repeat-x;
    color: #ffffff;
    padding: 7px 10px;
    margin: auto;
    cursor: pointer;
    font-size: 14px;
    text-align: center;
    box-sizing: border-box;
    &:hover,
    &:focus {
        background-image: none;
        background-color: #eee;
        color: #000;
    }
`;

const HamburgerBar = styled.span`
    background-color: #000;
    border-radius: 1px 1px 1px 1px;
    display: block;
    height: 2px;
    width: 18px;
    margin: 2px 0;
`;

const NavHamburger = ({ click }) => {
    return (
        <Container>
            <StyledCodeIcon />
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
