import React from "react";
import PropTypes from "prop-types";

const NavbarItem = ({ key, text, link }) => (
    <li key={key} className="navbar-item">
      <a href={link ? link : "#"} className="nav-link">{text}</a>
    </li>
);

NavbarItem.propTypes = {
  key: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string
};

export default NavbarItem;