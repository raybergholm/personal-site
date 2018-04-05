import React from "react";

import Navbar from "./navbar/Navbar";

const navbarItems = [
  { id: "home", text: "Home", link: "/" },
  { id: "aboutme", text: "About Me", link: "/About" },
  { id: "blog", text: "Blog", link: "/Blog" },
  { id: "cv", text: "CV", link: "/CV" }
];

const Header = () => (
  <div className="App-header">
    <Navbar mainTitle="Main Title" items={navbarItems} />
  </div>
);

export default Header;