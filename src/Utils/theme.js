import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    bg: "#1C1C27",
    bgLight: "#1C1E27",
    primaryColor: "#854CE6",
    text_primary: "#F2F3F4",
    text_secondary: "#b1b2b3",
    card: "#171721",
    card_light: "#191924",
    button: "#854CE6",
    white: "#FFFFFF",
    black: "#000000",
  },
  typography: {
    fontFamily: "Poppins",
  },
});

export const whiteTheme = createTheme({
  palette: {
    bg: "#FFFFFF",
    bgLight: "#f0f0f0",
    primaryColor: "#be1adb",
    text_primary: "#111111",
    text_secondary: "#48494a",
    card: "#FFFFFF",
    button: "#5c5b5b",
  },
  typography: {
    allVariants: {
      color: "red",
    },
    fontFamily: "Poppins",
  },
});
