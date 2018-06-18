import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import NavHamburger from "../NavHamburger";
// import { Rotate } from "../../../Theme/animations";

const Logo = styled.div`
    width: auto;
    height: 90%;
`;
const LogoImg = styled.img`
    width: auto;
    height: 100%;
`;

const MenuCollapser = styled.div`
    position: relative;
    background-color: #fff;
    color: #444;
    width: 100%;
    height: 7.5vh;
    line-height: 2rem;
    font-family: "Montserrat", sans-serif;
    font-size: 0.9rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 0 1.125rem;
    box-sizing: border-box;
`;

export const NavBar = ({ click }) => {
    return (
        <MenuCollapser>
            <Link to={"./"}>
                <Logo>
                    <LogoImg src={require("../../../Assets/Images/logo.png")} />
                </Logo>
            </Link>

            <NavHamburger click={click} />
        </MenuCollapser>
    );
};

export default NavBar;