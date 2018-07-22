import React, { Component } from "react";
import styled from "styled-components";

import { content } from "../../../Assets/Content";
import { BounceInLeft } from "../../../Theme/animations";
import { media, mediaAnd } from "../../../Theme";
import Container from "../../../Components/Common/Container";

export class IntroAbout extends Component {
    state = {
        itemsArray: content.home.header.subHeading,
        itemCount: 0,
        itemCurrent: null
    };

    // ! Lifecycle Methods

    componentDidMount() {
        this.interval = setInterval(() => this.renderAboutItems(), 3500);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    // ! Methods

    renderAboutItems = () => {
        let { itemsArray, itemCount } = this.state;
        this.setState(prevState => ({
            itemCount: prevState.itemCount + 1,
            itemCurrent: itemsArray[itemCount]
        }));

        if (itemCount === itemsArray.length - 1) {
            this.setState({ itemCount: 0 });
        }
    };
    render() {
        return (
            <StyledSectionWrap>
                <StyledHalfHtDiv>
                    <StyledVertAlignDiv>
                        <Container className="container">
                            <StyledArticle>
                                <StyledSectionMainHeading>
                                    <StyledH6mHeading className="dark font3light">
                                        {content.home.header.mainHeading}
                                    </StyledH6mHeading>
                                </StyledSectionMainHeading>

                                <StyledSectionCD>
                                    <StyledH6headline className="cd-headline loading-bar  font3bold">
                                        <StyledLoadingBar className="cd-words-wrapper">
                                            {/* <StyledBisVisisble className="is-visible"> */}
                                            {this.state.itemCurrent}
                                            {/* </StyledBisVisisble> */}
                                        </StyledLoadingBar>
                                    </StyledH6headline>
                                </StyledSectionCD>
                            </StyledArticle>
                        </Container>
                    </StyledVertAlignDiv>
                </StyledHalfHtDiv>
            </StyledSectionWrap>
        );
    }
}

export default IntroAbout;

const StyledSectionWrap = styled.section`
    background-color: ${props => props.theme.colorBgPrimary};
`;
const StyledHalfHtDiv = styled.div`
    height: 40vh;
`;
const StyledVertAlignDiv = styled.div`
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    box-sizing: border-box;
    height: fit-content;
`;

const StyledArticle = styled.article`
    @media (min-width: 992px) {
        width: 50%;
        position: relative;
        min-height: 1px;
        padding-right: 1rem;
        padding-left: 1rem;
    }
`;

const StyledSectionMainHeading = styled.section`
    ${media.desktop`margin-left: 0;
        padding: 0 2rem;`};
`;

const StyledH6mHeading = styled.h6`
    font-size: 3rem;
    line-height: 2.675rem;
    margin-top: 0.666rem;
    margin-bottom: 0;
    font-weight: 500;
`;

const StyledSectionCD = styled.section`
    text-align: left;
    max-width: 100%;
    width: 100%;
    margin-top: 0.666rem;
    ${media.desktop`margin-left: 0;
        padding: 0 2rem;`};
    ${mediaAnd.xlDesktop` width: 100%;
        max-width: 768px;
        text-align: center;
        margin: 0 auto;`};
    ${mediaAnd.tablet` margin: 0 auto;`};
`;

const StyledH6headline = styled.h6`
    color: ${props => props.theme.colorFontTertiary};
    font-size: 3rem;
    line-height: 1.2;
    margin-top: 0;
    margin-bottom: 0;
    ${mediaAnd.tablet`font-size: 4.4rem;
    font-weight: 300;`};
    ${mediaAnd.xlDesktop`font-size: 6rem;`};
`;

const StyledLoadingBar = BounceInLeft.extend`
    display: inline-block;
    padding: 0.2em 0;
    overflow: hidden;
    vertical-align: top;
    &::after {
        /* loading bar */
        content: "";
        position: absolute;
        left: 0;
        bottom: 0px;
        height: 5px;
        width: 100%;
        background-color: ${props => props.theme.colorAccentPrimary};

        z-index: 2;
    }
`;

// const StyledB = styled.b`
//     opacity: 0;
//     top: 0.2em;
// `;

// const StyledBisVisisble = styled.b`
//     top: 0;
//     opacity: 1;
//     -webkit-animation: slide-in 0.6s;
//     -moz-animation: slide-in 0.6s;
//     animation: slide-in 0.6s;
// `;
