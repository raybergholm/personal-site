import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "./utils";

const createMenuItemClassName = ({ menuText, isActive }) => {
  const props = [];

  if (menuText) {
    props.push("menu-text");
  }
  if (isActive) {
    props.push("is-active");
  }

  return generateClassName("", props);
};

const MenuItem = ({ link, text, ...props }) => (
  <li className={createMenuItemClassName(props)}>
    {link ? <a href={link}>{text}</a> : text}
  </li>
);

MenuItem.propTypes = {
  children: PropTypes.object,
  link: PropTypes.string,
  text: PropTypes.string
};

export default MenuItem;