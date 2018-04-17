import React from "react";
import PropTypes from "prop-types";

import { Pagination } from "../../components/foundation/Foundation";

import FlexColumnContainer from "../../components/layout/FlexColumnContainer";
import BlogPost from "../../components/BlogPost";
import BlogSidebar from "../../components/layout/BlogSidebar";

import mockPosts from "../../config/mockPosts.json";

const getPageNumber = (params) => params.pageNumber;

const fetchMockContent = () => {
  const posts = mockPosts.map((props) => (<BlogPost key={props._id} {...props} />));
  
  const paginationSettings = {
    currentIndex: 1,
    pageCount: 12
  };
  const pagination = (<Pagination settings={paginationSettings} />);
  return {
    mainContent: [posts, pagination],
    rightContent: (<BlogSidebar />)
  };
};

const Page = ({match}) => (
  <div id="main-content-section">
    <FlexColumnContainer {...fetchMockContent()} />
  </div>
);

Page.propTypes = {
  match: PropTypes.string
};

export default Page;