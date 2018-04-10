import React from "react";
import PropTypes from "prop-types";

import FlexColumnContainer from "../layout/FlexColumnContainer";

const View = (props) => (
  <div>
    <Header />
    <FlexColumnContainer {...props.content} />
  </div>
);

View.propTypes = {
  props: PropTypes.object({
    content: PropTypes.object.isRequired
  }).isRequired
};

export default View;