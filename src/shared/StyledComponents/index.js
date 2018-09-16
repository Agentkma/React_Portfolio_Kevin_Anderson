// import React from "react";
import styled from "styled-components";
import { mediaMin } from "../../Theme";

export const Scontainer = styled.div`
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    display: block;
    box-sizing: border-box;
    width: 90%;
    ${mediaMin.tablet`width: 80%`};
`;

export const Srow = styled.div`
    margin-right: -1rem;
    margin-left: -1rem;
`;

export const InnerWrap = styled.div`
    display: block;
    box-sizing: border-box;
    padding: 4rem 1rem;
    ${mediaMin.tablet`padding: 4rem 3rem;`};
    ${mediaMin.desktop`padding: 0 width: 90%;`};
`;
