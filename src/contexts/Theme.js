import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#092A23",
      light: "#ACD0C0",
    },
    secondary: {
      main: "#D9B44A",
    },
    third: {
      main: "#125447",
    },
    background: {
      main: "#FFFFF",
    },
    action: {
      active: "#125447",
      activeOpacity: 0.1,
      hover: "#ACD0C0",
      hoverOpacity: 0.5,
      focus: "#092A23",
      focusOpacity: 0.5,
      selected: "#ACD0C0",
      selectedOpacity: 0.1,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 330,
      md: 900,
      lg: 1200,
      xl: 1500,
    },
  },
});

export default theme;
