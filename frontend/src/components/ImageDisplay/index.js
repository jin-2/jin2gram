import React from "react";
import PropTypes from "prop-types";
import IconHeart from "react-ionicons/lib/IosHeart";
import IconText from "react-ionicons/lib/IosText";
import styles from "./styles.scss";

const ImageDisplay = props => (
  <div className={styles.imageItemWrap}>
    <div className={styles.imageItem}>
      <div className={styles.imageLayer}>
        <img src={props.image.file} alt="" />
      </div>
      <div className={styles.infoLayer}>
        <span className={styles.count}>
          <IconHeart fontSize="22px" color="#fff" className={styles.icon} />
          {props.image.likes_count}
        </span>
        <span className={styles.count}>
          <IconText fontSize="22px" color="#fff" className={styles.icon} />
          {props.image.comments_count}
        </span>
      </div>
    </div>
  </div>
);

ImageDisplay.propTypes = {
  image: PropTypes.shape({
    file: PropTypes.string.isRequired,
    likes_count: PropTypes.number.isRequired,
    comments_count: PropTypes.number.isRequired
  }).isRequired
};

export default ImageDisplay;
