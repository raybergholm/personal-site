import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "./utils";

const generateCellClassName = ({ small, medium, large, auto, shrink }) => {
  const props = [];

  if (auto) {
    props.push("auto");
  } else if (shrink) {
    props.push("shrink");
  } else {
    if (small) {
      props.push(`small-${small}`);
    }

    if (medium) {
      props.push(`medium-${medium}`);
    }

    if (large) {
      props.push(`large-${large}`);
    }
  }

  return generateClassName("cell", props);
};

export const Cell = ({ id, style, children, ...others }) => (
  <div id={id || null} style={style || null} className={generateCellClassName(others)}>{children}</div>
);

export default Cell;

Cell.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  id: PropTypes.string,
  style: PropTypes.object
};