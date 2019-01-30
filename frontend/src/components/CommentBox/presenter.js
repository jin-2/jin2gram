import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import TextareaAutosize from "react-textarea-autosize";

const CommentBox = (props, context) => (
  <form className={styles.commentForm}>
    <TextareaAutosize
      className={styles.textbox}
      placeholder={context.t("Add a comment...")}
      onChange={props.handleInputChange}
      onKeyPress={props.handleInputKeyPress}
      value={props.comment}
    />
  </form>
);

CommentBox.contextTypes = {
  t: PropTypes.func.isRequired
};

CommentBox.propTypes = {
  comment: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleInputKeyPress: PropTypes.func.isRequired
};

export default CommentBox;
