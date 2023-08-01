import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    moderateBlue: {
      500: "#5457b6",
    },
    softRed: {
      500: "#ed6468",
    },
    lightGreyishBlue: {
      500: "#c3c4ef",
    },
    paleRed: {
      500: "#ffb8bb",
    },
    darkBlue: {
      500: "#324152",
    },
    grayishBlue: {
      500: "#67727e",
    },
    lightGray: {
      500: "#eaecf1",
    },
    veryLightGray: {
      500: "#f5f6fa",
    },
  },
  fonts: {
    heading: `'Rubik', sans-serif`,
    body: `'Rubik', sans-serif`,
  },
});

export default theme;
