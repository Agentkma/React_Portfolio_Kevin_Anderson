import React from "react";
import styled from "styled-components";

const StyledContainerDiv = styled.div`
    width: 97%;
    padding-right: 1rem;
    padding-left: 1rem;
    margin-right: auto;
    margin-left: auto;
`;

export const Container = props => {
    return <StyledContainerDiv>{props.children}</StyledContainerDiv>;
};

export default Container;
