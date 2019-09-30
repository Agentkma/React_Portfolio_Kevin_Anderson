// ! External
import React, { useContext } from "react";
import { withRouter } from "react-router";


// ! Internal

import { WorksFilterContext } from "../../../Hoc/Layout/context";
import { theme } from "../../../Theme";
import { Container, HamburgerDiv, HamburgerBar, StyledCodeIcon } from '../styled-components'
import { func, object } from "prop-types";


export const NavHamburger = function ({ click, location }) {
    const { toggleWorksFilter } = useContext(WorksFilterContext);
    const codeIcon =
        location.pathname === "/" ? (
            <div>
                <a href="#works-filter-panel" style={{ color: theme.colorBgSecondary }}>
                    <StyledCodeIcon
                        onClick={toggleWorksFilter}
                        data-testid="nav-code-icon"
                    />
                </a>
            </div>
        ) : null;
    return (
        <Container>
            {codeIcon}
            <HamburgerDiv onClick={click} data-testid="nav-hamburger">
                <HamburgerBar />
                <HamburgerBar />
                <HamburgerBar />
            </HamburgerDiv>
        </Container>
    );
};

NavHamburger.propTypes = {
    click: func,
    location: object
};

export default withRouter(NavHamburger);



