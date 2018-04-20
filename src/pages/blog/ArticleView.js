import React from "react";
import PropTypes from "prop-types";

import TwoColumnRightContainer from "../../components/layout/TwoColumnRightContainer";
import ArticleNavigation from "../../components/layout/ArticleNavigation";
import BlogPost from "../../components/BlogPost";
import BlogSidebar from "../../components/layout/BlogSidebar";

import mockPosts from "../../config/mockPosts.json";

const fetchArticle = (articleId) => {
  const result = mockPosts.filter(({ _id }) => _id === articleId);

  const post = result ? result[0] : null;


  return post ? <BlogPost key={post._id} {...post} /> : null;
};

const handleNext = (state) => {
  console.log("trying to go to next");
};

const handlePrev = (state) => {
  console.log("trying to go to prev");
};

const Page = ({ match }) => (
  <TwoColumnRightContainer id="main-content-section" side={<BlogSidebar topAnchor="app-header:bottom" bottomAnchor="app-footer:top" />}>
    <ArticleNavigation onNext={handleNext} onPrev={handlePrev} />
    {fetchArticle(match.params.articleId)}
  </TwoColumnRightContainer>
);

Page.propTypes = {
  match: PropTypes.object,
  state: PropTypes.object
};

export default Page;