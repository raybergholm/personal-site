import React from "react";
import PropTypes from "prop-types";

const createNavbarItems = (items) => {
  items.map((item) => (
    <li key={item.id} className="navbar-item">
      <a href={item.link} className="nav-link">{item.text}</a>
    </li>
  ));
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