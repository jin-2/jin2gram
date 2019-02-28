import { connect } from "react-redux";
import { actionCreators as userActions } from "../../redux/modules/user";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
  const { profile } = state.user;
  return {
    profile
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { username } = ownProps.match.params;
  return {
    getUsername: () => {
      dispatch(userActions.getUsername(username));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
