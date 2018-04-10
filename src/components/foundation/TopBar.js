import React from "react";
import PropTypes from "prop-types";

export const Topbar = ({ left, right }) => (
  <div className="top-bar">
    <div className="top-bar-left">
      {left}
    </div>
    <div className="top-bar-right">
      {right}
    </div>
  </div>
);

Topbar.propTypes = {
  left: PropTypes.object,
  right: PropTypes.object
};
