import React from "react";

import Navbar from "./Navbar";

import navbarItems from "../../config/navbarItems.json";

const brand = {
  text: "Hi",
  menuText: true
};

const Header = () => (
  <header>
    <Navbar brand={brand} items={navbarItems} />
  </header>
);

export default Header;