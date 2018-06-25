import moment from "moment";
import React from "react";
import styled from "styled-components";

import { content } from "../../Assets/Content";

const StyledFooter = styled.footer`
    background-color: ${props => props.theme.colorBgPrimary};
    padding: 50px 0;
    @media (max-width: 768px) {
        text-align: center;
    }
`;

const StyledContFluidDiv = styled.div`
    padding-right: 1rem;
    padding-left: 1rem;
    margin-right: auto;
    margin-left: auto;
`;

const StyledUl = styled.ul`
    list-style: none outside none;
    padding: 0;
    text-align: center;
    margin-top: 0;
    margin-bottom: 0.666rem;
    box-sizing: border-box;
`;

const StyledLi = styled.li`
    display: inline-block;
    margin-left: 0.2rem;
    margin-bottom: 0;
`;

const StyledImg = styled.img`
    width: 1.75rem;
    opacity: 1;
    transition: all 0.8s linear;
    vertical-align: middle;
    border: 0;
`;

const StyledArticle = styled.article`
    font-size: ${props => props.theme.fontSizeSmall};
    line-height: 1rem;
    margin-top: 0.666rem;
    margin-bottom: 0.666rem;
    text-align: center;
    p {
        font-family: ${props => props.theme.fontFamilyPrimary};
        color: ${props => props.theme.colorFontPrimary};
        a {
            text-decoration: none;
            color: ${props => props.theme.colorFontPrimary};
        }
    }
`;

const socialLitems = content.footer.social.map(li => {
    const source = require(`../../${li.img.src}`);

    return (
        <StyledLi>
            <a target="_blank " rel="noopener noreferrer" href={li.link}>
                <StyledImg
                    data-no-retina
                    alt={li.img.alt}
                    title={li.img.title}
                    src={source}
                />
            </a>
        </StyledLi>
    );
});

const Footer = function() {
    return (
        <StyledFooter role="contentinfo">
            <StyledContFluidDiv>
                <StyledUl>{socialLitems}</StyledUl>
                <StyledArticle>
                    <p>
                        All Rights Reserved &copy; {moment().year()}{" "}
                        <a target="_blank " href=" ">
                            Kevin Anderson
                        </a>.
                    </p>
                </StyledArticle>
            </StyledContFluidDiv>
        </StyledFooter>
    );
};

export default Footer;
