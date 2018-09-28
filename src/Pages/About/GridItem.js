// ! External
import React from "react";
import styled from "styled-components";

// ! Internal
import {
    SdivLine,
    SdivValign,
    SresponsiveImg
} from "../../shared/StyledComponents";
import { mediaMin, media } from "../../Theme";
import { content } from "../../Assets/Content";

export const GridItem = ({ index, type }) => {
    const { gridItems } = content.about.main;
    const gridItem = gridItems[index];

    if (type === "value image") {
        const { img, alt, title } = gridItem.value;

        return (
            <SarticleHeroImg>
                <picture>
                    <source srcSet={require(`../../${img}`)} type="image/jpg" />
                    <SresponsiveImg
                        src={require(`../../${img}`)}
                        alt={alt}
                        title={title}
                    />
                </picture>{" "}
            </SarticleHeroImg>
        );
    } else if (type === "value text") {
        const { primary, secondary } = gridItem.value.txt;
        return (
            <SarticleHeroTxt>
                <SvertAlign>
                    <Sh3HeroTxt>{primary}</Sh3HeroTxt>
                    <SdivLineHeroTxt />
                    <Sh6HeroTxt>{secondary}</Sh6HeroTxt>
                </SvertAlign>
            </SarticleHeroTxt>
        );
    } else if (type === "story image") {
        const { img, alt, title } = gridItem.story;

        return (
            <SarticleHeroImg>
                <picture>
                    <source srcSet={require(`../../${img}`)} type="image/jpg" />
                    <SresponsiveImg
                        src={require(`../../${img}`)}
                        alt={alt}
                        title={title}
                    />
                </picture>{" "}
            </SarticleHeroImg>
        );
    } else if (type === "story text") {
        const { primary, secondary } = gridItem.story.txt;
        return (
            <SarticleHeroTxt>
                <SvertAlign>
                    <Sh4HeroTxt3 as="h4">{primary}</Sh4HeroTxt3>
                    <SdivLineHeroTxt />
                    <SpHero>
                        {secondary.map((text, i) => {
                            console.log("text", text);
                            return (
                                <span key={i}>
                                    {text} <br /> <br />
                                </span>
                            );
                        })}
                    </SpHero>
                </SvertAlign>
            </SarticleHeroTxt>
        );
    }
};

export default GridItem;

// ! Styles

const SarticleHeroImg = styled.article`
    box-sizing: border-box;
    height: 66vh;
    width: 100%;
    padding: 0 !important;
    position: relative;
    min-height: 1px;
    display: block;
`;

const SarticleHeroTxt = styled.article`
    box-sizing: border-box;
    width: 100%;
    height: 66vh;
    padding: 0 10%;
`;

const SvertAlign = styled(SdivValign)`
    ${media.desktop` top: 20%;`};
`;

const Sh3HeroTxt = styled.h3`
    color: ${props => props.theme.colorFontTertiary};
    font-family: ${props => props.theme.fontFamilyPrimary};
    font-size: ${props => props.theme.fontSizeSecondary};
    line-height: 1.9375rem;
    margin: 0;
    ${mediaMin.desktop` font-size: ${props =>
        props.theme.fontSizeTertiary};line-height: 64px;`};
`;
const Sh4HeroTxt3 = styled(Sh3HeroTxt)`
    font-size: ${props => props.theme.fontSizeSecondary};
`;

const SdivLineHeroTxt = styled(SdivLine)`
    background-color: ${props => props.theme.colorAccentPrimary};
    margin-top: 0.625rem;
    margin-bottom: 0.625rem;
    width: 25%;
`;

const Sh6HeroTxt = styled.h6`
    margin: 0;
    font-size: ${props => props.theme.fontSizePrimary};
    line-height: 1.3125rem;
    font-family: ${props => props.theme.fontFamilyPrimary};
    color: ${props => props.theme.colorFontQuinternary};
`;

const SpHero = styled.p`
    color: ${props => props.theme.colorFontQuinternary};
`;
