import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
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
  LogoImg,
} from "../styled-components";
import { WorksFilterContext } from "../../../context";

interface NavBarProps {click: () => void;}

export const NavBar = ({ click }:NavBarProps) => {
  const { toggleWorksFilter } = useContext(WorksFilterContext);
  const location = useLocation();
  return (
        <MenuCollapser>
          <Link to={"./"}>
            <StyledLogoRotate>
              {" "}
              <LogoImg src={require("../../../Assets/Images/logo@2x.svg")} />
            </StyledLogoRotate>
          </Link>
          <Container>
            {location.pathname === "/" ? (
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
            ) : null}
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
  location: object,
};

export default NavBar;
