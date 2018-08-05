import React from "react";
import styled from "styled-components";

export const Container = props => {
    return <Sdiv>{props.children}</Sdiv>;
};

export default Container;

// ! Styles

const Sdiv = styled.div`
    width: 97%;
    padding-right: 1rem;
    padding-left: 1rem;
    margin-right: auto;
    margin-left: auto;
`;
