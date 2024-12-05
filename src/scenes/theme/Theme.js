import { createTheme } from "@material-ui/core/styles";
import "@fontsource/inter";

const theme = createTheme({
  palette: {
    primary: { main: "#EF4444" },
    secondary: { main: "#FFFFFF" },
    hover: { main: "#DC2626" },
    darkGrey: { main: "#111827" },
    text: { main: "#4B5563" },
  },
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
    h1: { fontWeight: 400 },
    h2: { fontWeight: 500 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 700 },
    body1: { fontWeight: 400 },
  },
});

export default theme;
