import React from "react";

import { Col, Cell } from "../../components/foundation/Foundation";

const colStyle = {
  "background-color": "#EEEEEE"
};

const Side = () => (
  <Col style={colStyle}>
    <Cell >
      <img className="thumbnail" src="https://placehold.it/550x350" />
    </Cell>
    <Cell>
      <h5>Ray Bergholm</h5>
      <p>I develop stuff.</p>
    </Cell>
  </Col>
);

export default Side;