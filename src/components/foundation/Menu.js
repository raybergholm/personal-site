import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "./utils";

import MenuItem from "./MenuItem";

const createMenuTextItem = (item) => (<li className="menu-text">{item}</li>);
const createItems = (item) => (<li>{item}</li>);

const CLASSNAME_DELIMITER = " ";

const createMenuClassName = () => {
  const props = [];

  if (simple) {
    props.push("full");
  }

  if (vertical) {
    props.push("vertical");

    if (alignMiddle) {
      props.push("align-middle");
    } else if (alignRight) {
      props.push("align-right");
    }
  }

  if (icons) {
    props.push("icons");

    if (iconTop) {
      props.push("icon-top");
    } else if (iconBottom) {
      props.push("icon-bottom");
    } else if (iconLeft) {
      props.push("icon-left");
    } else if (iconRight) {
      props.push("icon-right");
    }
  }

  return generateClassName("menu", props);
};

const Menu = ({ items, selected, ...props }) => (
  <ul className="menu">
    {items.map(({ children, text, isActive }) => (<MenuItem {text ? text : null}>{children}</MenuItem>))}
  </ul>
);

Menu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  selected: PropTypes.object
};

export default Menu;