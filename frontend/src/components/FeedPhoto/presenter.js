import React from "react";
import PropTypes from "prop-types";
import PhotoActions from "../PhotoActions";

const FeedPhoto = props => (
  <div>
    <header>
      <div>
        <img
          src={props.creator.profile_image || require("images/noPhoto.jpg")}
          alt={props.creator.name}
          width="30"
        />
      </div>
      <div>
        <span>{props.creator.name}</span>
        <span>{props.location}</span>
      </div>
      <div>
        <img src={props.file} alt={props.caption} width="600" />
      </div>
      <div>
        <PhotoActions number={props.likes_count} />
      </div>
    </header>
  </div>
);

FeedPhoto.propTypes = {
  creator: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profile_image: PropTypes.string
  }).isRequired,
  location: PropTypes.string.isRequired,
  file: PropTypes.string.isRequired,
  likes_count: PropTypes.number.isRequired,
  caption: PropTypes.string.isRequired,
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
