import { StaticImageData } from "next/image";

export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    white: string;
    black: string;
    gray60: string;
    gray75: string;
    black10: string;
    black12: string;
    black06: string;
    black15: string;
    hover: string;
    active: string;
  };
  typography: {
    fontFamily: string;
    fontSize: {
      xxsmall: string;
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
      title: string;
      superTitle: string;
    };
    lineHeight: {
      small: string;
      medium: string;
      large: string;
    };
    fontWeight: {
      extraLight: string;
      light: string;
      regular: string;
      medium: string;
      semibold: string;
      bold: string;
    };
    letterSpacing: {
      tight: string;
      normal: string;
      wide: string;
    };
  };
  breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    xxxl: string;
  };
  spacing: {
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  borders: {
    radius: string;
    width: string;
    color: string;
    styles: {
      solid: string;
      dashed: string;
      dotted: string;
    };
    solidRed: string;
  };
  shadows: {
    small: string;
    medium: string;
    large: string;
  };
  zIndex: {
    header: number;
    modal: number;
    tooltip: number;
    overlay: number;
    dropdown: number;
  };
  transitions: {
    easeInOut: string;
    easeOut: string;
    easeIn: string;
    cubicBezier: string;
    allEaseInOut: string;
  };
  opacity: {
    disabled: string;
    semiTransparent: string;
    transparent: string;
  };
  linearGradient: {
    full: string;
    fadeOut: string;
  };
}

export interface Genre {
  id: string;
  thumbnail: StaticImageData | any;
  name: string;
}
