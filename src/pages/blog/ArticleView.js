import React from "react";
import PropTypes from "prop-types";

import FlexColumnContainer from "../../components/layout/FlexColumnContainer";
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

const fetchContent = (articleId) => ({
  mainContent: getMainContent(articleId),
  rightContent: (<BlogSidebar />)
});

const Page = ({match}) => (
  <FlexColumnContainer {...fetchContent(match.params.articleId)} />
);

Page.propTypes = {
  match: PropTypes.object
};

export default Page;