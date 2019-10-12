// ! External
import React from "react";
import styled from "styled-components";

// ! Internal
import {
    SdivLineSmall,
    SdivValign,
    SresponsiveImg
} from "../../shared/StyledComponents";
import { mediaMin, media } from "../../Theme";
import { content } from "../../Assets/Content";
import { VALUE_IMAGE } from "../../Constants";

export const GridItem = ({ index, type }) => {
    const { gridItems } = content.about.main;
    const gridItem = gridItems[index];

    if (type === VALUE_IMAGE) {
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
                <div>
                    <Sh3HeroTxt>{primary}</Sh3HeroTxt>
                    <SdivLineSmall />
                    <Sh6HeroTxt>{secondary}</Sh6HeroTxt>
                </div>
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
                <div>
                    <Sh4HeroTxt3 as="h4">{primary}</Sh4HeroTxt3>
                    <SdivLineSmall />
                    <SpHero>
                        {secondary.map((text, i) => {
                            return (
                                <span key={i}>
                                    {text} <br /> <br />
                                </span>
                            );
                        })}
                    </SpHero>
                </div>
            </SarticleHeroTxt>
        );
    }
};

export default GridItem;

// ! Styles

const SarticleHeroImg = styled.article`
    box-sizing: border-box;
    height: 75vh;
    width: 100%;
    padding: 0 !important;
    position: relative;
    min-height: 1px;
    display: block;
`;

const SarticleHeroTxt = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
    padding: 0 10%;
    ${mediaMin.desktop`height: 75vh;`};
`;

const SvertAlign = styled.div`
   
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
