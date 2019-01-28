// import
import { actionCreators as userActions } from "./user";

// action
const SET_FEED = "SET_FEED";

// action creator
function setFeed(feed) {
  return {
    type: SET_FEED,
    feed
  };
}

// API actions
function getFeed() {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();

    fetch("/images/", {
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(userActions.logout());
        }
        return response.json();
      })
      .then(json => dispatch(setFeed(json)))
      .catch(err => console.log(err));
  };
}

// initial state
const initialState = {};

// reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_FEED":
      return applySetFeed(state, action);
    default:
      return state;
  }
}

// reducer function
function applySetFeed(state, action) {
  const { feed } = action;
  return {
    ...state,
    feed
  };
}

// exports
const actionCreators = {
  getFeed,
  setFeed
};
export { actionCreators };

// recuder export
export default reducer;
