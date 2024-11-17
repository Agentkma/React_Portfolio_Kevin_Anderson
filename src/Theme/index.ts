import { css, DefaultTheme, RuleSet } from "styled-components";
import { TaggedTemplateExpression, TemplateLiteral } from "typescript";

export const theme: DefaultTheme = {
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
}, {} as Record<keyof SizesAnd, (...args: Parameters<typeof css>) => ReturnType<typeof css>>);

export const media = Object.keys(sizes).reduce((acc, label) => {
  const key = label as keyof Sizes;
  //@ts-ignore
  acc[key] = (...args: Parameters<typeof css>) => `
    @media (min-width: ${sizes[key]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {} as Record<keyof Sizes, (...args: Parameters<typeof css>) => ReturnType<typeof css>>);

// Iterate through the sizes and create a media template
export const mediaMin = Object.keys(sizes).reduce((acc, label) => {
  const key = label as keyof Sizes;
  //@ts-ignore
  acc[key] = (...args: Parameters<typeof css>) => css`
    @media (min-width: ${sizes[key] / 16}rem) {
      ${css(...args)};
    }
  `;

  return acc;
}, {} as Record<keyof Sizes, (...args: Parameters<typeof css>) => ReturnType<typeof css>>);
