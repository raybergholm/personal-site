import React from "react";

import Navbar from "./Navbar";

import { Jumbotron } from "react-bootstrap";

const brand = {
  text: "Hi",
  link: "/"
};

const navbarItems = [
  {
    type: "item",
    payload: {
      key: "about",
      text: "About",
      link: "/about" 
    }
  },
  {
    type: "item",
    payload: {
      key: "blog",
      text: "Blog",
      link: "/blog" 
    }
  }
];

const Header = () => (
  <div>
    <Jumbotron>
      <p>This is a Jumbotron</p>
    </Jumbotron>
    <Navbar brand={brand} items={navbarItems} />
  </div>
);

export default Header;