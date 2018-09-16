// ! External
import React from "react";
import styled from "styled-components";

// ! Internal

import { mediaMin } from "../../../Theme";

export const Container = props => {
    return <Sdiv>{props.children}</Sdiv>;
};

export default Container;

// ! Styles

const Sdiv = styled.div`
    width: 90%;
    padding-right: 1rem;
    padding-left: 1rem;
    margin-right: auto;
    margin-left: auto;
    ${mediaMin.desktop` width: 80%`};
`;
