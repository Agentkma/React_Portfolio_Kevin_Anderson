// ! External
import CodeIcon from "@material-ui/icons/Code";
import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

// ! Internal
import { toggleShowWorksFilter } from "../../../Ducks/home";
import { mediaMin, theme } from "../../../Theme";

const NavCodeIcon = ({ toggleWorksFilter }) => {
    return (
        <a
            data-testid="nav-code-icon"
            href="#works-filter-panel"
            style={{ color: theme.colorBgSecondary }}
        >
            <StyledCodeIcon onClick={() => toggleWorksFilter()} />
        </a>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        toggleWorksFilter: () => dispatch(toggleShowWorksFilter())
    };
};

export { NavCodeIcon };
export default connect(
    null,
    mapDispatchToProps
)(NavCodeIcon);

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
