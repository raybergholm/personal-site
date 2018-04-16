import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "./utils";

const Card = ({ children, ...props }) => (
  <div className={generateClassName("card", props)}>
    {children}
  </div>
);

const CardDivider = ({ children, ...props }) => (
  <div className={generateClassName("card-divider", props)}>
    {children}
  </div>
);

const CardSection = ({ children, ...props }) => (
  <div className={generateClassName("card-section", props)}>
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.object
};

CardDivider.propTypes = {
  children: PropTypes.object
};

CardSection.propTypes = {
  children: PropTypes.object
};

const exportObj = Card;
exportObj.Divider = CardDivider;
exportObj.Section = CardSection;

export default exportObj;