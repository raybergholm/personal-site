import React from "react";
import PropTypes from "prop-types";

import { Button } from "../foundation/Foundation";

const ArticleNavigation = ({onPrev, onNext}) => (
  <div>
    <Button action={onPrev} text="Previous" />
    <Button action={onNext} text="Next" />
  </div>
);

export default ArticleNavigation;

ArticleNavigation.propTypes = {
  onNext: PropTypes.func,
  onPrev: PropTypes.func
};