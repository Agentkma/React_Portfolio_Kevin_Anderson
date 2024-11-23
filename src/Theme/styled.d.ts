// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colorBgPrimary: string;
    colorBgSecondary: string;
    colorBgTertiary: string;
    colorBgQuaternary: string;
    colorFontPrimary: string;
    colorFontSecondary: string;
    colorFontTertiary: string;
    colorFontQuaternary: string;
    colorFontQuinternary: string;
    colorFontHoverPrimary: string;
    colorAccentPrimary: string;
    colorAccentSecondary: string;
    colorAccentTertiary: string;
    colorBorderPrimary: string;
    fontSizeSmall: string;
    fontSizePrimary: string;
    fontSizeSecondary: string;
    fontSizeTertiary: string;
    fontFamilyPrimary: string;
    fontFamilySecondary: string;
  }
}
