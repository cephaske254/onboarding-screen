import {
  createTheme,
  createText,
  BaseTheme,
  createBox,
} from "@shopify/restyle";

const theme: BaseTheme = createTheme({
  colors: {
    primary: "#2cb9b0",
    title: "#0c0d34",
    text: "rgba(12,13,52,0.7)",
    white: "white",
    grey: "rgba(12,13,52,0.05)",
    lightGrey: "#f4f0ef",
    button: "#0c0d34",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    hero: {
      fontSize: 75,
      fontFamily: "SFProDisplay-Bold",
      textAlign: "center",
      lineHeight: 75,
      color: "white",
    },
    title: {
      fontSize: 28,
      fontFamily: "SFProDisplay-Semibold",
      color: "title",
    },
    title1: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: "SFProDisplay-Semibold",
      color: "title",
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "SFProDisplay-Regular",
      color: "text",
      marginLeft: "s",
      marginRight: "s",
    },
    button: {
      fontSize: 15,
      fontFamily: "SFProDisplay-Medium",
      color: "text",
    },
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export type Theme = typeof theme;
export const Text = createText<Theme>();
export const Box = createBox<Theme>();
export default theme;
