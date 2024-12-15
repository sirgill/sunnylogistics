import React from "react";
import { Switch, Route } from 'react-router-dom';
import LandingPage from "./scenes/Landingpage/LandingPage";
import CarriersPage from "./scenes/Carriers/Carriers";
import ShippersPage from "./scenes/Shippers/Shippers";
import AboutPage from "./scenes/About/About";
import Terms from "./scenes/Terms/Terms";
import Privacy from "./scenes/Privacy/Privacy";

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/carriers" component={CarriersPage} />
      <Route path="/shippers" component={ShippersPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/terms" component={Terms} />
      <Route path="/privacy" component={Privacy} />
    </Switch>
  );
};

export default AppRoutes;
