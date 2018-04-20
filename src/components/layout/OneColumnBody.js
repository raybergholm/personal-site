import React from "react";
import PropTypes from "prop-types";

import { GridContainer, Cell, Row } from "../foundation/Foundation";

const Body = ({ id, style, children, ...others }) => (
  <GridContainer id={id || null} style={style || null} {...others}>
    <Row>
      <Cell {...others}>
        {children}
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
  style: PropTypes.object
};

export default Body;