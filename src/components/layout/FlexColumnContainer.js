import React from "react";
import PropTypes from "prop-types";

import { Cell, Row } from "../foundation/XyGrid";

const Container = ({ mainContent, leftContent, rightContent }) => (
  <article className="grid-container">
    {leftContent && rightContent && (
      <Row>
        <Cell medium={2} large={3}>{leftContent}</Cell>
        <Cell small={12} medium={8} large={6}>{mainContent}</Cell>
        <Cell medium={2} large={3}>{rightContent}</Cell>
      </Row>
    )}
    {leftContent && !rightContent && (
      <Row>
        <Cell medium={2} large={3}>{leftContent}</Cell>
        <Cell small={12} medium={9} large={9}>{mainContent}</Cell>
      </Row>
    )}
    {leftContent && !rightContent && (
      <Row>
        <Cell small={12} medium={9} large={9}>{mainContent}</Cell>
        <Cell medium={2} large={3}>{rightContent}</Cell>
      </Row>
    )}
    {!leftContent && !rightContent && (
      <Row>
        <Cell auto>{mainContent}</Cell>
      </Row>
    )}
  </article>
);

Container.propTypes = {
  mainContent: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  leftContent: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  rightContent: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
};

export default Container;