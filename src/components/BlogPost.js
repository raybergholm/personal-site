import React from "react";
import PropTypes from "prop-types";

import Showdown from "showdown";

const ARTICLE_ROOT_URL = "/blog/";

const converter = new Showdown.Converter({
  headerLevelStart: 3,
  requireSpaceBeforeHeadingText: true,
  strikethrough: true,
  tasklists: true
});

const parseText = (text) => converter.makeHtml(text);

const BlogPost = ({ _id, link, title, timestamp, author, body }) => (
  <div id={`blog-post-${_id}`}>
    <h2><a href={`${ARTICLE_ROOT_URL}${link}`}>{title}</a></h2>
    <p>{timestamp} by {author}</p>
    <hr />
    <div dangerouslySetInnerHTML={{__html: parseText(body)}} />
  </div>
);

BlogPost.propTypes = {
  _id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.object.isRequired,
  link: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default BlogPost;