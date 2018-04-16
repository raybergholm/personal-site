import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "./utils";

const Button = ({ link, action, text, ...props }) => {
  if(link) {
    return <a href={link} className={generateClassName("button", props)}>{text}</a>;
  }
  if(action) {
    return <button type="button" onClick={action} className={generateClassName("button", ...props)}>{text}</button>;
  }
  return null;
};

Button.propTypes = {
  action: PropTypes.func,
  link: PropTypes.string,
  text: PropTypes.string
};

export default Button;