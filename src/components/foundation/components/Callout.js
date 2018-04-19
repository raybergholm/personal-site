import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "./utils";

const buildClassName = ({ primary, secondary, success, warning, alert, small, large }) => {
  const BASE_CLASSNAME = "callout";
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

  if (small) {
    tokens.push("small");
  } else if (large) {
    tokens.push("large");
  }

  return generateClassName(tokens);
};

const CloseButton = () => (
  <button className="close-button" aria-label="Dismiss alert" type="button" data-close>
    <span aria-hidden="true">&times;</span>
  </button>
);

const Callout = ({ id, style, children, closable, ...others }) => (
  <div id={id || null} style={style || null} data-closable={closable || null} className={buildClassName(others)}>
    {children}
    {closable && <CloseButton />}
  </div>
);

export default Callout;

Callout.propTypes = {
  children: PropTypes.oneOfType(
    PropTypes.object,
    PropTypes.array
  ),
  closable: PropTypes.oneOfType(
    PropTypes.string,
    PropTypes.bool
  ),
  id: PropTypes.string,
  style: PropTypes.object
};
