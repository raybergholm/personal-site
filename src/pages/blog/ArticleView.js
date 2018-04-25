import React from "react";
import PropTypes from "prop-types";

import TwoColumnRightBody from "../../components/layout/TwoColumnRightBody";
import ArticleNavigation from "../../components/layout/ArticleNavigation";
import BlogPost from "../../components/BlogPost";
import BlogSidebar from "../../components/layout/BlogSidebar";

import mockPosts from "../../config/mockPosts.json";

const fetchPost = (articleId) => {
  const result = mockPosts.filter(({ _id }) => _id === articleId);

  return result ? result[0] : null;
};

const Page = ({ match }) => {
  const post = fetchPost(match.params.articleId);

  return (<TwoColumnRightBody id="main-content-section" side={<BlogSidebar topAnchor="app-header:bottom" bottomAnchor="app-footer:top" />}>
    <ArticleNavigation prevLink={post.prev} nextLink={post.next} />
    {post && (<BlogPost key={post._id} {...post} />)}
  </TwoColumnRightBody>);
};

Page.propTypes = {
  match: PropTypes.object,
  state: PropTypes.object
};

export default Page;