import React from "react";
import PropTypes from "prop-types";

import TwoColumnRightContainer from "../../components/layout/TwoColumnRightContainer";
import ArticleNavigation from "../../components/layout/ArticleNavigation";
import BlogPost from "../../components/BlogPost";
import BlogSidebar from "../../components/layout/BlogSidebar";

import mockPosts from "../../config/mockPosts.json";

const fetchArticle = (articleId) => {
  const result = mockPosts.filter(({_id}) => _id === articleId);

  const post = result ? result[0] : null;


  return post ? <BlogPost key={post._id} {...post} /> : null;
};

const getMainContent = (articleId) => (
  <div>
    <ArticleNavigation />
    {fetchArticle(articleId)}
  </div>
);

const Page = ({match}) => (
  <TwoColumnRightContainer id="main-content-section" side={<BlogSidebar />}>
    {getMainContent(match.params.articleId)}
  </TwoColumnRightContainer>
);

Page.propTypes = {
  match: PropTypes.object
};

export default Page;