// ! External

import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// ! Internal

import { content } from "../../Assets/Content";
import CTAbgImg from "../../Assets/Images/bg/about-interested-1600x1006.jpg";
import { Sa, Srow } from "../../shared/StyledComponents";
import { SdivLine } from "./Values";

const { contact } = content.about.main;

const CTA = function() {
    const { header, main } = contact;
    return (
        <Ssection>
            <Srow>
                <Sarticle>
                    {" "}
                    <Sh3>{header}</Sh3>
                    <SdivLine />
                    <Sh6 as="h6">{main}</Sh6>
                    <NavLink to="/contact">
                        <Sa as="span">Contact Me</Sa>
                    </NavLink>
                </Sarticle>
            </Srow>
        </Ssection>
    );
};

export default CTA;

// ! Styles
const Ssection = styled.section`
    height: auto;
    position: relative;
    background-image: url(${CTAbgImg});
    background-position: 0px -113.5px;
    width: 100%;
    background-attachment: fixed;
    background-size: cover;
    box-sizing: border-box;
    padding: 10%;
`;

const Sarticle = styled.article`
    text-align: center;
`;

const Sh3 = styled.h3`
    font-size: ${props => props.theme.fontSizeSecondary};
    line-height: 48px;
    font-family: ${props => props.theme.fontFamilyPrimary};
    color: ${props => props.theme.colorFontSecondary};
    margin-top: 0;
    margin-bottom: 0;
`;

const Sh6 = styled(Sh3)`
    font-size: ${props => props.theme.fontSizeSmall};
`;
