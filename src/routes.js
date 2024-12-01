import React from "react";
import { Switch, Route } from 'react-router-dom';
import LandingPage from "./scenes/LandingPage/LandingPage";
import CarriersPage from "./scenes/Carriers/Carriers";
import ShippersPage from "./scenes/Shippers/Shippers";
import AboutPage from "./scenes/About/About";

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/carriers" component={CarriersPage} />
      <Route path="/shippers" component={ShippersPage} />
      <Route path="/about" component={AboutPage} />
    </Switch>
  );
};

export default AppRoutes;

