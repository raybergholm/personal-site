import React from "react";

import { Sticky } from "../foundation/Foundation";

import Navbar from "./Navbar";
import Banner from "./Banner";

import navbarItems from "../../config/navbarItems.json";

const brand = {
  text: "Hi",
  menuText: true
};

const stickyBarStyle = {
  width: "100%"
};

const bannerStyle = {
  height: "200px",
  "font-family": "\"Courier New\", Courier, monospace",
  "text-align": "center",
  "vertical-align": "middle",
  "line-height": "normal"
};

const stickyConfig = {
  "data-options": "marginTop:0;",
  "data-top-anchor": "1"
};

const banner = () => (
  <Banner id="app-header-banner" style={bannerStyle}>
    <span>mostly normal.</span>
  </Banner>
);

const Header = () => (
  <header id="app-header" data-sticky-container>
    <Sticky style={stickyBarStyle} {...stickyConfig}>
      <Navbar brand={brand} items={navbarItems} />
    </Sticky>
  </header>
);

export default Header;