import styled from "styled-components";

import Form from "./Form";
import { content } from "../../Assets/Content";
import {
    Scontainer,
    SdivLine,
    Srow,
    SdivValign,
    SsectionParallax,
    SarticleMainHeading
} from "../../shared/StyledComponents";
import { mediaMin } from "../../Theme";
import { FadeInPageContainer } from "../../Theme/animations";
import headingBgImg from "../../Assets/Images/bg/about-bg-1920x1080.jpg";

export const Contact = () => {
    const { email, location } = content.contact.header;
    return (
        <FadeInPageContainer>
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
        </FadeInPageContainer>
    );
};

export default Contact;

// ! Styles

const SsectionHeading = styled(SsectionParallax)`
    background-image: url(${headingBgImg});
`;

const Sh1 = styled.h1`
    font-size: ${props => props.theme.fontSizeSecondary};
    line-height: 31px;
    font-weight: 500;
    color: #ff2238;
    margin-top: 0;
    margin-bottom: 0;
    ${mediaMin.desktop`
    font-size:${props => props.theme.fontSizeTertiary};
    line-height: 55px;`};
`;

const Sh6 = styled.h6`
    font-size: ${props => props.theme.fontSizeSmall};
    line-height: 19px;
    margin-top: 10px;
    margin-bottom: 0;
    font-family: ${props => props.theme.fontFamilySecondary};
    color: ${props => props.theme.colorFontSecondary};
    ${mediaMin.desktop`
    font-size:2.25rem;
    line-height: 43px;`};
`;

const SdivlineHeading = styled(SdivLine)`
    margin-top: 40px;
    margin-bottom: 20px;
`;
