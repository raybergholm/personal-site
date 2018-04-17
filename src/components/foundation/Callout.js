import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "./utils";

const Callout = ({ id, style, children, ...props }) => (
  <div id={id || null} style={style || null} className={generateClassName("callout", props)}>
    {children}
  </div>
);

Callout.propTypes = {
  children: PropTypes.oneOfType(
    PropTypes.object,
    PropTypes.array
  ),
  id: PropTypes.string,
  style: PropTypes.object
};

export default Callout;