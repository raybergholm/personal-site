import React from "react";

import { Jumbotron } from "react-bootstrap";

import Navbar from "./Navbar";

import navbarItems from "../config/navbarItems.json";

const brand = {
  text: "Hi",
  link: "/"
};

const Header = () => (
  <div>
    <Navbar brand={brand} items={navbarItems} />
    <Jumbotron>
      <p>This is a Jumbotron</p>
    </Jumbotron>
    
  </div>
);

export default Header;