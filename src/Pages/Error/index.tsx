// ! External

import React from "react";
import styled from "styled-components";

// ! Internal

import { content } from "../../Assets/Content";
import {
    Sa,
    Scontainer,
    SdivLineSmall,
    Srow,
    SdivValign
} from "../../shared/StyledComponents";
import { mediaMin } from "../../Theme";
import { FadeInPageContainer } from "../../Theme/animations";

const Error = () => {
    const {
        header,
        main: { message, button }
    } = content.error;
    return (
        <FadeInPageContainer>
            <ScontainerMod>
                <SdivValign>
                    <Ssection>
                        <Srow>
                            <Sh3>{header}</Sh3> <SdivLineSmall />{" "}
                            <Sh6>{message}</Sh6>
                        </Srow>
                        <Srow>
                            <Sa href="/">{button}</Sa>
                        </Srow>
                    </Ssection>
                </SdivValign>
            </ScontainerMod>
        </FadeInPageContainer>
    );
};

export default Error;

// ! Styles

const ScontainerMod = styled(Scontainer)`
    height: 70vh;
`;
const Ssection = styled.section`
    text-align: center;
`;

const Sh3 = styled.h3`
    font-size: ${props => props.theme.fontSizeSecondary};
    line-height: 31px;
    font-weight: 500;
    color: black;
    margin-top: 0;
    margin-bottom: 0;
    ${mediaMin.desktop`
    font-size:${props => props.theme.fontSizeTertiary};
    line-height: 55px;`};
`;

const Sh6 = styled.h6`
    font-size: ${props => props.theme.fontSizeSmall};
    line-height: 19px;
    margin-top: 10px;
    margin-bottom: 0;
    font-family: ${props => props.theme.fontFamilySecondary};
    color: ${props => props.theme.colorFontQuinternary};
    ${mediaMin.desktop`
    font-size:${props => props.theme.fontSizePrimary};
    line-height: 2.5rem;`};
`;
