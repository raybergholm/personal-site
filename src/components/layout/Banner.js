import React from "react";
import PropTypes from "prop-types";

import { Callout } from "../foundation/Foundation";

const Banner = ({ id, style, children }) => (
  <Callout id={id || null} style={style || null}>
    {children}
  </Callout>
);

export default Banner;

Banner.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  id: PropTypes.string,
  style: PropTypes.object
};