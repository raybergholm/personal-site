import React from "react";
import PropTypes from "prop-types";

import Showdown from "showdown";

const converter = new Showdown.Converter({
  headerLevelStart: 3,
  requireSpaceBeforeHeadingText: true,
  strikethrough: true,
  tasklists: true
});

const parseText = (text) => converter.makeHtml(text);

const BlogPost = ({ _id, title, timestamp, author, body }) => (
  <div id={`blog-post-${_id}`}>
    <h2>{title}</h2>
    <p>{timestamp} by {author}</p>
    <hr />
    <div dangerouslySetInnerHTML={{__html: parseText(body)}} />
  </div>
);

BlogPost.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.object.isRequired
};

export default BlogPost;