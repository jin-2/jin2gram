import React from "react";
import PropTypes from "prop-types";
import IconHeart from "react-ionicons/lib/IosHeartOutline";
import IconText from "react-ionicons/lib/IosTextOutline";

const PhotoActions = (props, context) => (
  <div>
    <div>
      <IconHeart fontSize="28px" color="#000" />
      <IconText fontSize="28px" color="#000" />
    </div>
    <div>
      {props.number}{" "}
      {props.number === 1 ? context.t("like") : context.t("likes")}
    </div>
  </div>
);

PhotoActions.contextTypes = {
  t: PropTypes.func.isRequired
};

PhotoActions.propTypes = {
  number: PropTypes.number.isRequired
};

export default PhotoActions;
