import React from "react";
import PropTypes from "prop-types";

import { Pagination } from "../../components/foundation/Foundation";

import TwoColumnRightContainer from "../../components/layout/TwoColumnRightContainer";
import BlogPost from "../../components/BlogPost";
import BlogSidebar from "../../components/layout/BlogSidebar";

import mockPosts from "../../config/mockPosts.json";

const getPageNumber = (params) => params.pageNumber;

const fetchMainContent = () => {
  const posts = mockPosts.map((props) => (<BlogPost key={props._id} {...props} />));
  
  const paginationSettings = {
    currentIndex: 1,
    pageCount: 12
  };
  const pagination = (<Pagination settings={paginationSettings} />);

  return [posts, pagination];
};

const Page = ({match}) => (
  <TwoColumnRightContainer id="main-content-section" side={<BlogSidebar />}>
    {fetchMainContent()}
  </TwoColumnRightContainer>
);

Page.propTypes = {
  match: PropTypes.string
};

export default Page;