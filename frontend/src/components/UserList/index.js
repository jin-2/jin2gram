import { connect } from "react-redux";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
  const { usersList } = state.user;
  return {
    usersList
  };
};

export default connect(mapStateToProps)(Container);
