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
    const { toggleWorksFilter } = useContext(WorksFilterContext);
    const codeIcon =
        location.pathname === "/" ? (
            <div>
                <a
                    href="#works-filter-panel"
                    style={{ color: theme.colorBgSecondary }}
                >
                    <StyledCodeIcon
                        onClick={toggleWorksFilter}
                        data-testid="nav-code-icon"
                    />
                </a>
            </div>
        ) : null;
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
            <Container>
                {codeIcon}
                <HamburgerDiv onClick={click} data-testid="nav-hamburger">
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
