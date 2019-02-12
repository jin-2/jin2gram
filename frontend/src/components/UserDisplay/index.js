import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userAction } from "../../redux/modules/user";

const mapDispatchToProps = (dispatch, ownProps) => {
  const { following, id } = ownProps;
  return {
    handleClick: () => {
      if (!following) {
        dispatch(userAction.followUser(id));
      } else {
        dispatch(userAction.unfollowUser(id));
      }
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Container);
