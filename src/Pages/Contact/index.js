// ! External

import React, { Fragment } from "react";
import styled from "styled-components";

// ! Internal

import Form from "./Form";
import { content } from "../../Assets/Content";
import {
    Scontainer,
    SdivLine,
    Srow,
    SsectionGrid,
    SdivValign,
    SsectionParallax,
    SarticleMainHeading
} from "../../shared/StyledComponents";
import headingBgImg from "../../Assets/Images/bg/about-bg-1920x1080.jpg";

const Contact = () => {
    const { email, location } = content.contact.header;
    return (
        <Fragment>
            <SsectionHeading>
                <SdivValign>
                    <Scontainer>
                        <Srow>
                            <SarticleMainHeading>
                                {" "}
                                <Sh1>{email}</Sh1> <Sh6>{location}</Sh6>
                                <SdivlineHeading />
                            </SarticleMainHeading>
                        </Srow>
                    </Scontainer>
                </SdivValign>
            </SsectionHeading>
            <Form />
        </Fragment>
    );
};

export default Contact;

// ! Styles

const SsectionHeading = styled(SsectionParallax)`
    background-image: url(${headingBgImg});
`;

const Sh1 = styled.h1`
    font-size: 48px;
    font-weight: 500;
    line-height: 55px;
    color: #ff2238;
    margin-top: 0;
    margin-bottom: 0;
`;

const Sh6 = styled.h6`
    font-size: 2.25rem;
    line-height: 43px;
    margin-top: 10px;
    margin-bottom: 0;
    font-family: ${props => props.theme.fontFamilySecondary};
    color: ${props => props.theme.colorFontSecondary};
`;

const SdivlineHeading = styled(SdivLine)`
    margin-top: 40px;
    margin-bottom: 20px;
`;
