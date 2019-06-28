// ! External
import moment from "moment";
import React from "react";
import styled from "styled-components";

// ! Internal

import { content } from "../../Assets/Content";
import { media } from "../../Theme";

export const Footer = () => {
    const socialLitems = content.footer.social.map(li => {
        const source = require(`../../${li.img.src}`);

        if (li.title === "resume Icon") {
            return (
                <StyledLi key={li.img.src}>
                    <a
                        download
                        target="_blank "
                        rel="noopener noreferrer"
                        href={li.link}
                    >
                        <StyledImg
                            data-no-retina
                            alt={li.img.alt}
                            title={li.img.title}
                            src={source}
                        />
                    </a>
                </StyledLi>
            );
        } else {
            return (
                <StyledLi key={li.img.src}>
                    <a
                        target="_blank "
                        rel="noopener noreferrer"
                        href={li.link}
                    >
                        <StyledImg
                            data-no-retina
                            alt={li.img.alt}
                            title={li.img.title}
                            src={source}
                        />
                    </a>
                </StyledLi>
            );
        }
    });

    return (
        <Sfooter role="contentinfo">
            <Sdiv>
                <Sul>{socialLitems}</Sul>
                <Sarticle>
                    <p>
                        All Rights Reserved &copy; {moment().year()} Kevin
                        Anderson
                    </p>
                </Sarticle>
            </Sdiv>
        </Sfooter>
    );
};

export default Footer;

// ! Styles

const Sfooter = styled.footer`
    background-color: ${props => props.theme.colorBgPrimary};
    padding: 1rem 0;
    ${media.tablet` text-align: center;`};
`;

const Sdiv = styled.div`
    padding-right: 1rem;
    padding-left: 1rem;
    margin-right: auto;
    margin-left: auto;
`;

const Sul = styled.ul`
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
    text-align: left;
`;

const StyledImg = styled.img`
    width: 2rem;
    opacity: 1;
    transition: all 0.8s linear;
    vertical-align: middle;
    border: 0;
    &:hover {
        transition: all 0.5s ease-in-out;
        transform: scale(1.2);
    }
`;

const Sarticle = styled.article`
    font-size: ${props => props.theme.fontSizePrimary};
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
