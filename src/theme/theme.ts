import { createTheme } from "@mui/material/styles";
import "@fontsource/carme";

// * Use https://bareynol.github.io/mui-theme-creator/ to make changes in the theme and get custom theme experience
export const theme = createTheme({
  palette: {
    primary: {
      main: "#505050",
    },
    secondary: {
      main: "#000000",
    },
    error: {
      main: "#ff1744",
    },
  },
  typography: {
    fontFamily: [
      "Carme",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
