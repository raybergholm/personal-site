import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "./utils";

const Label = ({ id, style, text, ...others }) => (
    <div id={id || null} style={style|| null} className={generateClassName("label", others)}>{text}</div>
);

Label.propTypes = {
  id: PropTypes.string,
  style: PropTypes.object,
  text: PropTypes.string,
};

export default Label;