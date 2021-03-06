import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import PhotoActions from "../PhotoActions";
import PhotoComments from "../PhotoComments";
import TimeStemp from "../TimeStemp";
import CommentBox from "../CommentBox";
import UserList from "../UserList";

const FeedPhoto = (props, context) => (
  <div className={styles.feedItem}>
    <header className={styles.feedHeader}>
      <div className={styles.creatorPhoto}>
        <img
          src={props.creator.profile_image || require("images/noPhoto.jpg")}
          alt={props.creator.name}
        />
      </div>
      <div className={styles.creator}>
        <span className={styles.creatorName}>{props.creator.name}</span>
        <span className={styles.creatorLocation}>{props.location}</span>
      </div>
    </header>
    <div className={styles.feedImage}>
      <img src={props.file} alt={props.caption} />
    </div>
    <div className={styles.feedExtra}>
      <PhotoActions
        number={props.likes_count}
        isLiked={props.is_liked}
        photoId={props.id}
        openLikes={props.openLikes}
      />
      <PhotoComments
        caption={props.caption}
        creator={props.creator.name}
        comments={props.comments}
      />
      <TimeStemp time={props.natural_time} />
      <CommentBox photoId={props.id} />
    </div>
    {props.seeingLikes && (
      <UserList title={context.t("Likes")} closeLikes={props.closeLikes} />
    )}
  </div>
);

FeedPhoto.contextTypes = {
  t: PropTypes.func.isRequired
};

FeedPhoto.propTypes = {
  creator: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profile_image: PropTypes.string
  }).isRequired,
  location: PropTypes.string.isRequired,
  file: PropTypes.string.isRequired,
  likes_count: PropTypes.number.isRequired,
  caption: PropTypes.string.isRequired,
  natural_time: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      creator: PropTypes.shape({
        name: PropTypes.string.isRequired,
        profile_image: PropTypes.string
      }).isRequired
    }).isRequired
  ).isRequired,
  is_liked: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  seeingLikes: PropTypes.bool.isRequired,
  openLikes: PropTypes.func.isRequired,
  closeLikes: PropTypes.func.isRequired
};

export default FeedPhoto;
