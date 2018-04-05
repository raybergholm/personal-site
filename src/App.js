import React from "react";

import Header from "./components/Header";
import AppRouter from "./routes";
import Footer from "./components/Footer";

import "./App.css";

const App = () => (
  <div>
    <Header />
    <AppRouter />
    <Footer />
</div>
);

export default App;
