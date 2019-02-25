import { connect } from "react-redux";
import { actionCreators as userActions } from "../../redux/modules/user";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
  const { username, profile } = state.user;
  return {
    username,
    profile
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getProfile: username => {
      dispatch(userActions.getProfile(username));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
