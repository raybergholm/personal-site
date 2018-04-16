import React from "react";
import PropTypes from "prop-types";

const TopBar = ({ left, right }) => (
  <nav className="top-bar">
    <div className="top-bar-left">
      {left}
    </div>
    <div className="top-bar-right">
      {right}
    </div>
  </nav>
);

TopBar.propTypes = {
  left: PropTypes.object,
  right: PropTypes.object
};

export default TopBar;