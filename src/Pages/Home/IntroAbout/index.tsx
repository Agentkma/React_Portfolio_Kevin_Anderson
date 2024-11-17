// ! External
import React, { useEffect, useState } from "react";
import styled from "styled-components";

// ! Internal
import { content } from "../../../Assets/Content";
import { BounceInLeft } from "../../../Theme/animations";
import { media, mediaAnd, mediaMin } from "../../../Theme";
import Container from "../../../Components/Common/Container";

export const IntroAbout = () => {
    const itemsArray = content.home.header.subHeading;
    const [itemCount, setItemCount] = useState(0);
    const [itemCurrent, setItemCurrent] = useState(null);

    useEffect(() => {
        const renderAboutItems = () => {
            if (itemCount === itemsArray.length - 1) {
                setItemCount(0);
            } else {
                setItemCount((prevCount) => prevCount + 1);
            }
            setItemCurrent(itemsArray[itemCount]);
        };
        const interval = setInterval(() => renderAboutItems(), 3500);

        return () => {
            clearInterval(interval);
        };
    }, [itemsArray, itemCount]);

    return (
        <Ssection>
            <SdivHalf>
                <SdivVertAlign>
                    <Container>
                        <Sarticle>
                            <SdivMH>
                                <Sh6H>{content.home.header.mainHeading}</Sh6H>
                            </SdivMH>

                            <SdivCD>
                                <Sh6HL>
                                    <SloadingBar>{itemCurrent}</SloadingBar>
                                </Sh6HL>
                            </SdivCD>
                        </Sarticle>
                    </Container>
                </SdivVertAlign>
            </SdivHalf>
        </Ssection>
    );
};
export default IntroAbout;
// ! Styles

const Ssection = styled.section`
    background-color: ${(props) => props.theme.colorBgPrimary};
`;
const SdivHalf = styled.div`
    margin-left: 0;
    height: 60vh;
    ${media.desktop`
    height: 40vh;`};
`;
const SdivVertAlign = styled.div`
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    box-sizing: border-box;
    height: fit-content;
`;

const Sarticle = styled.article`
    margin: 0 auto;
    position: relative;
    min-height: 1px;
    padding-right: 1rem;
    padding-left: 1rem ${mediaMin.desktop`;
    width: 100%
    margin-left: 0;`};
`;

const SdivMH = styled.div`
    ${media.desktop`margin-left: 0;
        padding: 0 2rem;`};
`;

const Sh6H = styled.h6`
    font-size: 2rem;
    line-height: 2.175rem;
    margin-top: 0.666rem;
    margin-bottom: 0;
    font-weight: 500;
    ${media.desktop`font-size: 2.5rem;
    line-height: 2.675rem;`};
`;

const SdivCD = styled.div`
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
    color: ${(props) => props.theme.colorFontTertiary};
    font-size: 2.5rem;
    line-height: 1.2;
    margin-top: 0;
    margin-bottom: 0;
    ${mediaAnd.tablet`font-size: 4.4rem; font-weight: 300;`};
    ${mediaAnd.xlDesktop`font-size: 6rem;`};
`;

const SloadingBar = styled(BounceInLeft)`
    display: inline-block;
    /* padding: 0.2em 0; */
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
        background-color: ${(props) => props.theme.colorAccentPrimary};
        z-index: 2;
    }
`;
