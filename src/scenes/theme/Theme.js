import { createTheme } from "@material-ui/core/styles";
import "@fontsource/inter";

const theme = createTheme({
  palette: {
    primary: { main: "#EF4444" },
    secondary: { main: "#FFFFFF" },
    hover: { main: "#DC2626" },
    darkGrey: { main: "#111827" },
    text: { main: "#515863" },
  },
  typography: {
    fontFamily: "Inter",
  },
});

export default theme;
