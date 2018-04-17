import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "./utils";



const Sticky = ({ id, style, children, ...props }) => (
  <div id={id} style={style} data-sticky className={generateClassName("callout", props)}>
    {children}
  </div>
);

Sticky.propTypes = {
  children: PropTypes.oneOfType(
    PropTypes.object,
    PropTypes.array
  ),
  id: PropTypes.string,
  style: PropTypes.object
};

export default Sticky;