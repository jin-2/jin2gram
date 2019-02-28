import { connect } from "react-redux";
import { push } from "connected-react-router";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
  const { username } = state.user;
  return {
    username
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    goToSearch: searchTerm => {
      dispatch(push(`/search/${searchTerm}`));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
