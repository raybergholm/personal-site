import React from "react";

import Navbar from "./Navbar";

import navbarItems from "../../config/navbarItems.json";

const brand = {
  text: "Hi",
  menuText: true
};

const stickyBarStyle = {
  width: "100%"
};

const Header = () => (
  <header id="app-header" data-sticky-container>
    <div className="sticky" style={stickyBarStyle} data-sticky data-options="marginTop:0;" data-top-anchor="1">
      <Navbar brand={brand} items={navbarItems} />
    </div>
  </header>
);

export default Header;