import React from "react";
import PropTypes from "prop-types";

import NavbarItem from "./NavbarItem";

const createNavbarItems = (items) => {
  items.map(({key, text, link}) => <NavbarItem key={key} text={text} link={link} />);
};

const Navbar = ({ mainTitle, items }) => (
  <nav className="navbar navbar-light bg-light">
    <a href="#" className="navbar-brand">{mainTitle}</a>
    {items &&
      <ul className="navbar-nav">
        {createNavbarItems(items)}
      </ul>
    }
  </nav>
);

Navbar.propTypes = {
  mainTitle: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object)
};

export default Navbar;