import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "./utils";

const Card = ({ id, style, children, ...props }) => (
  <div id={id || null} style={style|| null} className={generateClassName("card", props)}>
    {children}
  </div>
);

const CardDivider = ({ id, style, children, ...props }) => (
  <div id={id || null} style={style|| null} className={generateClassName("card-divider", props)}>
    {children}
  </div>
);

const CardSection = ({ id, style, children, ...props }) => (
  <div id={id || null} style={style|| null} className={generateClassName("card-section", props)}>
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