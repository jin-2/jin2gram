import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userAction } from "../../redux/modules/user";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getPhotoLikes: () => {
      dispatch(userAction.getPhotoLikes(ownProps.id));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Container);
