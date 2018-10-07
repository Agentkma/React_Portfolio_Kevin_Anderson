// ! External
import Accessibility from "@material-ui/icons/Accessibility";
import Create from "@material-ui/icons/Create";
import School from "@material-ui/icons/School";
import WB_Sunny from "@material-ui/icons/WbSunny";
import React from "react";
import styled from "styled-components";

// ! Internal

import { content } from "../../Assets/Content";
import { mediaMin } from "../../Theme";
import { SdivLineSmall } from "../../shared/StyledComponents";

const values = content.about.main.values;

const renderIcon = icon => {
    switch (icon) {
        case "Ssun":
            return <Ssun />;
        case "Sschool":
            return <Sschool />;
        case "Sperson":
            return <Sperson />;
        case "Screate":
            return <Screate />;
        default:
            return <Ssun />;
    }
};

const renderArticleItems = () => {
    return values.map((a, i) => {
        const { icon, title, text } = a;
        return (
            <SarticleV as="article" key={i}>
                {renderIcon(icon)}
                <Sh3>{title}</Sh3>
                <SdivLine />
                <Sp>{text}</Sp>
            </SarticleV>
        );
    });
};

const Values = () => {
    return <Ssection>{renderArticleItems()}</Ssection>;
};

export default Values;

// ! Styles

const Ssection = styled.section`
    background-color: ${props => props.theme.colorBgSecondary};
    box-sizing: border-box;
    height: auto;
    padding: 10%;
    width: 100%;
    display: flex;
    flex-direction: column;
    ${mediaMin.desktop`  flex-direction: row;`};
`;

const SarticleV = styled.article`
    box-sizing: border-box;
    display: block;
    flex-basis: 1;
    list-style: none;
    margin-bottom: 1.25rem;
    padding-right: 1rem;
    padding-left: 1rem;
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

const Sh3 = styled.h3`
    font-size: ${props => props.theme.fontSizeSecondary};
    line-height: 25px;
    font-weight: normal;
    text-transform: uppercase;
    margin: 1.25rem 0 0.25rem;
    font-family: ${props => props.theme.fontFamilyPrimary};
    color: ${props => props.theme.colorFontSecondary};
`;

export const SdivLine = styled(SdivLineSmall)`
    width: 5rem;
`;

const Sp = styled.p`
    color: ${props => props.theme.colorFontSecondary};
`;
