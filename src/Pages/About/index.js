// ! External
import React from "react";
import styled from "styled-components";

// ! Internal
import { content } from "../../Assets/Content";
import {
    Scontainer,
    SdivLine,
    Srow,
    SsectionGrid,
    SdivValign,
    SsectionParallax,
    SarticleMainHeading,
} from "../../shared/StyledComponents";
import { mediaMin } from "../../Theme";
import { FadeInPageContainer } from "../../Theme/animations";
import GridItem from "./GridItem";
import Profile from "./Profile";
import Stats from "./Stats";
import Values from "./Values";
import CTA from "./CTA";
import headingBgImg from "../../Assets/Images/bg/about-bg-1920x1080.jpg";

const renderGridItemsValues = () => {
    return content.about.main.gridItems.map((item, index) => {
        switch (item.type) {
            case "value image":
                return <GridItem type={item.type} index={index} key={index} />;
            case "value text":
                return <GridItem type={item.type} index={index} key={index} />;
            case "story image":
                return <GridItem type={item.type} index={index} key={index} />;
            case "story text":
                return <GridItem type={item.type} index={index} key={index} />;
            default:
                return <GridItem type={item.type} index={index} key={index} />;
        }
    });
};

export function About() {
    return (
        <FadeInPageContainer>
            <SsectionHeading>
                <SdivValign>
                    <Scontainer>
                        <Srow>
                            <SarticleMainHeading>
                                <Sh6MainHeading>
                                    {content.about.header.intro}
                                </Sh6MainHeading>
                                <SdivLine />
                            </SarticleMainHeading>
                        </Srow>
                    </Scontainer>
                </SdivValign>
            </SsectionHeading>
            <SdivContainerFluid>
                <SsectionGrid>{renderGridItemsValues()}</SsectionGrid>
                <Profile />
                <Stats />
                <Values />
                <CTA />
            </SdivContainerFluid>
        </FadeInPageContainer>
    );
}

export default About;

// ! Styles

const SsectionHeading = styled(SsectionParallax)`
    background-image: url(${headingBgImg});
`;

const Sh6MainHeading = styled.h6`
    font-family: ${(props) => props.theme.fontFamilyPrimary};
    color: ${(props) => props.theme.colorFontSecondary};
    font-size: 2rem;
    line-height: 2.4375rem;
    margin-top: 0.625rem;
    margin: auto;
    ${mediaMin.desktop` font-size: 2.1875rem;
    line-height: 2.6875rem;`};
`;

const SdivContainerFluid = styled.div`
    padding: 0 !important;
    margin-right: auto;
    margin-left: auto;
`;
