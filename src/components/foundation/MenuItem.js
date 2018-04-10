import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "./utils";

const createMenuItemClassName = ({ text, isActive }) => {
  const props = [];

  if (text) {
    props.push("menu-text");
  }
  if (isActive) {
    props.push("is-active");
  }

  return generateClassName("", props);
};

const MenuItem = ({ children, ...props }) => (
  <li className={createMenuItemClassName(props)}>{children}</li>
);

MenuItem.propTypes = {
  children: PropTypes.object
};

export default MenuItem;