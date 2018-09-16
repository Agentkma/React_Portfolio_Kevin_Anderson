// ! External
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// ! Internal
import NavHamburger from "../NavHamburger";
import { Rotate } from "../../../Theme/animations";

export const NavBar = ({ click }) => {
    return (
        <MenuCollapser>
            <Link to={"./"}>
                <StyledLogoRotate>
                    {" "}
                    <LogoImg
                        src={require("../../../Assets/Images/logo@2x.svg")}
                    />
                </StyledLogoRotate>
            </Link>

            <NavHamburger click={click} />
        </MenuCollapser>
    );
};

export default NavBar;

const MenuCollapser = styled.div`
    position: fixed;
    top: 0;
    left: 0;

    background-color: ${props => props.theme.colorBgPrimary};
    width: 100%;
    z-index: 1000000;
    height: 9vh;
    line-height: 2rem;
    font-family: ${props => props.theme.fontFamilyPrimary};
    font-size: 0.9rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 0 1.125rem;
    padding-top: 1rem;
    box-sizing: border-box;
`;

const StyledLogoRotate = styled(Rotate)`
    width: auto;
    height: 90%;
    transition: all 0.25s ease-in;
    &:hover {
        opacity: 0.4;
    }
`;

const LogoImg = styled.img`
    width: auto;
    height: 100%;
`;
