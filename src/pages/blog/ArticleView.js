import React from "react";
import PropTypes from "prop-types";

import BlogPost from "../../components/BlogPost";

import mockPosts from "../../config/mockPosts.json";

const fetchArticle = (articleId) => {
  const result = mockPosts.filter(({_id}) => _id === articleId);

  const post = result ? result[0] : null;


  return post ? <BlogPost key={post._id} {...post} /> : null;
};

const Page = ({match}) => (
  <div>
    {fetchArticle(match.params.articleId)}
  </div>
);

Page.propTypes = {
  match: PropTypes.object
};

export default Page;