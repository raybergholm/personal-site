import React from "react";

import Header from "./components/layout/Header";
import AppRouter from "./AppRouter";
import Footer from "./components/layout/Footer";

import "./App.css";

const App = () => (
  <div>
    <Header />
    <AppRouter />
    <Footer />
  </div>
);

export default App;
