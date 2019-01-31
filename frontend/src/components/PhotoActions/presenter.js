import React from "react";
import PropTypes from "prop-types";
import IconHeart from "react-ionicons/lib/IosHeartOutline";
import IconText from "react-ionicons/lib/IosTextOutline";
import styles from "./styles.scss";

const PhotoActions = (props, context) => (
  <div className={styles.photoActions}>
    <div className={styles.actions}>
      <button
        type="button"
        className={styles.actionLike}
        onClick={props.handleHeartClick}
      >
        <IconHeart fontSize="28px" color="#000" />
      </button>
      <button type="button" className={styles.actionReply}>
        <IconText fontSize="28px" color="#000" />
      </button>
    </div>
    <div className={styles.likeLength}>
      <button type="button" onClick={props.openLikes}>
        {props.number}{" "}
        {props.number === 1 ? context.t("like") : context.t("likes")}
      </button>
    </div>
  </div>
);

PhotoActions.contextTypes = {
  t: PropTypes.func.isRequired
};

PhotoActions.propTypes = {
  number: PropTypes.number.isRequired,
  isLiked: PropTypes.bool.isRequired,
  photoId: PropTypes.number.isRequired,
  handleHeartClick: PropTypes.func.isRequired,
  openLikes: PropTypes.func.isRequired
};

export default PhotoActions;
