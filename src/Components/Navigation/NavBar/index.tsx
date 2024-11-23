import { useContext, FC } from "react";
import { Link, useLocation } from "react-router-dom";

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

export const NavBar:FC<NavBarProps> = ({ click }) => {
  const { toggleWorksFilter } = useContext(WorksFilterContext);
  const location = useLocation();
  return (
        <MenuCollapser>
          <Link to={"./"}>
            <StyledLogoRotate>
              {" "}
              <LogoImg src={require("../../../Assets/Images/logo@2x.png")} />
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

export default NavBar;
