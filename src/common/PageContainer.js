import React from "react";
import PropTypes from "prop-types";

const PageContainer = ({ content }) => (
  <div>
    {content.sidebar &&
      <div>
        <p>THIS IS A SIDEBAR</p>
      </div>
    }
  </div>
);

PageContainer.propTypes = {
  content: PropTypes.object.isRequired
};

export default PageContainer;