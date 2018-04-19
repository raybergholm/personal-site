import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "./utils";

import MenuItem from "./MenuItem";

const createMenuClassName = ({ simple, vertical, alignMiddle, alignRight, icons, iconTop, iconBottom, iconLeft, iconRight }) => {
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

const Menu = ({ id, style, items, ...others }) => (
  <ul id={id || null} style={style|| null} className={createMenuClassName(others)}>
    {items.map(({ link, text, ...others }, index) => (<MenuItem key={index} link={link} text={text} {...others} />))}
  </ul>
);

export default Menu;

Menu.propTypes = {
  id: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  selected: PropTypes.object,
  style: PropTypes.object
};