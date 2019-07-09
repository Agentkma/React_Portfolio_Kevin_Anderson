// ! External
import CodeIcon from "@material-ui/icons/Code";
import React, { useContext } from "react";
import styled from "styled-components";

// ! Internal

import { WorksFilterContext } from "../../../Hoc/Layout/context";

import { mediaMin, theme } from "../../../Theme";

const NavCodeIcon = () => {
    const { toggleWorksFilter } = useContext(WorksFilterContext);
    return (
        <a href="#works-filter-panel" style={{ color: theme.colorBgSecondary }}>
            <StyledCodeIcon
                onClick={toggleWorksFilter}
                data-testid="nav-code-icon"
            />
        </a>
    );
};
export { NavCodeIcon };
export default NavCodeIcon;

const StyledCodeIcon = styled(CodeIcon)`
    cursor: pointer;
    width: auto !important;
    height: 2rem !important;
    padding: 0 0.625rem;
    margin-top: 0.625rem;
    font-size: 1rem;
    &:hover,
    &:focus {
        background-image: none;
        background-color: ${props => props.theme.colorAccentSecondary};
    }
    ${mediaMin.tablet`  height: 2.5rem !important;`};
`;
