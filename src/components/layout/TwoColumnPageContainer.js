import React from "react";
import PropTypes from "prop-types";

import { Grid, Row, Col } from "react-bootstrap";

const MainColumn = ({ content }) => (
  <Col xs={12} md={8}>
    {content}
  </Col>
);

const SideColumn = ({ content }) => (
  <Col xsHidden md={4}>
    {content}
  </Col>
);

const Container = ({ mainContent, sideContent, side = 1 }) => (
  <Grid>
    <Row className="show-grid">
      {side === -1 && <SideColumn content={sideContent} />}
      <MainColumn content={mainContent} />
      {side === 1 && <SideColumn content={sideContent} />}
    </Row>
  </Grid>
);

MainColumn.propTypes = {
  content: PropTypes.object.isRequired
};

SideColumn.propTypes = {
  content: PropTypes.object
};


Container.propTypes = {
  mainContent: PropTypes.object.isRequired,
  sideContent: PropTypes.object,
  side: PropTypes.number
};

export default Container;