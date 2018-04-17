import React from "react";

import { Callout, Sticky } from "../foundation/Foundation";

import Navbar from "./Navbar";

import navbarItems from "../../config/navbarItems.json";

const brand = {
  text: "Hi",
  menuText: true
};

const stickyBarStyle = {
  width: "100%"
};

const bannerStyle = {
  height: "100px",
  "text-align": "center"
};

const stickyConfig = {
  "data-options": "marginTop:0;",
  "data-top-anchor": "1"
};

const Header = () => (
  <header id="app-header" data-sticky-container>
    <Sticky style={stickyBarStyle} stickyConfig={stickyConfig}>
      <Navbar brand={brand} items={navbarItems} />
    </Sticky>
    <Callout id="app-header-banner" style={bannerStyle}>
      <p>mostly abnormal.</p>
    </Callout>
  </header>
);

export default Header;