// ! External

import React from "react";
import styled from "styled-components";

// ! Internal

import {
    Scontainer,
    SdivLineSmall,
    SresponsiveImg,
} from "../../shared/StyledComponents";
import { mediaMin } from "../../Theme";
import { content } from "../../Assets/Content";

export default () => {
    const { profile } = content.about.main;
    return (
        <SsectionProfile>
            <Scontainer>
                <SarticleProfile>
                    <SresponsiveImg
                        alt="profile pic of kevin anderson"
                        title="profile pic"
                        src={require("../../Assets/Images/about/kevin300x300.jpg")}
                    />
                    <SdivInfo>
                        <Sh4Info>{profile.name}</Sh4Info>
                        <SdivLineSmall />
                        <Sh6Info>{profile.title}</Sh6Info>
                    </SdivInfo>
                    <SdivOverlayInfo>
                        <SpInfo>{profile.details}</SpInfo>
                        <SdivLineSmall />
                    </SdivOverlayInfo>
                </SarticleProfile>
            </Scontainer>
        </SsectionProfile>
    );
};

// ! Styles
const SsectionProfile = styled.section`
    height: auto;
    padding: 15vh 0;
    background-color: ${(props) => props.theme.colorBgQuaternary};
`;

const SarticleProfile = styled.article`
    position: relative;
    width: 100%;
    margin: 0;
    ${mediaMin.desktop` margin-left: 25%; width:50%`};
`;

const SdivInfo = styled.div`
    display: block;
    padding: 1.25rem;
`;

const Sh4Info = styled.h4`
    text-transform: uppercase;
    font-family: ${(props) => props.theme.fontFamilyPrimary};
    color: ${(props) => props.theme.colorFontSecondary};
    margin-top: 0;
    margin-bottom: 0;
    font-size: ${(props) => props.theme.fontSizePrimary};
`;

const Sh6Info = styled.h6`
    color: ${(props) => props.theme.colorFontQuinternary};
    font-family: ${(props) => props.theme.fontFamilyPrimary};
    margin-top: 0;
    margin-bottom: 0;
    font-size: ${(props) => props.theme.fontSizeSmall};
`;

const SdivOverlayInfo = styled.div`
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.7);
    bottom: 0;
    border-color: ${(props) => props.theme.colorBorderPrimary};
    height: 100%;
    left: 0;
    padding: 2.5rem;
    position: absolute;
    width: auto;
    z-index: 1000000;
    opacity: 0;
    ${SarticleProfile}:hover & {
        opacity: 1;
        transition: all 1s ease-in-out;
    }
`;

const SpInfo = styled.p`
    color: ${(props) => props.theme.colorFontQuinternary};
`;
