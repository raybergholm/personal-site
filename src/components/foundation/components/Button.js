import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "./utils";

const buildClassName = ({ dropdown, hollow, clear, disabled, primary, secondary, success, warning, alert, tiny, small, large, expanded }) => {
  const BASE_CLASSNAME = "button";
  const tokens = [BASE_CLASSNAME];

  if (dropdown) {
    tokens.push("dropdown");
  }

  if (hollow) {
    tokens.push("hollow");
  }

  if (clear) {
    tokens.push("clear");
  }

  if (disabled) {
    tokens.push("disabled");
  }

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

  if (tiny) {
    tokens.push("tiny");
  } else if (small) {
    tokens.push("small");
  } else if (large) {
    tokens.push("large");
  }

  if (expanded) {
    tokens.push("expanded");
  }
  
  return generateClassName(tokens);
};

const Button = ({ link, action, text, disabled, ...others }) => {
  if (link) {
    return <a href={link} disabled={disabled || null} className={buildClassName({ disabled, ...others })}>{text}</a>;
  }
  if (action) {
    return <button type="button" onClick={action} disabled={disabled || null} className={buildClassName({ disabled, ...others })}>{text}</button>;
  }
  return null;
};

export default Button;

Button.propTypes = {
  action: PropTypes.func,
  disabled: PropTypes.bool,
  link: PropTypes.string,
  text: PropTypes.string
};
