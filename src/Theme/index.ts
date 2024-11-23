import { css, DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colorBgPrimary: "white",
  colorBgSecondary: "#292929",
  colorBgTertiary: "#f0f4f4",
  colorBgQuaternary: "#121212",
  colorFontPrimary: "#666",
  colorFontSecondary: "white",
  colorFontTertiary: "#121212",
  colorFontQuaternary: "#292929",
  colorFontQuinternary: "#999999",
  colorFontHoverPrimary: "#ff2238 !important",
  colorAccentPrimary: "#ff2238 !important",
  colorAccentSecondary: "#eee",
  colorAccentTertiary: "#000",
  colorBorderPrimary: "#121212",
  fontSizeSmall: "0.7rem",
  fontSizePrimary: "1rem",
  fontSizeSecondary: "1.5rem",
  fontSizeTertiary: "3rem",
  fontFamilyPrimary: "Montserrat, sans-serif !important",
  fontFamilySecondary: "Montserrat, sans-serif !important",
};

// Define the sizesAnd object with proper types
interface SizesAnd {
  xlDesktop: number;
  tablet: number;
  phoneLandscape: number;
}

const sizesAnd: SizesAnd = {
  xlDesktop: 1170,
  tablet: 768,
  phoneLandscape: 480,
};

// Define the sizes object with proper types
interface Sizes {
  tablet: number;
  desktop: number;
  xlDesktop: number;
}

const sizes: Sizes = {
  tablet: 768,
  desktop: 992,
  xlDesktop: 1200,
};

type MediaFunction = (
  ..._args: Parameters<typeof css>
) => ReturnType<typeof css>;

type Media = Record<keyof Sizes, MediaFunction>;

// Iterate through the sizes and create a media template
export const mediaAnd = Object.keys(sizesAnd).reduce((acc, label) => {
  const key = label as keyof SizesAnd;
  //@ts-ignore
  acc[key] = (...args: Parameters<typeof css>) => `
    @media (max-width: ${sizesAnd[key]}px) {
    ${css(...args)};
    }
  `;
  return acc;
}, {} as Media);

export const media = Object.keys(sizes).reduce((acc, label) => {
  const key = label as keyof Sizes;
  //@ts-ignore
  acc[key] = (...args: Parameters<typeof css>) => `
    @media (min-width: ${sizes[key]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {} as Media);

// Iterate through the sizes and create a media template
export const mediaMin = Object.keys(sizes).reduce((acc, label) => {
  const key = label as keyof Sizes;
  acc[key] = (...args: Parameters<typeof css>) => css`
    @media (min-width: ${sizes[key] / 16}rem) {
      ${css(...args)};
    }
  `;

  return acc;
}, {} as Media);
