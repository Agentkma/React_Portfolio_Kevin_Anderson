// ! External
import React, { useContext } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { func, object } from "prop-types";

// ! Internal

import { theme } from "../../../Theme";
import {
    Container,
    HamburgerDiv,
    HamburgerBar,
    StyledCodeIcon,
    MenuCollapser,
    StyledLogoRotate,
    LogoImg
} from "../styled-components";
import { WorksFilterContext } from "../../../Hoc/Layout/context";

export const NavBar = ({ click, location }) => {
    const { toggleWorksFilter, showWorksFilter } = useContext(
        WorksFilterContext
    );

    return (
        <MenuCollapser
            role="toolbar"
            aria-label="main app toolbar and navigation"
        >
            <Link to={"./"}>
                <StyledLogoRotate>
                    {" "}
                    <LogoImg
                        src={require("../../../Assets/Images/logo@2x.svg")}
                    />
                </StyledLogoRotate>
            </Link>
            <Container>
                {location.pathname === "/" && (
                    <a
                        role="button"
                        arial-label="works filter panel"
                        aria-haspopup="true"
                        aria-controls="worksFilterPanel"
                        aria-expanded={showWorksFilter}
                        onClick={toggleWorksFilter}
                        href="#works-filter-panel"
                        style={{ color: theme.colorBgSecondary }}
                    >
                        <StyledCodeIcon data-testid="nav-code-icon" />
                    </a>
                )}
                <HamburgerDiv
                    onClick={click}
                    data-testid="nav-hamburger"
                    tabindex="0"
                >
                    <HamburgerBar />
                    <HamburgerBar />
                    <HamburgerBar />
                </HamburgerDiv>
            </Container>
        </MenuCollapser>
    );
};
NavBar.propTypes = {
    click: func,
    location: object
};

export default withRouter(NavBar);
