import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import BlogSplashPage from "./pages/blog/Splash";

const AppRouter = ({ history }) => (
  <BrowserRouter history={history}>
    <div>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/blog" component={BlogSplashPage} />
    </div>
  </BrowserRouter>
);

AppRouter.propTypes = {
  history: PropTypes.object.isRequired
};

export default AppRouter;