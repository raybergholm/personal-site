import React from "react";

import { Col, Cell } from "../../components/foundation/Foundation";

const columnStyle = {
  height: "100%"
};

const Side = () => (
  <Col style={columnStyle}>
    <Cell shrink>
      <img className="thumbnail" src="https://placehold.it/550x350" />
    </Cell>
    <Cell auto>
      <h5>Ray Bergholm</h5>
      <p>I develop stuff.</p>
    </Cell>
  </Col>
);

export default Side;