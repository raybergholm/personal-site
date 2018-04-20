import React from "react";
import PropTypes from "prop-types";

import { GridContainer, Cell, Row } from "../foundation/Foundation";

const Body = ({ id, style, children, left, right, ...others }) => (
  <GridContainer id={id || null} style={style || null} {...others}>
    <Row {...others}>
        <Cell medium={2} large={3}>{left}</Cell>
        <Cell small={12} medium={8} large={6}>{children}</Cell>
        <Cell medium={2} large={3}>{right}</Cell>
    </Row>
  </GridContainer>
);

Body.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  id: PropTypes.string,
  left: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  right: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  style: PropTypes.object
};

export default Body;