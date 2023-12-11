import 'styled-components';

import 'styled-dropdown-component';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      white: string;
      dark_grey: string;
      regular_grey: string;
      light_grey: string;
      lighter_grey: string;
      blue: string;
      green: string;
      red: string;
    };

    font: {
      font_size: {
        headline1: string;
        headline2: string;
        headline3: string;
        headline4: string;
        headline5: string;
        headline6: string;
        body1: string;
        body2: string;
      };
      font_weight: {
        headline1: number;
        headline2: number;
        headline3: number;
        headline4: number;
        headline5: number;
        headline6: number;
        body1: number;
        body2: number;
      };
      font_family: string;
    };
  }
}

declare module 'styled-dropdown-component';
