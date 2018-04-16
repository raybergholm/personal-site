import React from "react";
import PropTypes from "prop-types";

export const Topbar = ({ left, right }) => (
  <nav className="top-bar">
    <div className="top-bar-left">
      {left}
    </div>
    <div className="top-bar-right">
      {right}
    </div>
  </nav>
);

Topbar.propTypes = {
  left: PropTypes.object,
  right: PropTypes.object
};
