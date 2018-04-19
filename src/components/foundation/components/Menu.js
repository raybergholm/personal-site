import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "./utils";

import MenuItem from "./MenuItem";

const buildClassName = ({ simple, vertical, alignMiddle, alignRight, icons, iconTop, iconBottom, iconLeft, iconRight }) => {
  const BASE_CLASSNAME = "menu";
  const tokens = [BASE_CLASSNAME];

  if (simple) {
    tokens.push("full");
  }

  if (vertical) {
    tokens.push("vertical");

    if (alignMiddle) {
      tokens.push("align-middle");
    } else if (alignRight) {
      tokens.push("align-right");
    }
  }

  if (icons && (iconTop || iconBottom || iconLeft || iconRight)) {
    tokens.push("icons");

    if (iconTop) {
      tokens.push("icon-top");
    } else if (iconBottom) {
      tokens.push("icon-bottom");
    } else if (iconLeft) {
      tokens.push("icon-left");
    } else if (iconRight) {
      tokens.push("icon-right");
    }
  }

  return generateClassName(tokens);
};

const Menu = ({ id, style, items, ...others }) => (
  <ul id={id || null} style={style|| null} className={buildClassName(others)}>
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