import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import headingBgImg from "../../Assets/Images/bg/about-bg-1920x1080.jpg";

function About() {
    return (
        <div>
            <section
                class="first-fold signature-karl fullheight about-bg parallax"
                data-stellar-background-ratio="0.5"
            >
                <div class="fullheight">
                    <div class="valign">
                        <div class="container">
                            <div class="row">
                                <article class="col-md-6">
                                    <section class="main-heading">
                                        <h6 class="white font3bold">
                                            Welcome to my portfolio site.
                                        </h6>
                                        <div class="liner color-bg add-top-quarter" />
                                    </section>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="inner-wrap container-fluid no-pad">
                <section class="hero-text signature-karl">
                    <div class="row">
                        <article class="col-md-6 no-pad about-bg-01 img-bg  eq-height1" />
                        <article class="col-md-6 eq-height1">
                            <div class="inner-spacing">
                                <h3 class="black font3 add-top">
                                    I like solving challenging problems
                                </h3>
                                <div class="liner-small color-bg" />
                                <h6 class="grey font3bold add-bottom">
                                    And Building Creative Solutions.
                                </h6>
                            </div>
                        </article>
                    </div>
                    <div class="row dark-bg">
                        <article class="col-md-6 eq-height2">
                            <div class="inner-spacing">
                                <h3 class="white font3 add-top">
                                    I love to learn and grow
                                </h3>
                                <div class="liner-small color-bg" />
                                <h6 class="grey font3bold add-bottom">
                                    That is My Passion
                                </h6>
                            </div>
                        </article>
                        <article class="col-md-6 no-pad about-bg-02 img-bg  eq-height2" />
                    </div>
                    <div class="row">
                        <article class="col-md-6 no-pad about-bg-03 img-bg eq-height3" />
                        <article class="col-md-6 eq-height3">
                            <div class="inner-spacing">
                                <h4 class="font3bold dark add-top">My Story</h4>
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
                            </div>
                        </article>
                    </div>
                    <div class="row silver-bg">
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
                    </div>
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
                                    class="lozad"
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
            </div>
        </div>
    );
}

export default About;

const SsectionHeading = styled.section`
    height: 800px;
    background-position: 0px 35px;
    background-image: url(${headingBgImg});
    background-attachment: fixed;
    width: 100%;
    /* height: 100%; */
    position: relative;
    background-size: cover;
`;
