import React from "react";
import PropTypes from "prop-types";

import { GridContainer, Cell, Row } from "../foundation/Foundation";

const Body = ({ id, style, children, side, ...others }) => (
  <GridContainer id={id || null} style={style || null} {...others}>
    <Row {...others}>
      <Cell small={12} medium={9} large={9}>
        {children}
      </Cell>
      <Cell medium={2} large={3}>
        {side}
      </Cell>
    </Row>
  </GridContainer>
);

Body.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  id: PropTypes.string,
  side: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  style: PropTypes.object
};

export default Body;