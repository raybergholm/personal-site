import React from "react";
import PropTypes from "prop-types";

import FlexColumnContainer from "../../components/layout/FlexColumnContainer";
import BlogPost from "../../components/BlogPost";
import BlogSidebar from "../../components/layout/BlogSidebar";

import mockPosts from "../../config/mockPosts.json";

const fetchArticle = (articleId) => {
  const result = mockPosts.filter(({_id}) => _id === articleId);

  const post = result ? result[0] : null;


  return post ? <BlogPost key={post._id} {...post} /> : null;
};

const fetchContent = (articleId) => ({
  mainContent: fetchArticle(articleId),
  rightContent: (<BlogSidebar />)
});

const Page = ({match}) => (
  <FlexColumnContainer {...fetchContent(match.params.articleId)} />
);

Page.propTypes = {
  match: PropTypes.object
};

export default Page;