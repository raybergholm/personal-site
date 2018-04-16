import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import HomePage from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

import BlogFeedPage from "./pages/blog/Feed";
import BlogArchivePage from "./pages/blog/Archive";
import BlogArticlePage from "./pages/blog/ArticleView";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route exact path="/blog" component={BlogFeedPage} />
      <Route path="/blog/archive" component={BlogArchivePage} />
      <Route path="/blog/article" component={BlogArticlePage} />
      <Route path="/blog/:id" component={BlogArticlePage} />
      <Redirect path="/blog/*" to="/blog" />
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;