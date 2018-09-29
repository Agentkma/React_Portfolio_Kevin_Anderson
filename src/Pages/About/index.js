// ! External
import React, { Fragment } from "react";

import styled from "styled-components";

// ! Internal
import { content } from "../../Assets/Content";
import {
    Scontainer,
    SdivLine,
    Srow,
    SsectionGrid,
    SdivValign
} from "../../shared/StyledComponents";
import { mediaMin } from "../../Theme";
import GridItem from "./GridItem";
import Profile from "./Profile";
import Stats from "./Stats";
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

function About() {
    return (
        <Fragment>
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

                <section class="services signature-karl pad-top pad-bottom dark-bg">
                    <div class="container">
                        <div class="row">
                            <article class="col-md-3 text-center service-block signature-karl">
                                <span class="ion-ios-sunny-outline color" />
                                <h3 class="font3bold white">Live</h3>
                                <div class="liner-small color-bg" />
                                <p class="white">
                                    to enjoy family, friends, and this wonderful
                                    planet.
                                </p>
                            </article>

                            <article class="col-md-3 text-center service-block signature-karl">
                                <span class="ion-ios-book-outline color" />
                                <h3 class="font3bold white">Learn</h3>
                                <div class="liner-small color-bg" />
                                <p class="white">
                                    about the world, people, and creative
                                    coding.{" "}
                                </p>
                            </article>

                            <article class="col-md-3 text-center service-block signature-karl">
                                <span class="ion-ios-body-outline color" />
                                <h3 class="font3bold white">Grow</h3>
                                <div class="liner-small color-bg" />
                                <p class="white">
                                    as a human, husband, and team member.
                                </p>
                            </article>

                            <article class="col-md-3 text-center service-block signature-karl">
                                <span class="ion-ios-flask-outline color" />
                                <h3 class="font3bold white">Create</h3>
                                <div class="liner-small color-bg" />
                                <p class="white">
                                    solutions to challenging problems and
                                    interesting apps that imrove people's lives.
                                </p>
                            </article>
                        </div>
                    </div>
                </section>

                <section
                    class="call-to-action signature-karl call-to-action-bg parallax"
                    data-stellar-background-ratio="0.5"
                >
                    <div class="row add-top add-bottom">
                        <article class="col-md-12 text-center">
                            <h3 class="white font3bold">
                                Interested in working together?
                            </h3>
                            <div class="liner-small color-bg" />
                            <h6 class="white font3bold">Let's talk...</h6>
                            <a
                                href="contact.html"
                                class="btn btn-signature btn-signature-karl btn-signature-color"
                            >
                                Contact Me
                            </a>
                        </article>
                    </div>
                </section>
            </SdivContainerFluid>
        </Fragment>
    );
}

export default About;

// ! Styles

const SsectionHeading = styled.section`
    height: 800px;
    background-position: 0px 35px;
    background-image: url(${headingBgImg});
    background-attachment: fixed;
    width: 100%;
    position: relative;
    background-size: cover;
`;

const SarticleMainHeading = styled.article`
    width: 50%;
    margin: auto;
    text-align: center;
    ${mediaMin.desktop` margin-left: 1.125rem; text-align: left;`};
`;

const Sh6MainHeading = styled.h6`
    font-family: ${props => props.theme.fontFamilyPrimary};
    color: ${props => props.theme.colorFontSecondary};
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
