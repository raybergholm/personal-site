import React from "react";
import PropTypes from "prop-types";

import Foundation from "./foundation/Foundation";

import Showdown from "showdown";

const { Label } = Foundation;

const ARTICLE_ROOT_URL = "/blog/article/";

const converter = new Showdown.Converter({
  headerLevelStart: 3,
  requireSpaceBeforeHeadingText: true,
  strikethrough: true,
  tasklists: true
});

const parseText = (text) => converter.makeHtml(text);

const BlogPost = ({ _id, link, title, timestamp, author, tags, body }) => (
  <article id={`blog-post-${_id}`}>
    <h2><a href={`${ARTICLE_ROOT_URL}${link}`}>{title}</a></h2>
    <p>Posted {timestamp} by <strong>{author}</strong></p>
    
    <hr />
    <div dangerouslySetInnerHTML={{ __html: parseText(body) }} />
    <small>Tags:</small>
    {tags.map((tag, index) => <Label key={index} text={tag} />)}
    <hr />
  </article>
);

BlogPost.propTypes = {
  _id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  timestamp: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default BlogPost;