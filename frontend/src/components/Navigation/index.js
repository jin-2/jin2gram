import { connect } from "react-redux";
import { push } from "connected-react-router";
import Container from "./container";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    goToSearch: searchTerm => {
      dispatch(push(`/search/${searchTerm}`));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Container);
