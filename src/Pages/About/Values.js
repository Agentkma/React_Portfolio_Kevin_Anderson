// ! External
import Accessibility from "@material-ui/icons/Accessibility";
import Create from "@material-ui/icons/Create";
import School from "@material-ui/icons/School";
import WB_Sunny from "@material-ui/icons/WbSunny";
import React from "react";
import styled from "styled-components";

// ! Internal

import { mediaMin, theme } from "../../Theme";
import { Srow } from "../../shared/StyledComponents";

const Values = () => {
    return (
        <Ssection>
            <Srow>
                <SarticleV as="article">
                    <Ssun />
                    <h3 class="font3bold white">Live</h3>
                    <div class="liner-small color-bg" />
                    <p class="white">
                        to enjoy family, friends, and this wonderful planet.
                    </p>
                </SarticleV>

                <SarticleV as="article">
                    <Sschool />
                    <h3 class="font3bold white">Learn</h3>
                    <div class="liner-small color-bg" />
                    <p class="white">
                        about the world, people, and creative coding.{" "}
                    </p>
                </SarticleV>

                <SarticleV as="article">
                    <Sperson />
                    <h3 class="font3bold white">Grow</h3>
                    <div class="liner-small color-bg" />
                    <p class="white">as a human, husband, and team member.</p>
                </SarticleV>

                <SarticleV as="article">
                    <Screate />
                    <h3 class="font3bold white">Create</h3>
                    <div class="liner-small color-bg" />
                    <p class="white">
                        solutions to challenging problems and interesting apps
                        that imrove people's lives.
                    </p>
                </SarticleV>
            </Srow>
        </Ssection>
    );
};

export default Values;

const Ssection = styled.section`
    background-color: ${props => props.theme.colorBgSecondary};
    box-sizing: border-box;
    height: auto;
    padding: 10%;
    width: 100%;
`;

const SarticleV = styled.article`
    box-sizing: border-box;
    display: block;
    list-style: none;
    margin-bottom: 1.25rem;
    ${mediaMin.desktop` display: inline-block; width: 25%`};
    padding-right: 15px;
    padding-left: 15px;
    text-align: center;
    width: 100%;
`;

const Ssun = styled(WB_Sunny)`
    &&& {
        color: ${props => props.theme.colorAccentPrimary};
        width: 3rem;
        height: 3rem;
    }
`;

const Sschool = styled(School)`
    &&& {
        color: ${props => props.theme.colorAccentPrimary};
        width: 3rem;
        height: 3rem;
    }
`;

const Sperson = styled(Accessibility)`
    &&& {
        color: ${props => props.theme.colorAccentPrimary};
        width: 3rem;
        height: 3rem;
    }
`;

const Screate = styled(Create)`
    &&& {
        color: ${props => props.theme.colorAccentPrimary};
        width: 3rem;
        height: 3rem;
    }
`;
