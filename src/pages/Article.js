import React from "react";
import PropTypes from "prop-types";

const Article = ({_id, title, timestamp, author, body}) => (
    <div>
        <h3>{title}</h3>
        <h2>{timestamp} by {author}</h2>
        {body}
    </div>
);

Article.propTypes = {
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    body: PropTypes.object.isRequired
};

export default Article;