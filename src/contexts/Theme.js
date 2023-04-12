import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette:{
        primary:{
            main: '#092A23',
            light: '#ACD0C0',
        },
        secondary:{
            main: '#D9B44A',
        },
        background:{
            default: "#e4f0e2",
        },
        action:{
            active: '#D9B44A',
            activeOpacity: 1,
            hover: '#D9B44A',
            hoverOpacity: 0.7,
            focus: '#D9B44A',
            focusOpacity: 1,
            selected: '#D9B44A',
            selectedOpacity: 1
        },
    },
    breakpoints:{
        values:{
            xs: 0,
            sm: 330,
            md: 900,
            lg: 1200,
            xl: 1500,
        },
    },
  });

  export default theme