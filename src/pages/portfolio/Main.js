import React from "react";

import { Col, Cell } from "../../components/foundation/Foundation";

const columnStyle = {
  height: "100%"
};

const Main = () => (
<Col style={columnStyle}>
    <Cell auto>
      <p>This is the main section</p>
    </Cell>
  </Col>
);

export default Main;