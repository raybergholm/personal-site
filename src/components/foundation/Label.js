import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "./utils";

const Label = ({ text, ...props }) => (
    <div className={generateClassName("label", props)}>{text}</div>
);

Label.propTypes = {
  text: PropTypes.string
};

export default Label;