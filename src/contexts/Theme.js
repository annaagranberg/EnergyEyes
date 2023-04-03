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
            active: '#ACD0C0',
            activeOpacity: 1,
            hover: '#D9B44A',
            hoverOpacity: 0.7,
            focus: '#ACD0C0',
            focusOpacity: 1,
            selected: '#D9B44A',
            selectedOpacity: 1
        },
    },
    hover:{
        
    }
  });

  export default theme