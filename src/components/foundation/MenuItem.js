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

  const name = generateClassName("", props);
  return name;
};

const MenuItem = ({ id, style, link, text, ...others }) => (
  <li id={id || null} style={style|| null} className={createMenuItemClassName(others)}>
    {link ? <a href={link}>{text}</a> : text}
  </li>
);

MenuItem.propTypes = {
  children: PropTypes.object,
  id: PropTypes.string,
  link: PropTypes.string,
  style: PropTypes.object,
  text: PropTypes.string
};

export default MenuItem;