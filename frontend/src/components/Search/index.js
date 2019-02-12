import { connect } from "react-redux";
import { actionCreators as userActions } from "../../redux/modules/user";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
  const {
    user: { usersList, imageList }
  } = state;
  return {
    usersList,
    imageList
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { searchTerm } = ownProps.match.params;
  return {
    searchByTerm: () => {
      dispatch(userActions.searchByTerm(searchTerm));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
