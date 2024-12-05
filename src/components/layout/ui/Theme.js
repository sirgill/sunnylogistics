import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#EF4444',
    },
    secondary: {
      main: '#FFFFFF',
    },
    hover: {
      main: '#DC2626'
    },
    darkGrey: {
      main: '#111827'
    }
  },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
  },
});

export default theme;
