// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colorBorderPrimary: string;
    fontSizeSmall: string;
    fontSizePrimary: string;
    fontSizeSecondary: string;
    fontSizeTertiary: string;
    fontFamilyPrimary: string;
    fontFamilySecondary: string;
  }
}
