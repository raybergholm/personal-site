import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "./utils";

const buildClassName = () => {
  const BASE_CLASSNAME = "sticky";
  const tokens = [BASE_CLASSNAME];

  return generateClassName(tokens);
};

const configureSticky = (stickyConfig) => {

};

const Sticky = ({ id, style, config, children, ...others }) => (
  <div id={id} style={style} data-sticky {...configureSticky(config)} className={buildClassName(others)}>
    {children}
  </div>
);

export default Sticky;

Sticky.propTypes = {
  children: PropTypes.oneOfType(
    PropTypes.object,
    PropTypes.array
  ),
  config: PropTypes.object,
  id: PropTypes.string,
  style: PropTypes.object
};