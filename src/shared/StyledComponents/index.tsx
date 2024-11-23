// ! External

import CloseIcon from "@mui/icons-material/Close";

// ! Internal

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

export const SdivLineSmall = styled(SdivLine)`
    margin-top: 0.625rem;
    margin-bottom: 0.625rem;
    width: 25%;
    height: 0.125rem;
`;

export const SsectionGrid = styled.section`
    position: relative;
    height: auto;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    ${mediaMin.desktop` grid-template-columns:repeat(2, minmax(50vw, 1fr));`};
`;

export const SresponsiveImg = styled.img`
    display: block;
    width: 100% !important;
    max-width: 100%;
    height: 100%;
    border: 0;
`;

export const Sa = styled.a`
    background-color: ${props => props.theme.colorAccentPrimary};
    color: ${props => props.theme.colorFontSecondary};
    border: none;
    border-radius: 0;
    padding: 1rem 1.25rem;
    font-size: 0.75rem;
    line-height: 1.25rem;
    text-transform: uppercase;
    letter-spacing: 0.25rem;
    margin-top: 1.25rem;
    transition: all 0.4s ease-in-out;
    display: inline-block;
    margin-bottom: 0;
    font-weight: normal;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    user-select: none;
    box-sizing: border-box;
    &:hover {
        opacity: 0.4;
    }
`;

export const SsectionParallax = styled.section`
    height: 800px;
    background-position: 0px 35px;
    background-attachment: fixed;
    width: 100%;
    position: relative;
    background-size: cover;
`;

export const SarticleMainHeading = styled.article`
    width: 50%;
    margin: auto;
    text-align: center;
    ${mediaMin.desktop` margin-left: 1.125rem; text-align: left;`};
`;

export const SscrollContainer = styled.div`
    height: auto;
    overflow-y: scroll;
    scroll-behavior: smooth !important;
`;

export const ScloseIcon = styled(CloseIcon)`
    position: absolute;
    top: 15%;
    right: 5%;
    height: 2rem !important;
    width: 2rem !important ;
    font-size: 4rem;
    color: ${props => props.theme.colorBgPrimary};

    &:hover {
        cursor: pointer;
    }
`;
