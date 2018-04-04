import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ mainTitle, items }) => (
  <nav className="navbar navbar-light bg-light">
    <a href="#" className="navbar-brand">{mainTitle}</a>
    {items && 
      <ul className="navbar-nav">
        {items.map((item) => (<li className="navbar-item">
        <a href={item.link} className="nav-link">{item.text}</a>
      </li>))}
        <li className="navbar-item">
          <a href="#" className="nav-link">Homepage</a>
        </li>
        <li className="navbar-item">
          <a href="#" className="nav-link">Blog</a>
        </li>
        <li className="navbar-item">
          <a href="#" className="nav-link">About</a>
        </li>
        <li className="navbar-item">
          <a href="#" className="nav-link">Contact Us</a>
        </li>
      </ul>
    }
    
  </nav>
);

Navbar.propTypes = {
  mainTitle: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object)
};

export default Navbar;