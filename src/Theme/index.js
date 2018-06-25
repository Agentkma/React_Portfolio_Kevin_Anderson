import styled, { css } from "styled-components";

export const theme = {
    colorBgPrimary: "white",
    colorFontPrimary: "#666",
    colorFontSecondary: "white",
    colorFontHoverPrimary: "#ff2238 !important",
    fontSizeSmall: "0.7rem",
    fontSizePrimary: "1rem",
    fontSizeSecondary: "1.5rem",
    fontFamilyPrimary: "font-family: 'Montserrat', sans-serif"
};

// ! Media Queries
const sizesAnd = {
    tablet: 768,
    /*iPhone Landscape Mode and Mediium Smart Phones*/
    phoneLandscape: 480
};

const sizes = {
    /* Larger than desktop */
    desktop: 992
};

// Iterate through the sizes and create a media template
export const mediaAnd = Object.keys(sizesAnd).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (screen and max-width: ${sizes[label] / 16}em) {
            ${css(...args)};
        }
    `;

    return acc;
}, {});

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width: ${sizes[label] / 16}em) {
            ${css(...args)};
        }
    `;

    return acc;
}, {});
