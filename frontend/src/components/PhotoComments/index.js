import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

const PhotoComments = props => (
  <div>
    <ul className={styles.commentList}>
      <Comment creator={props.creator} comment={props.caption} />
      {props.comments.map(comment => (
        <Comment
          key={comment.id}
          creator={comment.creator.name}
          comment={comment.message}
        />
      ))}
    </ul>
  </div>
);

const Comment = props => (
  <li className={styles.commentItem}>
    <span className={styles.commentCreator}>{props.creator}</span>
    <span className={styles.commentText}>{props.comment}</span>
  </li>
);

PhotoComments.propTypes = {
  caption: PropTypes.string.isRequired,
  creator: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      creator: PropTypes.shape({
        name: PropTypes.string.isRequired,
        profile_image: PropTypes.string
      }).isRequired
    }).isRequired
  ).isRequired
};

export default PhotoComments;
