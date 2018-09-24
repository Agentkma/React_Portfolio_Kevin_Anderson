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
    height: fit-content;
    box-sizing: border-box;
`;

export const InnerWrap = styled.div`
    display: block;
    box-sizing: border-box;
    padding: 4rem 1rem;
    ${mediaMin.tablet`padding: 4rem 3rem;`};
    ${mediaMin.desktop`padding: 0 width: 90%;`};
`;

export const SdivValign = styled.div`
    position: relative;
    top: 50%;
    transform: translateY(-50%);
`;

export const SdivLine = styled.div`
    background-color: ${props => props.theme.colorAccentPrimary};
    margin-top: 2.5rem;
    width: 50%;
    height: 0.3125em;
    display: inline-block;
    margin-bottom: 2.25rem;
`;

export const SsectionGrid = styled.section`
    position: relative;
    height: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    padding: 0;

    ${mediaMin.desktop` grid-template-columns:repeat(2, minmax(50vw, 1fr));`};
`;
