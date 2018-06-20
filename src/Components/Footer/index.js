import moment from "moment";
import React from "react";
import PropTypes from "prop-types";
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
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
`;

const StyledUl = styled.ul`
    list-style: none outside none;
    padding: 0;
    text-align: center;
    margin-top: 0;
    margin-bottom: 10px;
    box-sizing: border-box;
`;

const StyledLi = styled.li`
    display: inline-block;
    margin-left: 0.2rem;
    margin-bottom: 0;
`;

const StyledImg = styled.img`
    width: 32px;
    opacity: 1;
    transition: all 0.8s linear;
    vertical-align: middle;
    border: 0;
`;

const Footer = () => {
    const socialLitems = content.footer.social.map(li => {
        const source = require(`../../${li.img.src}`);

        return (
            <StyledLi>
                <a target="_blank " rel="noopener noreferrer " href={li.link}>
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

    return (
        <StyledFooter role="contentinfo">
            <StyledContFluidDiv>
                <div class="row ">
                    <StyledUl>{socialLitems}</StyledUl>
                </div>
                <div class="row">
                    <article class="credits col-md-12 text-center ">
                        <p class="font3 dark ">
                            All Rights Reserved &copy; {moment().year()}{" "}
                            <a target="_blank " href=" ">
                                Kevin Anderson
                            </a>.
                        </p>
                    </article>
                </div>
            </StyledContFluidDiv>
        </StyledFooter>
    );
};

Footer.propTypes = {};

export default Footer;
