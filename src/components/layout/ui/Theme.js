import { createMuiTheme } from '@material-ui/core/styles';

import  './Theme.css';

const font = "myriad-pro, sans-serif";
const fontLanding = "pacifico, sans-serif";


const blue = "#F5292F";
const white = "#FFFFFF";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${blue}`,
      white: `${white}`,
    },
    primary: {
      main: `${blue}`
    },
    secondary: {
      main: `${white}`
    }
  },
  typography: {
    tab: {
      fontweight: 400,
      color: "#F5292F",
      fontFamily: "myriad-pro",
      fontSize: '1.1rem',
      textTransform: "none"
    },
    h2: {
      fontFamily: "pacifico",
      fontWeight: 400,
      fontSize: '2.5rem',
      color: `${blue}`
    }
  },

});
