import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { Container as MuiContainer } from "@material-ui/core";
import styled from "@emotion/styled";
import theme from "./components/layout/ui/Theme";
import Navbar from "./components/layout/Navbar";
// import other components as needed
import Hero from "./components/layout/Hero";
import Carriers from "./components/layout/Carriers";
import Shipper from "./components/layout/Shippers";
import Drivers from "./components/layout/Drivers";
// import Footer from "./components/layout/Footer";
import About from "./components/layout/About";

import { LandingPage } from "./scenes/Landingpage/LandingPage";
import Footer from "./scenes/Footer/Footer";

const AppContainer = styled(MuiContainer)`
  padding: 16px;
  background-color: #000;
  width:100%;
  max-width:2000px
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <BrowserRouter>
          <Route exact path="/" component={Navbar} />
          <Route exact path="/" component={LandingPage} />
          {/* Uncomment and add routes as needed */}
          {/* <Route exact path="/" component={Hero} />
          <Route exact path="/" component={Shipper} />
          <Route exact path="/" component={Carriers} />
          <Route exact path="/" component={Footer} />

          <Route exact path="/drivers" component={Navbar} />
          <Route exact path="/drivers" component={Drivers} />
          <Route exact path="/drivers" component={Footer} />

          <Route exact path="/about" component={Navbar} />
          <Route exact path="/about" component={About} />
          <Route exact path="/about" component={Footer} /> */}
          <Route exact path="/" component={Footer} />

        </BrowserRouter>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
