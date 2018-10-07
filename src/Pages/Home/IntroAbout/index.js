// ! External
import React, { Component } from "react";
import styled from "styled-components";

// ! Internal
import { content } from "../../../Assets/Content";
import { BounceInLeft } from "../../../Theme/animations";
import { media, mediaAnd, mediaMin } from "../../../Theme";
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
            <Ssection>
                <SdivHalf>
                    <SdivVertAlign>
                        <Container>
                            <Sarticle>
                                <SsectionMH>
                                    <Sh6H>
                                        {content.home.header.mainHeading}
                                    </Sh6H>
                                </SsectionMH>

                                <SsectionCD>
                                    <Sh6HL>
                                        <SloadingBar>
                                            {this.state.itemCurrent}
                                        </SloadingBar>
                                    </Sh6HL>
                                </SsectionCD>
                            </Sarticle>
                        </Container>
                    </SdivVertAlign>
                </SdivHalf>
            </Ssection>
        );
    }
}

export default IntroAbout;

// ! Styles

const Ssection = styled.section`
    background-color: ${props => props.theme.colorBgPrimary};
`;
const SdivHalf = styled.div`
    height: 40vh;
`;
const SdivVertAlign = styled.div`
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    box-sizing: border-box;
    height: fit-content;
`;

const Sarticle = styled.article`
    width: 50%;
    margin: 0 auto;
    position: relative;
    min-height: 1px;
    padding-right: 1rem;
    padding-left: 1rem ${mediaMin.desktop`;
    width: 100%
    margin-left: 0;
       ;`};
`;

const SsectionMH = styled.section`
    ${media.desktop`margin-left: 0;
        padding: 0 2rem;`};
`;

const Sh6H = styled.h6`
    font-size: 2.5rem;
    line-height: 2.675rem;
    margin-top: 0.666rem;
    margin-bottom: 0;
    font-weight: 500;
`;

const SsectionCD = styled.section`
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

const Sh6HL = styled.h6`
    color: ${props => props.theme.colorFontTertiary};
    font-size: 3rem;
    line-height: 1.2;
    margin-top: 0;
    margin-bottom: 0;
    ${mediaAnd.tablet`font-size: 4.4rem;
    font-weight: 300;`};
    ${mediaAnd.xlDesktop`font-size: 6rem;`};
`;

const SloadingBar = styled(BounceInLeft)`
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
