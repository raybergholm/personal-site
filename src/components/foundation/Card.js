import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "./utils";

export const Card = ({ id, style, children, ...others }) => (
  <div id={id || null} style={style|| null} className={generateClassName("card", others)}>
    {children}
  </div>
);

export const CardDivider = ({ id, style, children, ...others }) => (
  <div id={id || null} style={style|| null} className={generateClassName("card-divider", others)}>
    {children}
  </div>
);

export const CardSection = ({ id, style, children, ...others }) => (
  <div id={id || null} style={style|| null} className={generateClassName("card-section", others)}>
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.object,
  id: PropTypes.string,
  style: PropTypes.object
};

CardDivider.propTypes = {
  children: PropTypes.object,
  id: PropTypes.string,
  style: PropTypes.object
};

CardSection.propTypes = {
  children: PropTypes.object,
  id: PropTypes.string,
  style: PropTypes.object
};

const exportObj = Card;
exportObj.Divider = CardDivider;
exportObj.Section = CardSection;

export default exportObj;