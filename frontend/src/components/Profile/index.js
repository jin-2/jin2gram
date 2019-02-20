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
    getProfile: () => {
      dispatch(userActions.getProfile("advisor"));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
