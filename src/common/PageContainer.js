import React from "react";

const PageContainer = ({ content }) => (
  <div>
    {content.sidebar && 
      <div>
        <p>THIS IS A SIDEBAR</p>
      </div>
    }

  </div>
);

export default PageContainer;