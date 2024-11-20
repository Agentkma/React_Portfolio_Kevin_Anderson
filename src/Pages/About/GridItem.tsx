import styled from "styled-components";

import {
    SdivLineSmall,
    SresponsiveImg
} from "../../shared/StyledComponents";
import { mediaMin } from "../../Theme";
import { content } from "../../Assets/Content";
// @ts-ignore
import { VALUE_IMAGE } from "../../Constants/index";

interface GridItemProps {
    index: number;
    type: string;
}

export const GridItem = ({ index, type }: GridItemProps) => {
    const { gridItems } = content.about.main;
    const gridItem = gridItems[index];

    if (type === VALUE_IMAGE) {
       

        return (
            <SarticleHeroImg>
                <picture>
                    <source srcSet={require(`../../${gridItem.value?.img}`)} type="image/jpg" />
                    <SresponsiveImg
                        src={require(`../../${gridItem.value?.img}`)}
                        alt={gridItem.value?.alt}
                        title={gridItem.value?.title}
                    />
                </picture>{" "}
            </SarticleHeroImg>
        );
    } else if (type === "value text") {
        
           return( <SarticleHeroTxt>
                <div>
                    <Sh3HeroTxt>{gridItem.value?.txt?.primary}</Sh3HeroTxt>
                    <SdivLineSmall />
                    <Sh6HeroTxt>{gridItem.value?.txt?.secondary}</Sh6HeroTxt>
                </div>
            </SarticleHeroTxt>
        );
    } else if (type === "story image") {
       

        return (
            <SarticleHeroImg>
                <picture>
                    <source srcSet={require(`../../${gridItem.story?.img}`)} type="image/jpg" />
                    <SresponsiveImg
                        src={require(`../../${gridItem.story?.img}`)}
                        alt={gridItem.story?.alt}
                        title={gridItem.story?.title}
                    />
                </picture>{" "}
            </SarticleHeroImg>
        );
    } else if (type === "story text") {
        
        return (
            <SarticleHeroTxt>
                <div>
                    <Sh4HeroTxt3 as="h4">{ gridItem.story?.txt?.primary}</Sh4HeroTxt3>
                    <SdivLineSmall />
                    <SpHero>
                        { gridItem.story?.txt?.secondary.map((text, i) => {
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
