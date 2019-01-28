import React from "react";
import PropTypes from "prop-types";

const FeedPhoto = props => <div>{props.caption}</div>;

FeedPhoto.propTypes = {
  creator: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profile_image: PropTypes.string
  }).isRequired,
  location: PropTypes.string.isRequired,
  file: PropTypes.string.isRequired,
  like_count: PropTypes.number.isRequired,
  created_at: PropTypes.string.isRequired,
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

export default FeedPhoto;
