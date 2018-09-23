import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import {
    Scontainer,
    SdivLine,
    Srow,
    SdivValign
} from "../../shared/StyledComponents";
import { mediaMin, media } from "../../Theme";
import headingBgImg from "../../Assets/Images/bg/about-bg-1920x1080.jpg";
import heroBgImg from "../../Assets/Images/about/about-coding.jpg";
import heroBgImg2 from "../../Assets/Images/about/about-learn.jpg";
import heroBgImg3 from "../../Assets/Images/about/about-story1.jpg";

function About() {
    return (
        <Fragment>
            <SsectionHeading>
                <SdivValign>
                    <Scontainer>
                        <Srow>
                            <SarticleMainHeading>
                                <Sh6MainHeading>
                                    Welcome to my portfolio site.
                                </Sh6MainHeading>
                                <SdivLine />
                            </SarticleMainHeading>
                        </Srow>
                    </Scontainer>
                </SdivValign>
            </SsectionHeading>

            <SdivContainerFluid>
                <section>
                    <Srow>
                        <SarticleHeroImg />
                        <SarticleHeroTxt>
                            <SvertAlign>
                                <Sh3HeroTxt>
                                    I like solving challenging problems
                                </Sh3HeroTxt>
                                <SdivLineHeroTxt />
                                <Sh6HeroTxt>
                                    And Building Creative Solutions.
                                </Sh6HeroTxt>
                            </SvertAlign>
                        </SarticleHeroTxt>
                    </Srow>
                    <Srow>
                        <SarticleHeroTxt2>
                            <SvertAlign>
                                <Sh3HeroTxt2>
                                    I love to learn and grow
                                </Sh3HeroTxt2>
                                <SdivLineHeroTxt />
                                <Sh6HeroTxt>That is My Passion</Sh6HeroTxt>
                            </SvertAlign>
                        </SarticleHeroTxt2>
                        <SarticleHeroImg2 />
                    </Srow>
                    <Srow>
                        <SvertAlign>
                            <SarticleHeroImg3 />
                            <SarticleHeroTxt class="col-md-6 eq-height3">
                                <Sh4HeroTxt3 as="h4">My Story</Sh4HeroTxt3>
                                <div class="liner-small color-bg" />
                                <p class="grey add-bottom">
                                    My first career was in construction
                                    management.
                                    <br />
                                    <br />
                                    Managing different teams and employees while
                                    solving the problems of custom building was
                                    challenging. I enjoyed finding improvements
                                    in our product and process through continous
                                    process improvement.
                                    <br />
                                    <br />I decided to apply my love for problem
                                    solving and solution building to the world
                                    of technology which I had become more and
                                    more interested in.
                                    <br />
                                    <br />
                                    My technical education has been primarily
                                    through project based course education with
                                    Treehouse, Galvanize, and Udemy. In addition
                                    I've learned from working with others in
                                    person, many other web based education
                                    sources, and of course documentation.
                                    <br />
                                    <br />I also love to laugh, read, hike,
                                    bike, and spending time with my family and
                                    dogs.
                                </p>
                            </SarticleHeroTxt>
                        </SvertAlign>
                    </Srow>
                    <Srow>
                        <article class="col-md-6 eq-height4">
                            <div class="inner-spacing">
                                <h4 class="font3bold dark add-top">My Goals</h4>
                                <div class="liner-small color-bg" />
                                <p class="grey add-bottom">
                                    My goals are to continue to learn about
                                    life, reality, and grow my abilities to
                                    create solutions through code as part of a
                                    team.
                                    <br />
                                    <br />I want to share my knowledge and learn
                                    from others.
                                    <br />
                                    <br />I want to make the most of my time on
                                    earth and continue to learn, grow, and
                                    contribute as long as I'm here.
                                </p>
                            </div>
                        </article>
                        <article class="col-md-6 no-pad about-bg-04 img-bg eq-height4" />
                    </Srow>
                </section>

                <section class="team pad-top pad-bottom black-bg">
                    <div class="container">
                        <div class="row">
                            <article class="col-md-6 col-md-offset-3 team-block signature-karl">
                                <img
                                    alt="profile pic of kevin anderson"
                                    title="profile pic"
                                    class="img-responsive lozad"
                                    data-src="images/team/kevin.jpg"
                                />
                                <div class="team-info">
                                    <h4 class="white font3bold">
                                        Kevin Anderson
                                    </h4>
                                    <div class="liner-small color-bg" />
                                    <h6 class="grey font3bold">
                                        Full Stack Software Engineer
                                    </h6>
                                </div>
                                <div class="team-overlay">
                                    <p class="grey">
                                        Lifelong Learner. Humanist. Realist.
                                        Rational Optimist. Husband. Programmer.
                                    </p>
                                    <div class="liner-small color-bg" />
                                    <div />
                                    {/* <ul class="team-social">
                                    <li><a href="#"><img data-no-retina alt="" title="" src="images/social/01.svg"/></a></li>
                                    <li><a href="#"><img data-no-retina alt="" title="" src="images/social/02.svg"/></a></li>
                                </ul> */}
                                </div>
                            </article>
                        </div>
                    </div>
                </section>

                <section
                    class="stats signature-karl pad pad-top pad-bottom stats-bg parallax"
                    data-stellar-background-ratio="0.5"
                >
                    <div class="row">
                        <article class="text-center col-md-12">
                            <ul class="elements-counter-wrap signature-karl">
                                <li
                                    data-delay="100"
                                    class="elements-counter signature-karl"
                                >
                                    <div class="number font3bold white ">
                                        35+
                                    </div>
                                    <div class="subject font3 dark-bg white">
                                        Projects
                                    </div>
                                </li>

                                <li
                                    data-delay="300"
                                    class="elements-counter signature-karl"
                                >
                                    <div
                                        id="pointCount"
                                        class="number font3bold white"
                                    >
                                        24453
                                    </div>
                                    <div class="subject font3 color-bg white">
                                        Education Pts
                                    </div>
                                </li>

                                <li
                                    data-delay="500"
                                    class="elements-counter signature-karl"
                                >
                                    <div class="number font3bold white">45</div>
                                    <div class="subject font3 dark-bg white">
                                        Tech Skills
                                    </div>
                                </li>

                                <li
                                    data-delay="700"
                                    class="elements-counter signature-karl"
                                >
                                    <div class="number font3bold white">5</div>
                                    <div class="subject font3 color-bg white">
                                        Degrees & Certs
                                    </div>
                                </li>
                            </ul>
                        </article>
                    </div>
                </section>

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

const SarticleHeroImg = styled.article`
    box-sizing: border-box;
    height: 66vh;
    background-image: url(${heroBgImg});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    padding: 0 !important;
    position: relative;
    min-height: 1px;
    display: block;
    ${mediaMin.desktop` width: 50%; float: left;`};
`;

const SarticleHeroTxt = styled.article`
    box-sizing: border-box;
    height: 66vh;
    padding: 0 10%;
    ${mediaMin.desktop` width: 50%; float: left; padding: 0 5%;`};
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

const SarticleHeroImg2 = styled(SarticleHeroImg)`
    background-image: url(${heroBgImg2});
    ${mediaMin.desktop` width: 50%; float: right;`};
`;

const SarticleHeroTxt2 = styled(SarticleHeroTxt)`
    background-color: ${props => props.theme.colorBgSecondary};
`;

const Sh3HeroTxt2 = styled(Sh3HeroTxt)`
    color: ${props => props.theme.colorBgPrimary};
`;

const SarticleHeroImg3 = styled(SarticleHeroImg)`
    background-image: url(${heroBgImg3});
    ${mediaMin.desktop` width: 50%; float: left;`};
`;

const Sh4HeroTxt3 = styled(Sh3HeroTxt)`
    font-size: ${props => props.theme.fontSizeSecondary};
`;
