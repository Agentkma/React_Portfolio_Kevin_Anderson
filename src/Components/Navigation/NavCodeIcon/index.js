// ! External
import CodeIcon from "@material-ui/icons/Code";
import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

// ! Internal
import { toggleShowWorksFilter } from "../../../ducks/home";
import { mediaMin } from "../../../Theme";

const NavCodeIcon = ({ toggleWorksFilter }) => {
    return (
        // <a href="#works-filter-panel">
        <StyledCodeIcon onClick={() => toggleWorksFilter()} />
        // </a>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        toggleWorksFilter: () => dispatch(toggleShowWorksFilter())
    };
};

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
