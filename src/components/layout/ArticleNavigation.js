import React from "react";
import PropTypes from "prop-types";

import { Row, Cell, Button } from "../foundation/Foundation";

const ArticleNavigation = ({ onPrev, onNext }) => (
  <Row>
    <Cell small={2}>
      <Button action={onPrev} expanded text="Previous" />
    </Cell>
    <Cell auto></Cell>
    <Cell small={2}>
      <Button action={onNext} expanded text="Next" />
    </Cell>
  </Row>
);

export default ArticleNavigation;

ArticleNavigation.propTypes = {
  onNext: PropTypes.func,
  onPrev: PropTypes.func
};