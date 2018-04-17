import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "./utils";

const Callout = ({ children, ...props }) => (
  <div className={generateClassName("callout", props)}>
    {children}
  </div>
);

Callout.propTypes = {
  children: PropTypes.oneOfType(
    PropTypes.object,
    PropTypes.array
  )
};


export default Callout;