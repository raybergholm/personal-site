import React from "react";
import PropTypes from "prop-types";

const CommentInput = ({ _id, labelText, placeholderText = "", initialText = "", buttonClickAction, buttonText }) => (
  <div id={`comment-input-${_id}`}>
    <label>
        {labelText}
        <textarea placeholder={placeholderText}>{initialText ? initialText : null}</textarea>
    </label>
    <button className="button" onClick={buttonClickAction}>{buttonText}</button>
  </div>
);

CommentInput.propTypes = {
  _id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  placeholderText: PropTypes.string,
  initialText: PropTypes.string,
  buttonClickAction: PropTypes.func,
  buttonText: PropTypes.string.isRequired
};

export default CommentInput;