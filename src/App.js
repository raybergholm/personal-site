import React from "react";

import AppRouter from "./routes";

import "./App.css";

const history = {};

const App = () => (
  <AppRouter history={history} />
);

export default App;