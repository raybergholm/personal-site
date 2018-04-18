import React from "react";
import PropTypes from "prop-types";

import TwoColumnRightContainer from "../../components/layout/TwoColumnRightContainer";
import BlogSidebar from "../../components/layout/BlogSidebar";

const Page = ({match}) => (
  <TwoColumnRightContainer id="main-content-section" side={<BlogSidebar />}>
    <div>
      <p>I am the blog archive page for {match.params.month}/{match.params.year}</p>
    </div>
  </TwoColumnRightContainer>
);

Page.propTypes = {
  match: PropTypes.object
};

export default Page;