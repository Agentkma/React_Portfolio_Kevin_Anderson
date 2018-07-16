import { css } from "styled-components";

export const theme = {
    colorBgPrimary: "white",
    colorBgSecondary: "#292929",
    colorFontPrimary: "#666",
    colorFontSecondary: "white",
    colorFontTertiary: "#121212",
    colorFontQuaternary: "#292929",
    colorFontHoverPrimary: "#ff2238 !important",
    fontSizeSmall: "0.7rem",
    fontSizePrimary: "1rem",
    fontSizeSecondary: "1.5rem",
    fontFamilyPrimary: "font-family: 'Montserrat', sans-serif"
};

// ! Media Queries
const sizesAnd = {
    /* Extra Larg Desktop */
    xlDesktop: 1170,
    tablet: 768,
    /*iPhone Landscape Mode and Mediium Smart Phones*/
    phoneLandscape: 480
};

const sizes = {
    tablet: 768,
    /* Larger than desktop */
    desktop: 992
};

// Iterate through the sizes and create a media template
export const mediaAnd = Object.keys(sizesAnd).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (screen and max-width: ${sizes[label] / 16}rem) {
            ${css(...args)};
        }
    `;

    return acc;
}, {});

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width: ${sizes[label] / 16}rem) {
            ${css(...args)};
        }
    `;

    return acc;
}, {});

// Iterate through the sizes and create a media template
export const mediaMin = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (min-width: ${sizes[label] / 16}rem) {
            ${css(...args)};
        }
    `;

    return acc;
}, {});
