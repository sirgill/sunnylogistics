import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";
import Carriers from "./components/layout/Carriers";
import Shipper from "./components/layout/Shippers";
import Drivers from "./components/layout/Drivers";
import Footer from "./components/layout/Footer";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/layout/ui/Theme";
import About from "./components/layout/About";

import { Provider } from "react-redux";
import { Container } from "@material-ui/core";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <BrowserRouter>
          <Route exact path="/" component={Navbar} />
          <Route exact path="/" component={Hero} />
          <Route exact path="/" component={Shipper} />
          <Route exact path="/" component={Carriers} />
          <Route exact path="/" component={Footer} />

          <Route exact path="/drivers" component={Navbar} />
          <Route exact path="/drivers" component={Drivers} />
          <Route exact path="/drivers" component={Footer} />

          <Route exact path="/about" component={Navbar} />
          <Route exact path="/about" component={About} />
          <Route exact path="/about" component={Footer} />
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
};

export default App;
