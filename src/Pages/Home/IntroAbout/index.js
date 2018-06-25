import React from "react";
import styled from "styled-components";

import { content } from "../../../Assets/Content";
import { media } from "../../../Theme";
import Container from "../../../Components/Common/Container";

const StyledSectionWrap = styled.section`
    background-color: ${props => props.theme.colorBgPrimary};
`;
const StyledHalfHtDiv = styled.div`
    height: 10rem;
`;
const StyledVertAlignDiv = styled.div`
    position: relative;
    top: 50%;
    transform: translateY(-50%);
`;

const StyledArticle = styled.article`
    ${media.desktop`
    width: 50%;
    float: left;
    position: relative;
    min-height: 1px;
    padding-right: 1rem;
    padding-left: 1rem;`};
`;

const StyledSectionMainHeading = styled.section`
    ${media.desktop`margin-left: 0;
        padding: 0 2rem;`};
`;

const StyledH6mHeading = styled.h6`
    font-size: 2rem;
    line-height: 2.25rem;
    margin-top: 0.666rem;
    margin-bottom: 0;
`;

export const IntroAbout = () => {
    return (
        <StyledSectionWrap>
            <StyledHalfHtDiv>
                <StyledVertAlignDiv>
                    <Container className="container">
                        <div className="row">
                            <StyledArticle>
                                <StyledSectionMainHeading>
                                    <StyledH6mHeading className="dark font3light">
                                        {content.home.header.mainHeading}
                                    </StyledH6mHeading>
                                </StyledSectionMainHeading>

                                <section className="cd-intro signature-karl">
                                    <h6 className="cd-headline loading-bar black font3bold">
                                        <span className="cd-words-wrapper">
                                            <b className="is-visible">
                                                I'm a Full Stack Software
                                                Engineer.
                                            </b>
                                            <b>I'm based in Boulder, CO.</b>
                                            <b>I create web apps.</b>
                                            <b>I'm a solution builder.</b>
                                            <b>I'm a lifelong learner.</b>
                                            <b>I'm a rational optimist.</b>
                                            <b>I'm a truth seeker.</b>
                                        </span>
                                    </h6>
                                </section>
                            </StyledArticle>
                        </div>
                    </Container>
                </StyledVertAlignDiv>
            </StyledHalfHtDiv>
        </StyledSectionWrap>
    );
};

export default IntroAbout;
