import CodeIcon from "@material-ui/icons/Code";
import React from "react";
import styled from "styled-components";

const NavCodeIcon = () => {
    return <StyledCodeIcon />;
};

export default NavCodeIcon;

const StyledCodeIcon = styled(CodeIcon)`
    cursor: pointer;
    width: auto !important;
    height: 1rem;
    padding: 7px 10px;
    margin: auto;
    &:hover,
    &:focus {
        background-image: none;
        background-color: #eee;
        color: #000;
    }
    @media (min-width: 768px) {
        height: 2rem;
    }
`;
