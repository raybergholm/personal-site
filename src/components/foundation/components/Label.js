import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "./utils";

const buildClassName = ({ primary, secondary, success, warning, alert }) => {
  const BASE_CLASSNAME = "label";
  const tokens = [BASE_CLASSNAME];

  if (primary) {
    tokens.push("primary");
  } else if (secondary) {
    tokens.push("secondary");
  } else if (success) {
    tokens.push("success");
  } else if (warning) {
    tokens.push("warning");
  } else if (alert) {
    tokens.push("alert");
  }

  return generateClassName(tokens);
};

const Label = ({ id, style, text, ...others }) => (
  <div id={id || null} style={style || null} className={buildClassName(others)}>{text}</div>
);

export default Label;

Label.propTypes = {
  id: PropTypes.string,
  style: PropTypes.object,
  text: PropTypes.string,
};