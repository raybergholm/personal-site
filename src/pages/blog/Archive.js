import React from "react";
import PropTypes from "prop-types";

import FlexColumnContainer from "../../components/layout/FlexColumnContainer";
import BlogSidebar from "../../components/layout/BlogSidebar";


const MainContent = ({month, year}) => (<div>
    <p>I am the blog archive page for {month}/{year}</p>
  </div>);

const fetchContent = (params) => ({
  mainContent: MainContent(params),
  rightContent: (<BlogSidebar />)
});

const Page = ({match}) => (
  <div id="main-content-section">
    <FlexColumnContainer {...fetchContent(match.params)} />
  </div>
);

Page.propTypes = {
  match: PropTypes.object
};

MainContent.propTypes = {
  month: PropTypes.string,
  year: PropTypes.string
};

export default Page;