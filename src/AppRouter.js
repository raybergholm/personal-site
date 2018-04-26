import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import HomePage from "./pages/Home";
import AboutPage from "./pages/AboutPage";

import PortfolioPage from "./pages/PortfolioPage";
import ProjectView from "./pages/portfolio/ProjectView";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/portfolio" component={PortfolioPage} />
      <Route path="/portfolio/:projectId" component={ProjectView} />
      <Route path="/about" component={AboutPage} />
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;